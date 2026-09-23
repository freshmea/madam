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
    ├── company.html              # 브랜드·기업 정보
    ├── service.html              # 사업 영역·전문 기술·출간 도서
    ├── insight.html              # 일하는 방식·교육 실적·방향
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

Service 페이지의 `pages/service.html#book` 영역에서 『ROS2 입문』의 표지, 구매처와 무료 학습 자료를 소개합니다.
책 소개는 Project 목록·상세에 중복 등록하지 않습니다. 기존 메인 `#book` 주소는 새 출판 영역으로 이동합니다.

- 공개 실습 저장소: https://github.com/freshmea/ros2-maker-guide
- 종이책: https://bookk.co.kr/bookStore/6aab47b74c0f28c3d4b33da7
- YES24 전자책: https://www.yes24.com/product/goods/196563555
- 부크크 전자책: https://bookk.co.kr/bookStore/6aa76a46dc64fe8c7e11a5e1
- 표지: `assets/img/books/ros2-maker-guide-cover.webp` (출판용 앞표지의 웹 표시용 사본)

구매처가 바뀌면 `pages/service.html`의 링크를 수정합니다. 책 표지는 원래 비율을 유지해 전체를 표시합니다.

## 페이지와 메뉴

메인에는 핵심 브랜드 소개와 로고만 표시하며, 본문에 이동 링크를 두지 않습니다.
Company, Service, Project, Insight는 상단 메뉴와 모바일 메뉴에서 각각 독립 페이지로 이동합니다.
Contact는 이메일 문의로 연결합니다. 페이지별 메뉴 HTML과 `data/site.json`의 메뉴 정보를 함께 관리합니다.

## 프로젝트 추가 방법

1. 프로젝트 사진을 `assets/img/projects/`에 저장합니다.
2. `data/projects.json` 배열에 프로젝트 항목을 추가합니다.
3. `image`에는 저장소 루트를 기준으로 `assets/img/projects/파일명.jpg`처럼 입력합니다.
4. 프로젝트 목록과 상세 페이지는 JSON 데이터를 자동으로 읽어 화면을 구성합니다.

팀별 결과를 담는 긴 사례 글은 `detailPage`에 `pages/` 기준 HTML 파일명을 지정해 목록에서 직접 연결합니다.
공주대 매니퓰레이터 사례는 [소개 페이지](pages/gongju-manipulator-2026.html)와 [편집용 원고](docs/projects/gongju-manipulator-2026.md)에서 관리합니다.
내용을 고칠 때 두 파일을 함께 갱신하고, 최종 발표·기술서를 계획서보다 우선하여 실제 구현 범위를 구분합니다.

공주대 RC카 사례는 [소개 페이지](pages/gongju-rc-2026.html)와 [편집용 원고·자료 기준](docs/projects/gongju-rc-2026.md)에서 관리합니다. 자료 취합·작성 기준은 문서에만 남기고 공개 사례 본문에는 표시하지 않습니다.

### 고려대 세종 IoT 교육·일경험 기록

- `pages/ku-iot-2026.html`: 과목별 수업. 원고·자료 기준은 `docs/projects/`, 대표 이미지 16장은 `assets/img/projects/ku-iot-2026/`에서 관리합니다.
- `pages/ku-iot-projects-2026.html`: 중간 프로젝트. 원고·자료 기준은 `docs/projects/`, 대표 이미지 16장은 `assets/img/projects/ku-iot-2026/`에서 관리합니다.
- `pages/ku-work-experience-2026.html`: 일경험 프로젝트. 원고·자료 기준은 `docs/projects/`, 대표 이미지 16장은 `assets/img/projects/ku-iot-2026/`에서 관리합니다.

- `pages/dxax-2026.html`: 고려대 온라인 DX·AX 교육 기록. 네 단계의 교육 내용과 cover 요약 그림 19장. 자료·원고는 `docs/projects/dxax-2026.md`, 이미지 대응표는 `docs/projects/dxax-2026-images.json`.

### 세종 AI 리터러시 2025

- `pages/ai-literacy-2025.html`: 2025년 12월 1~17일 교육 내용. 온라인 실습과 대면 프로젝트를 연결한 기록.
- `pages/ai-literacy-projects-2025.html`: 1차 교육생 9명의 프로젝트와 제출 작업물.
- 원고·자료 기준: `docs/projects/ai-literacy-2025.md`. 이미지: `assets/img/projects/ai-literacy-2025/`.
