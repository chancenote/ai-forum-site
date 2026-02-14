# Helper script to login to Vercel
Write-Host "Vercel 로그인을 시작합니다..."
Write-Host "브라우저가 열리면 로그인 절차를 진행해주세요."

# Ensure Node.js is in PATH
$env:Path = "C:\Program Files\nodejs\;$env:Path"

# Check if npx is available
$npxPath = "C:\Program Files\nodejs\npx.cmd"
if (-not (Test-Path $npxPath)) {
    Write-Error "Node.js (npx)를 찾을 수 없습니다. Node.js가 설치되어 있는지 확인해주세요."
    exit 1
}

# Run vercel login
& $npxPath vercel login
