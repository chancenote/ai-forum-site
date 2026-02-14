# Deploy to Surge.sh
Write-Host "Morning AI Forum 배포를 시작합니다..."
Write-Host "이메일과 비밀번호를 입력하여 로그인하거나, 계정을 생성하세요."

# Check if npx is available
if (Get-Command "npx" -ErrorAction SilentlyContinue) {
    npx surge .
} else {
    Write-Host "Node.js (npx)가 설치되어 있지 않습니다. Node.js를 먼저 설치해주세요."
}
