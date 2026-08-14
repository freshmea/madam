# MADAM

MADAM 소상공인 기업의 정적 소개 사이트입니다. 별도 빌드 과정 없이 `index.html`을 브라우저에서 열거나 정적 웹 서버로 실행할 수 있습니다.

## 디렉터리 구조

```text
madam/
├── index.html                    # 메인 랜딩 페이지
├── assets/
│   ├── css/
│   │   └── styles.css            # 공통 사용자 스타일
│   ├── img/
│   │   └── madam-mark.svg        # 브랜드 이미지와 아이콘
│   └── js/
│       └── tailwind.config.js    # Tailwind 테마 설정
├── data/
│   └── site.json                 # 브랜드, 메뉴, 연락처 데이터
└── pages/
    └── README.md                 # 독립 HTML 페이지 추가 지침
```

## 로컬 실행

Python이 설치되어 있다면 저장소 루트에서 다음 명령을 실행합니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. Tailwind CSS는 CDN을 사용하므로 화면 스타일을 모두 불러오려면 인터넷 연결이 필요합니다.

## 파일 배치 원칙

- 새로운 독립 페이지는 `pages/`에 추가합니다.
- 사이트에서 사용하는 이미지는 `assets/img/`에 저장합니다.
- 공통 CSS와 JavaScript는 각각 `assets/css/`, `assets/js/`에 둡니다.
- 화면과 분리해서 관리할 JSON 데이터는 `data/`에 둡니다.
- `index.html`에서 자산을 참조할 때는 `assets/...`, `pages/` 안의 HTML에서는 `../assets/...` 경로를 사용합니다.
