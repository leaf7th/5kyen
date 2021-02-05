# 5kyen
## 介绍
生成5000兆円欲しい！（想要五千兆円！）风格图片的api，使用nodejs编写

核心功能来自 [koishi-plugin-gosen-choyen](https://github.com/idlist/koishi-plugin-gosen-choyen)
## 部署
```
git clone https://github.com/leaf7th/5kyen.git
npm install
node main.js
```
`node main.js <port> <max_length>`

port：服务运行端口，可选参数，默认为8081

max_length：最大长度，可选参数，默认为40

## 调用说明
` GET https://server:8081/5kyen/`
### 参数
|参数|含义|
|-|-|
|upper|上层文字|
|lower|上层文字|
|offset|下层文字的缩进量|
### 返回
|HTTP CODE|内容|
|-|-|
|200|生成图片的base64|
|400|参数有误|
### 实例
```
❯ curl http://127.0.0.1:8081/5k -d "upper=nook&lower=nook"

iVBORw0KGgoAAAANSUhEUgAAAg8AAAEOCAYAAAAOkfSaAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOydd3hURffHP/du3/SQntAJCb1DIr1IkQ4WFLCAigI/FVFB7GIXEJXXlyoiIBZARQUpokhv0lsgISQhnfRs33t/fwR5QWKBXRHMfJ7n/gG5d+aceXb3npn5zjmSqqoqAoFAIBAIBH8R+Z82QCAQCAQCwY2FCB4EAoFAIBBcESJ4EAgEAoFAcEWI4EEgEAgEAsEVIYIHgUAgEAgEV4QIHgQCgUAgEFwRIngQCAQCgUBwRYjgQSAQCAQCwRUhggeBQCAQCARXhAgeBAKBQCAQXBEieBAIBAKBQHBFiOBBIBAIBALBFSGCB4FAIBAIBFeE9p82QCAQXN+cPn2aTz/9jFWr15GSmk5pWTkgedyuViMRWi2IHl3bM37cOJo0aeK5sQKB4JogiZLcAoHgYlRV5auvvmLWrFls3boNu8PhnYYlDeh8wBAM0kWLnqqC7Czm5Wcm8Mwzz3inL4FA8LciggeBQHCBU6dOMXLkXTRteIznn3+T8KjBOBxGnE7w5IfC6XTy8svPMnv2PFyKAfyqX36To4SP50xj5MiRHvQkEAiuBSJ4EAgEAOzbt48Rw7sx7/0iEjuvw326FvavvkJVFI/alTQazA8/zNrNm+nTpw+SBKpvLZAv3zUN93WSmZaCLAs5lkBwPSM0DwKBgPz8fO64vTdfLSsivkFnJO3NFI9ogdZyDNlw9foGxaZiy9RjfuQR1q5dC4CvD5RSeUCSU2Dh6NGjNG7c+Kr7FAgEfz8ieBAIBDz11FM8+nAu8fVB0o/BdeIESloKAf3sHrVbdliL+d77sCsKH3/8MUYD2BwymHSVPyDrycjIEMGDQHCdI9YGBYIqTn5+Pt99u4hRI3UgRSLphmD54D1MtS0oKh5d1tNmTA+PZ/ny5RQUFNCyuYRT9eH3T2uomEyma+m+QCC4CsTKg0BQxZk0aRIjhmnRG42gH4XqkLB9spSAHi7c7qtv15EFmjqxaGNjmTNqFACl5RLoA37/IcVJgwYNrr5TgUBwTRDBg0BQxVm8ZCm/bPMDSYusuwfrp8vRhqmoenB7oJW0nfHD58UnOX78OFu3bqV2LQ2Hj2nA1/i7z8TWiiYsLOzqOxUIBNcEETwIBFWYmTNnclM7
```