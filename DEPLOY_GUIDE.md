# 🚀 GitHub Pages 배포 가이드

## 1단계: GitHub 저장소 만들기

1. **GitHub 로그인**: [github.com](https://github.com) 접속 후 로그인
2. **새 저장소 생성**: 
   - 우측 상단 `+` 버튼 → `New repository` 클릭
   - Repository name: `nhatrang-travel` 입력
   - **Public** 선택 (GitHub Pages는 Public 저장소만 무료)
   - **Initialize this repository with a README** 체크 해제 (이미 README 있음)
   - `Create repository` 클릭

## 2단계: 배포 스크립트 실행

PowerShell에서 다음 명령어 실행:

```powershell
.\deploy.ps1 -GitHubUsername "본인의GitHub아이디"
```

예시:
```powershell
.\deploy.ps1 -GitHubUsername "yoonhye-rim"
```

## 3단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. 상단 메뉴에서 **Settings** 클릭
3. 왼쪽 사이드바에서 **Pages** 클릭
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
5. **Save** 버튼 클릭

## 4단계: 접속 확인

1-2분 후 다음 URL로 접속:
```
https://[본인의GitHub아이디].github.io/nhatrang-travel/
```

예시:
```
https://yoonhye-rim.github.io/nhatrang-travel/
```

## 📱 스마트폰에서 홈 화면에 추가하기

1. 위 URL을 스마트폰 브라우저에서 열기
2. 브라우저 메뉴 (⋮ 또는 ☰) 클릭
3. **"홈 화면에 추가"** 또는 **"Add to Home Screen"** 선택
4. 앱 아이콘 이름: "나트랑 여행" 등으로 설정
5. 완료! 이제 앱처럼 사용 가능! 🎉

## 🔄 업데이트 방법

코드를 수정한 후:

```powershell
git add .
git commit -m "업데이트 내용"
git push
```

GitHub Pages는 자동으로 업데이트됩니다 (1-2분 소요)

---

**문제가 발생하면?**
- GitHub 저장소가 Public인지 확인
- Settings → Pages에서 main 브랜치가 선택되었는지 확인
- 브라우저 캐시 삭제 후 다시 시도

