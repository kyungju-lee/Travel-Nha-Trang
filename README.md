# 🌴 나트랑 여행 비서 | Nha Trang Travel Assistant

2026년 1월 1일 ~ 6일 나트랑 여행을 위한 종합 여행 가이드 웹 애플리케이션

## 📱 접속 방법

**GitHub Pages URL**: `https://kyungju-lee.github.io/Travel-Nha-Trang/`

**GitHub Repository**: https://github.com/kyungju-lee/Travel-Nha-Trang

스마트폰에서 접속 후 **홈 화면에 추가**하면 앱처럼 사용할 수 있습니다!

## ✨ 주요 기능

- 🤖 **AI 여행 비서** - 모바일 최적화 챗봇으로 실시간 질문 답변
- ✈️ 항공 정보 (TW045/TW046)
- 📅 상세 일정 (6일 타임라인)
- 🏨 리조트 정보 (아미아나 깜란 리조트)
- 🏛️ 추천 관광지 (빈원더스, 포나가르 사원 등)
- 🍽️ 맛집 & 카페 추천
- ✅ 체크리스트 (로컬스토리지 저장)
- 💡 여행 꿀팁

### 🤖 AI 여행 비서 사용법

화면 우측 하단의 💬 버튼을 클릭하면 AI 여행 비서가 열립니다. 다음과 같은 질문을 할 수 있습니다:

- "오늘 일정이 뭐야?"
- "빈원더스 가는 방법 알려줘"
- "맛집 추천해줘"
- "환전은 어떻게 해야 해?"
- "그랩 사용법 알려줘"
- "항공 정보 알려줘"
- "리조트 정보 알려줘"

모바일에서도 최적화된 인터페이스로 편리하게 사용할 수 있습니다!

## 🚀 배포 방법

### GitHub Pages 배포

#### 방법 1: GitHub Actions (권장)

이 저장소에는 자동 배포 워크플로우가 포함되어 있습니다. 다음 단계만 따르면 됩니다:

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: `GitHub Actions` 선택
3. 저장 후 자동으로 배포됩니다!

#### 방법 2: 수동 설정

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: `Deploy from a branch` 선택
3. **Branch**: `main` 선택
4. **Folder**: `/ (root)` 선택
5. **Save** 클릭

#### ⚠️ 404 오류 해결 방법

만약 404 오류가 발생한다면:

1. **리포지토리가 Public인지 확인** (GitHub Pages는 Public 저장소만 무료)
2. **Settings → Pages에서 설정 확인**:
   - Source: `main` 브랜치 또는 `GitHub Actions` 선택
   - Folder: `/ (root)` 선택
3. **`.nojekyll` 파일 확인** (이미 포함되어 있음)
4. **1-2분 기다린 후 다시 시도** (배포에 시간이 걸릴 수 있음)
5. **브라우저 캐시 삭제 후 재시도**

## 📁 파일 구조

```
.
├── index.html      # 메인 HTML
├── styles.css      # 스타일시트
├── script.js       # JavaScript 기능
├── travel-data.js  # 여행 정보 데이터베이스
├── chat.js         # AI 챗봇 로직
├── .gitignore      # Git 제외 파일
└── README.md       # 이 파일
```

## 💻 로컬 실행

```bash
# Python HTTP 서버
python -m http.server 8000

# 또는 npx serve
npx serve .
```

그 후 `http://localhost:8000` 접속

---

**즐거운 나트랑 여행 되세요! 🏖️✨**

