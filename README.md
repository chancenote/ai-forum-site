# Morning AI Forum Website

2026 모닝 AI 포럼 공식 웹사이트입니다.

## 🌐 사이트 접속

현재 Pull Request가 머지되면 다음 방법으로 배포할 수 있습니다:

### 옵션 1: Vercel 배포 (추천)

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 완료!

```bash
# 또는 Vercel CLI 사용
npm install -g vercel
vercel --prod
```

### 옵션 2: GitHub Pages

1. 저장소 Settings > Pages로 이동
2. Source를 "main" 브랜치로 설정
3. 저장하면 자동 배포
4. `https://chancenote.github.io/ai-forum-site/` 에서 접속 가능

### 옵션 3: Netlify

1. [Netlify](https://netlify.com)에 로그인
2. "Add new site" > "Import an existing project"
3. GitHub 저장소 선택
4. 배포 완료!

## 🚀 로컬 실행

```bash
# 간단한 HTTP 서버 실행
python3 -m http.server 8080

# 브라우저에서 열기
# http://localhost:8080/index.html
```

## 📁 파일 구조

```
.
├── index.html          # 메인 페이지
├── blog.html           # 블로그 목록
├── leaders.html        # 운영진 소개
├── posts/              # 블로그 포스트
│   └── hello-world.html
├── styles.css          # 전체 스타일
├── script.js           # 인터랙션
└── vercel.json         # Vercel 설정
```

## ✨ 주요 기능

- 📱 반응형 디자인
- ♿ 웹 접근성 (WCAG 2.1)
- 🔍 SEO 최적화
- 🎨 다크 테마 디자인
- ⚡ 빠른 로딩 속도

## 🛠️ 기술 스택

- HTML5
- CSS3 (Glassmorphism, CSS Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter, Outfit)

## 📝 라이선스

© 2026 Morning AI Forum. All rights reserved.
