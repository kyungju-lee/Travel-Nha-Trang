# 🔧 GitHub Pages 404 오류 해결 가이드

## ✅ 수정 완료 사항

다음 파일들이 추가/수정되었습니다:
- ✅ `.nojekyll` 파일 추가 (Jekyll 처리 비활성화)
- ✅ GitHub Actions 워크플로우 추가 (자동 배포)
- ✅ README 업데이트

## 🚀 다음 단계: GitHub에서 설정하기

### 1단계: GitHub 저장소로 이동
https://github.com/kyungju-lee/Travel-Nha-Trang

### 2단계: Settings 열기
저장소 페이지에서 상단 메뉴의 **Settings** 클릭

### 3단계: Pages 설정
1. 왼쪽 사이드바에서 **Pages** 클릭
2. **Source** 섹션에서 다음 중 하나 선택:

   **옵션 A: GitHub Actions (권장)**
   - Source: `GitHub Actions` 선택
   - 자동으로 배포됩니다!

   **옵션 B: Branch**
   - Source: `Deploy from a branch` 선택
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택

3. **Save** 버튼 클릭

### 4단계: 확인
1-2분 후 다음 URL로 접속:
**https://kyungju-lee.github.io/Travel-Nha-Trang/**

## ⚠️ 여전히 404가 뜬다면?

### 체크리스트:
- [ ] 리포지토리가 **Public**인지 확인 (Settings → General → Danger Zone 위쪽)
- [ ] Settings → Pages에서 Source가 올바르게 설정되었는지 확인
- [ ] 브라우저 캐시 삭제 후 재시도 (Ctrl+Shift+Delete)
- [ ] 5-10분 기다린 후 다시 시도 (배포에 시간이 걸릴 수 있음)
- [ ] GitHub Actions 탭에서 배포가 성공했는지 확인

### 리포지토리 이름 확인
GitHub Pages URL은 리포지토리 이름과 정확히 일치해야 합니다:
- 리포지토리 이름: `Travel-Nha-Trang`
- GitHub Pages URL: `https://kyungju-lee.github.io/Travel-Nha-Trang/`

대소문자가 다르면 404가 발생할 수 있습니다!

## 📱 배포 확인 방법

1. **GitHub Actions 확인**:
   - 저장소 → **Actions** 탭
   - "Deploy to GitHub Pages" 워크플로우가 성공했는지 확인

2. **Pages 설정 확인**:
   - Settings → Pages
   - "Your site is live at..." 메시지가 보이는지 확인

3. **직접 접속**:
   - https://kyungju-lee.github.io/Travel-Nha-Trang/
   - 페이지가 로드되는지 확인

## 🆘 추가 도움이 필요하면

GitHub Pages 공식 문서:
https://docs.github.com/en/pages/getting-started-with-github-pages

---

**설정을 완료하셨다면 알려주세요! 추가로 도와드리겠습니다.** 🚀

