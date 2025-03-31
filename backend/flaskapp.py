path = "./images/ISIC_0085644.jpg"
from ultralytics import YOLO
model = YOLO('./best.pt') 

results = model(path)

result = results[0]
result.save('./result/ISIC_0085644.jpg')

class_id = result.probs.top1
class_name = model.names[class_id]
print(class_name)