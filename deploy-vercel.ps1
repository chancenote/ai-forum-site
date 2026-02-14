# Deploy to Vercel (with hostname patch)
Write-Host "Morning AI Forum 배포를 시작합니다 (Vercel)..."

# Ensure Node.js is in PATH
$env:Path = "C:\Program Files\nodejs\;$env:Path"

# Check if npm is available (for installing vercel if needed)
$npmPath = "C:\Program Files\nodejs\npm.cmd"
if (-not (Test-Path $npmPath)) {
    Write-Host "Node.js (npm)를 찾을 수 없습니다. Node.js를 먼저 설치해주세요."
    exit 1
}

# Ensure local vercel package is installed
if (-not (Test-Path "$PSScriptRoot\node_modules\vercel")) {
    Write-Host "Vercel 로컬 패키지가 없습니다. 설치합니다..."
    & $npmPath install vercel
}

# Run vercel deploy with hostname patch
# Utilizing local patch-hostname.js to fix Korean hostname issue
Write-Host "배포 중... (호스트네임 패치 적용)"
node -r ./patch-hostname.js node_modules/vercel/dist/index.js --prod --yes
