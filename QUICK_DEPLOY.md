# ⚡ 빠른 배포 가이드

## 🚀 3단계로 끝내기!

### 1️⃣ GitHub 저장소 만들기
1. https://github.com/new 접속
2. Repository name: `nhatrang-travel`
3. **Public** 선택 ⚠️ (중요!)
4. "Initialize this repository with a README" **체크 해제**
5. `Create repository` 클릭

### 2️⃣ PowerShell에서 배포 실행
```powershell
cd "C:\Downloads\work\2025_12_25 Travel-Nha-Trang"
.\deploy.ps1 -GitHubUsername "본인의GitHub아이디"
```

예시:
```powershell
.\deploy.ps1 -GitHubUsername "yoonhye-rim"
```

### 3️⃣ GitHub Pages 활성화
1. GitHub 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. Source: **main** 브랜치 선택
4. **Save** 클릭

## ✅ 완료!

1-2분 후 접속:
```
https://[본인의GitHub아이디].github.io/nhatrang-travel/
```

## 📱 스마트폰 홈 화면 추가
1. 위 URL을 스마트폰에서 열기
2. 브라우저 메뉴 → "홈 화면에 추가"
3. 완료! 🎉

