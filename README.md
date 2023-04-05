# 第三週主線任務

## 本堂作業

- 將第二堂程式碼改寫為 express 格式
- routes： 將網址路徑管理拆到 routes 資料夾的 posts.js
- model：將 post collections 拆到 model 資料夾，並載入到 routes/posts.js 上

#### **部署 render 提示**

1. 當使用 express 產生器時，package.json 上的 script:start 會自動執行 www/bin
2. 記得要下 Git 忽略，避免部署時檔案太大會無法部署
3. 記得要在 render、fly.io 加上環境變數 (ex. 雲端 mongoDB)

## express 語法

- req.query：取得參數
  - [比價網](https://feebee.com.tw/s/iphone/?pl=3300&ph=12000)
  - [TDX 觀光 API](https://tdx.transportdata.tw/api-service/swagger/basic/cd0226cf-6292-4c35-8a0d-b595f0b15352#/)
- req.params：取得動態路由
- req.body(express 產生器)：獲得 post body，就不需要寫原生接 buffer
