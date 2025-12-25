# GitHub Pages 배포 스크립트
# 사용법: .\deploy.ps1 -GitHubUsername "your-username"

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername
)

Write-Host "🌴 나트랑 여행 비서 GitHub Pages 배포 시작..." -ForegroundColor Cyan

# 저장소 이름
$repoName = "nhatrang-travel"
$repoUrl = "https://github.com/$GitHubUsername/$repoName.git"

# Git 원격 저장소 확인
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "📦 원격 저장소 추가 중..." -ForegroundColor Yellow
    git remote add origin $repoUrl
} else {
    Write-Host "✅ 원격 저장소가 이미 설정되어 있습니다." -ForegroundColor Green
    git remote set-url origin $repoUrl
}

# 브랜치를 main으로 변경
Write-Host "🌿 브랜치를 main으로 변경 중..." -ForegroundColor Yellow
git branch -M main

# 푸시
Write-Host "🚀 GitHub에 푸시 중..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ 배포 완료!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📱 접속 URL:" -ForegroundColor Cyan
    Write-Host "   https://$GitHubUsername.github.io/$repoName/" -ForegroundColor White
    Write-Host ""
    Write-Host "⏰ GitHub Pages 활성화까지 1-2분 소요됩니다." -ForegroundColor Yellow
    Write-Host "   Settings → Pages → Source: main 브랜치 선택 필요!" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ 푸시 실패. GitHub 저장소가 생성되었는지 확인해주세요." -ForegroundColor Red
    Write-Host "   저장소 URL: $repoUrl" -ForegroundColor Yellow
}

