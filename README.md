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

1. GitHub에서 새 저장소 생성 (`nhatrang-travel`)
2. 다음 명령어 실행:

```bash
git remote add origin https://github.com/[사용자아이디]/nhatrang-travel.git
git branch -M main
git push -u origin main
```

3. GitHub 저장소 → Settings → Pages
4. Source: `main` 브랜치 선택
5. 몇 분 후 `https://[사용자아이디].github.io/nhatrang-travel/` 접속 가능!

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

