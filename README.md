# MADAM

MADAM 소상공인 기업의 정적 소개 사이트입니다. 별도 빌드 과정 없이 `index.html`을 브라우저에서 열거나 정적 웹 서버로 실행할 수 있습니다.

## 디렉터리 구조

```text
madam/
├── index.html                    # 메인 랜딩 페이지
├── assets/
│   ├── css/
│   │   ├── styles.css            # 공통 사용자 스타일
│   │   ├── tailwind.css          # 배포용 Tailwind 빌드 결과
│   │   └── tailwind.input.css    # Tailwind 빌드 입력
│   ├── img/
│   │   └── madam-mark.svg        # 브랜드 이미지와 아이콘
│   └── js/
│       ├── navigation.js         # 반응형 2단 메뉴
│       └── projects.js           # 프로젝트 목록·상세 렌더링
├── data/
│   ├── site.json                 # 브랜드, 메뉴, 연락처 데이터
│   └── projects.json             # 프로젝트 사진·설명 데이터
└── pages/
    ├── projects.html             # 프로젝트 목록·필터 화면
    ├── project.html              # 프로젝트 상세 화면
    └── README.md                 # 독립 HTML 페이지 추가 지침
```

Tailwind 설정은 저장소 루트의 `tailwind.config.cjs`에서 관리합니다. 운영 페이지는 외부 Tailwind CDN이 아니라 빌드된 `assets/css/tailwind.css`를 사용합니다.

## 로컬 실행

Python이 설치되어 있다면 저장소 루트에서 다음 명령을 실행합니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. 스타일은 저장소의 정적 CSS에서 불러오므로 별도의 CDN 연결이 필요하지 않습니다.

CSS 클래스를 추가하거나 수정했다면 배포 전에 다음 명령으로 정적 CSS를 다시 생성합니다.

```bash
npm install
npm run build:css
```

## 파일 배치 원칙

- 새로운 독립 페이지는 `pages/`에 추가합니다.
- 사이트에서 사용하는 이미지는 `assets/img/`에 저장합니다.
- 공통 CSS와 JavaScript는 각각 `assets/css/`, `assets/js/`에 둡니다.
- 화면과 분리해서 관리할 JSON 데이터는 `data/`에 둡니다.
- `index.html`에서 자산을 참조할 때는 `assets/...`, `pages/` 안의 HTML에서는 `../assets/...` 경로를 사용합니다.

## 출간 도서 안내

메인 페이지의 `#book` 영역에서 『ROS2 입문』의 표지, 구매처와 무료 학습 자료를 소개합니다.
프로젝트 목록·상세의 책 정보는 `data/projects.json`의 `ros2-maker-guide` 항목에서 관리합니다.

- 공개 실습 저장소: https://github.com/freshmea/ros2-maker-guide
- 종이책: https://bookk.co.kr/bookStore/6aab47b74c0f28c3d4b33da7
- YES24 전자책: https://www.yes24.com/product/goods/196563555
- 부크크 전자책: https://bookk.co.kr/bookStore/6aa76a46dc64fe8c7e11a5e1
- 표지: `assets/img/books/ros2-maker-guide-cover.webp` (출판용 앞표지의 웹 표시용 사본)

구매처가 바뀌면 `index.html`과 `data/projects.json`을 함께 수정합니다.
책 표지는 `imageFit: "contain"`으로 전체가 보이도록 표시하고, `links`에 구매·학습 자료 링크를 둡니다.

## 프로젝트 추가 방법

1. 프로젝트 사진을 `assets/img/projects/`에 저장합니다.
2. `data/projects.json` 배열에 프로젝트 항목을 추가합니다.
3. `image`에는 저장소 루트를 기준으로 `assets/img/projects/파일명.jpg`처럼 입력합니다.
4. 프로젝트 목록과 상세 페이지는 JSON 데이터를 자동으로 읽어 화면을 구성합니다.
