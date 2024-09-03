---
tags:
  - AI/绘画
---


# 处理数据
解放你的双手 
## 处理目标
数据完整性与一致性
清除损坏图片
统一处理(替换透明背景)
## 优化存储效率
压缩分辨率过高图片
选择节省空间的存储格式(webp格式90%质量)

### 图片读取和有效性验证


1.利用python的pillow库的
Image对象加载图片

`def load image(image_path):`
`、.`
`image =Image.open(image_path)`
`if not image.mode =="RGB":`
`image = image.convert("RGB")`
`img =np.array(image,np.uint8)`
`return img`

`from PIL import Image`
`impoct nx Dy aE pPxLS = None`
`def load image(image path:str)->Image.Image:`
`try:`
`img=Image,open(image_path)#读取图片为image对象`
`np.array(img)#尝试用numpy加载图片为效组`
`return img`
`except Exception as e:`
`print(f"Error processing fimage path}: {str(e)}")`
`return None`

`def load image(image_path:str)->Image.Image:`
`try:`
`with Image.open(image path) as img:`
`img.load()#读取图片加我到内存`
`np.array(img)#营试用numpy加数图片`
`img=resize image(img)#resize图片`
`if has_alpha(img):#读取并移除透明图层`
`img=add white background(img)#添加自色背景`
`if not img.mode == "RGB" :`
`img = img.convert( RGB")`
`return ieo`

2.用NumPy验证图片
3.用try-except处理异常
来源:[[kohya-ss/sdscripts/blob/main/library/train util.py]]
