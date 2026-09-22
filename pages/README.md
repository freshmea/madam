# HTML pages

독립 페이지가 추가될 때 이 디렉터리에 배치합니다.

- 공통 스타일: `../assets/css/styles.css`
- 공통 이미지: `../assets/img/`
- 공통 스크립트: `../assets/js/`
- 정적 데이터: `../data/`

메인 랜딩 페이지는 GitHub Pages 기본 진입점을 유지하기 위해 저장소 루트의 `index.html`에 둡니다.

현재 페이지:

- `company.html`: 브랜드 스토리와 기업 정보
- `service.html`: 사업 영역, 전문 기술과 출간 도서 (`#book`)
- `insight.html`: 일하는 방식, 교육 실적과 앞으로의 방향
- `projects.html`: 프로젝트 목록과 카테고리 필터
- `project.html?id=프로젝트-id`: 프로젝트 상세 화면
- `gongju-manipulator-2026.html`: 공주대 매니퓰레이터 4개 팀 프로젝트 사례. 원고는 `../docs/projects/gongju-manipulator-2026.md`, 전용 스타일은 `../assets/css/project-case.css`입니다.

모든 페이지에 동일한 상단·모바일 메뉴를 두고 현재 페이지를 `aria-current="page"`로 표시합니다.
메인의 본문은 핵심 소개만 유지하고 페이지 이동은 메뉴를 통해 제공합니다.
『ROS2 입문』 소개는 Service에만 두고 프로젝트 데이터에는 중복 등록하지 않습니다.

- `gongju-rc-2026.html`: ICT이노베이션스퀘어 RC카 과정의 5개 팀 프로젝트. 원고·자료 기준은 `../docs/projects/gongju-rc-2026.md`, 팀별 이미지 10장은 `../assets/img/projects/gongju-rc-2026/`에서 관리합니다.

### 고려대 세종 IoT 교육·일경험 기록

- `ku-iot-2026.html`: 과목별 수업. 원고·자료 기준은 `docs/projects/`, 대표 이미지 16장은 `assets/img/projects/ku-iot-2026/`에서 관리합니다.
- `ku-iot-projects-2026.html`: 중간 프로젝트. 원고·자료 기준은 `docs/projects/`, 대표 이미지 16장은 `assets/img/projects/ku-iot-2026/`에서 관리합니다.
- `ku-work-experience-2026.html`: 일경험 프로젝트. 원고·자료 기준은 `docs/projects/`, 대표 이미지 16장은 `assets/img/projects/ku-iot-2026/`에서 관리합니다.
