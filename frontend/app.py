from flask import Flask, request, render_template, jsonify
from ultralytics import YOLO
import os
import cv2
import numpy as np
from datetime import datetime
from flask_cors import CORS
import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url
import io
from PIL import Image
import base64

app = Flask(__name__)
CORS(app)

# Cloudinary configuration
cloudinary.config(
    cloud_name="dpoecdktk",
    api_key="647222497897682",
    api_secret="ExkrjhAbHholYY3iaAjaJdkQQy8"
)

# Load YOLO models
def get_yolo_models():
    classification_model = YOLO('./best.pt')
    segmentation_model = YOLO('models/segmentaton_model.pt')
    throat_model=YOLO('models/throat_model.pt')
    mammo_model=YOLO('models/mammo_model.pt')
    return classification_model, segmentation_model,throat_model,mammo_model

# Global variables to store the models
classification_model, segmentation_model,throat_model,mammo_model = get_yolo_models()

@app.route('/segmentation', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No image selected'}), 400
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{timestamp}_{file.filename}"
    
    try:
        # Upload original image to Cloudinary
        upload_result = cloudinary.uploader.upload(file, public_id=filename)
        filepath = upload_result['secure_url']
        
        # Process classification
        classification_results = classification_model(filepath, verbose=False)
        classification_result = classification_results[0]
        class_id = classification_result.probs.top1
        class_name = classification_model.names[class_id]
        
        # Process segmentation
        segmentation_results = segmentation_model(filepath, show_conf=False,conf=0.5 ,verbose=False)
        segmentation_result = segmentation_results[0]
        
        # Save segmentation result to Cloudinary
        result_path = f"result_{filename}"
        segmentation_result.save(result_path)
        result_upload = cloudinary.uploader.upload(result_path, public_id=result_path)
        os.remove(result_path)  # Clean up local file
        
        return jsonify({
            'success': True,
            'classification': {
                'class_name': class_name
            },
            'segmentation': {
                'result_url': result_upload['secure_url']
            },
            'original_image_url': upload_result['secure_url']
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500
        
@app.route('/throat', methods=['POST'])
def throat():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No image selected'}), 400
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{timestamp}_{file.filename}"
    try:
        # Upload original image to Cloudinary
        upload_result = cloudinary.uploader.upload(file, public_id=filename)
        filepath = upload_result['secure_url']
        
        # Process classification
        throat_results = throat_model(filepath, verbose=False)
        result = throat_results[0]
        result_path = f"result_{filename}"
        result.save(result_path)
        result_upload = cloudinary.uploader.upload(result_path, public_id=result_path)
        # result.save('throat-res.jpg')
        os.remove(result_path)

        
        # Process segmentation
        # segmentation_results = segmentation_model(filepath, show_conf=False, verbose=False)
        # segmentation_result = segmentation_results[0]
        
        # # Save segmentation result to Cloudinary
        # result_path = f"result_{filename}"
        # segmentation_result.save(result_path)
        # result_upload = cloudinary.uploader.upload(result_path, public_id=result_path)
        # os.remove(result_path)  # Clean up local file
        
        detected_classes = []
        for box in result.boxes:
            class_id = int(box.cls[0].item())
            class_name = result.names[class_id]
            confidence = box.conf[0].item()
            detected_classes.append({
                'name': class_name,
                'confidence': round(confidence,2)})
            
        print(detected_classes[0]["name"])
        
        return jsonify({
            'success': True,
            'throat': {
                'result_url': result_upload['secure_url'],
                'class_name':detected_classes[0]["name"]
            },
            'original_image_url': upload_result['secure_url']
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500
        
@app.route('/mammography',methods=['POST'])
async def histo():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No image selected'}), 400
    
    try:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{timestamp}_{file.filename}"
        upload_result = cloudinary.uploader.upload(file, public_id=filename)
        filepath = upload_result['secure_url']
        throat_results = mammo_model(filepath, verbose=False)
        result = throat_results[0]
        result_path = f"result_{filename}"
        result.save(result_path)
        result_upload = cloudinary.uploader.upload(result_path, public_id=result_path)
        # result.save('throat-res.jpg')
        os.remove(result_path)
        return jsonify({
            'success': True,
            'mammo': {
                'result_url': result_upload['secure_url'],
            },
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500
    
        
        
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8001)