# 김지빈 포트폴리오

전북대학교 컴퓨터인공지능학부 김지빈의 개인 포트폴리오입니다. 인공지능·금융권 IT·로보틱스 관심 분야와 프로젝트, 교육, 동아리, 멘토링, 봉사 및 수상 경험을 소개합니다.
2026 2학기 초급프로젝트 과제1로 제작하게 되었습니다.

- 공개 사이트: <https://rlawlqls.github.io/MyWebPage/>
- 저장소: <https://github.com/rlawlqls/MyWebPage>
- 배포 기록: <https://github.com/rlawlqls/MyWebPage/actions>

## 개발 환경

- Windows 11
- Hugo Extended 0.167.0 (워크플로 고정 버전)
- Python 3.12 (GitHub Pages 빌드 보조 스크립트)
- Git 및 GitHub Actions

Hugo Extended 설치 예시:

```powershell
winget install Hugo.Hugo.Extended
hugo version
```

표시된 Hugo 버전이 0.128.0 이상인지 확인합니다. 이 저장소의 배포 워크플로는 재현성을 위해 0.167.0을 설치합니다.

## 로컬 실행

저장소 루트에서 다음 명령을 실행합니다.

```powershell
cd site
hugo server --config hugo.toml,pages.json --theme template --themesDir themes
```

터미널에 표시되는 로컬 주소를 브라우저에서 열어 확인합니다.

## 배포용 빌드

GitHub Pages와 같은 설정으로 결과물을 생성하려면 저장소 루트에서 실행합니다.

```powershell
python .github/pages_build.py --build
```

또는 `site/`에서 Hugo를 직접 실행할 수 있습니다.

```powershell
cd site
hugo --gc --minify --config hugo.toml,pages.json --theme template --themesDir themes --destination ../public
```

빌드 결과에는 `public/index.html`이 포함되어야 합니다.

## 수정 위치

- 페이지 글: `site/content/`
- 프로젝트·기술·수상·활동 데이터: `site/data/`
- 메뉴와 페이지 구조: `site/themes/template/layouts/`
- 스타일: `site/themes/template/assets/css/main.css`
- 동작: `site/themes/template/assets/js/`
- 이미지와 PDF: `site/static/images/`, `site/static/files/`

## 수정 후 재배포

1. 변경 파일과 빌드를 확인합니다.

   ```powershell
   git status
   python .github/pages_build.py --build
   ```

2. 변경 목적에 맞는 메시지로 커밋하고 `main`에 푸시합니다.

   ```powershell
   git add README.md .gitignore site
   git commit -m "변경 내용을 설명하는 메시지"
   git push origin main
   ```

3. [GitHub Actions](https://github.com/rlawlqls/MyWebPage/actions)에서 `Deploy Hugo to GitHub Pages` 실행이 성공했는지 확인합니다.
4. 공개 사이트를 새로고침해 변경 내용과 내부 링크를 확인합니다.

워크플로는 `main` push 때 자동 실행되며 Hugo 빌드 결과를 GitHub Pages에 배포합니다. 공개 주소의 하위 경로 `/MyWebPage/`는 `site/pages.json`과 배포 빌드 스크립트가 반영합니다.

## 출처와 이용 조건

- 원본 테마: [kiyomi-portfolio](https://github.com/mathscantor/hugo-theme-kiyomi-portfolio), MIT License
- 테마 라이선스 전문: [LICENSE](LICENSE)
- 글, 자기소개, 학습 계획, 활동 및 프로젝트 설명: 김지빈 작성
- 개인·활동 사진과 프로젝트 화면: 김지빈 제공 자료
- 웹 글꼴: [Google Fonts Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR), SIL Open Font License

생성형 AI는 일부 HTML·CSS·JavaScript 수정안 작성과 접근성·반응형 검토를 보조했습니다. 공개할 내용의 선택, 개인 경험 서술, 최종 코드 반영 및 동작 검증은 작성자가 직접 수행했습니다. 외부 자료는 각 출처와 이용 조건을 따릅니다.
