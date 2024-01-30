echo "[$(date '+%Y-%m-%d %H:%M:%S')] - start chrome in background..."
nohup google-chrome-stable > chrome.log 2>&1 &
echo "[$(date '+%Y-%m-%d %H:%M:%S')] - chrome start success..."


echo "[$(date '+%Y-%m-%d %H:%M:%S')] - start main app..."
node dist/server.js
echo "[$(date '+%Y-%m-%d %H:%M:%S')] - main app start sucess..."