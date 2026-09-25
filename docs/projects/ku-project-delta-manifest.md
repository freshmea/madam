# 2025 프로젝트 · 2026 변화 기록의 자료 및 이미지 명세

2026-09-25 편집. 교육생 이름·얼굴·계정·평가·개별 저장소 주소는 싣지 않는다. 공개 글에는 익명화한 제출 자료명을 출처로 표시하며 내부 원본은 재배포하지 않는다.

## 2025 프로젝트 그림

| 글 | 자산 | 근거 |
|---|---|---|
| 첫 프로젝트 | development-stages.webp, sensor-control-storage.webp | 내부 1차 발표자료의 개발 단계와 기술 구성 슬라이드. 인물·개인 식별 정보가 없는 장면만 선택 |
| 두 번째 프로젝트 | parking-hardware.webp, parking-architecture.webp | 내부 2차 발표자료의 주차장 모형과 구성도. 계정이 보이는 터미널 장면 제외 |
| 최종 프로젝트 | notification-hardware.webp | 내부 3차 발표자료의 알림 장치 사진. 인물이 있는 추론 화면 제외 |
| 세 프로젝트 공통 | hero-illustration.png / .webp | AI 생성 설명 이미지. 실제 교육생 장치 사진이나 당시 촬영으로 제시하지 않음 |
| 세 프로젝트 공통 | 기타 SVG | 제출물과 운영 기록의 기술 흐름을 정리한 설명 도해 |

운영 기록과 제출 문서가 충돌할 때 실제 운영 주간 기록 및 사용자 확인 종료일을 우선했다. 최종 프로젝트의 7월 18일 보고서 작성일을 교육 종료일로 쓰지 않는다. 교육생 프로젝트의 구현·결과를 강사의 직접 구현으로 표현하지 않는다.

## 2026 비교 근거

- 2025 저장소 고정 리비전: `856a133a87d232a8ec714687139644f01f0a6cb9`.
- 2026 저장소 고정 리비전: `09a06e6c945d4ecc62b783ddab5b7c4e729f3f93`.
- 날짜별 수업 기록, 강사 예제, 6월 1일 프로젝트 가이드의 요구 조건을 구분했다. 파일별 공개 링크는 각 원고 참조 절에 있다.
- 2025년에도 Flask·GUI·다중 프로세스가 있었다. 이를 2026년 최초 도입으로 표현하지 않는다.
- 2026년 변화는 5월 28일 pywebview 실습, 3월 19일 MQTT 발행 실습, Pico 2W 중심 구성과 명시적인 프로세스 역할·이벤트 필드다.
- C/C++ 확장·Rust pyo3는 기록상 설명 범위다. 가이드의 AI·RAG·디지털 트윈·FastAPI 등 선택·권장 사항을 수업 완료 성과로 바꾸지 않는다.

## 2026 이미지와 재현 범위

| 자산 | 출처 및 의미 |
|---|---|
| pywebview/teacher-api-structure.webp | 강사 저장소 `PyWebView/doc/ppt/gpt_image_slides/slide_11.png`. AI 생성 교안 그림이며 실제 실행 화면 아님 |
| pywebview/teacher-localhost.webp | 같은 경로의 `slide_12.png`. localhost 비유 그림. 그림 속 날짜는 수업일 근거 아님 |
| pywebview/timer-browser-replay.png | `python_example/webview_example/timer`의 Flask 서버와 원본 프런트엔드 이번 재실행 |
| pywebview/counter-before.png, counter-synced.png | 같은 경로 `click`의 Flask 서버·JS. 두 브라우저 창을 열어 한 창에서 증가시킨 값 2가 다른 창에 SSE로 반영되는 것을 확인 |
| pywebview/sse-flow.svg, bridge-flow.svg | 원본 코드를 바탕으로 직접 작성한 통신·파일 메타데이터 경로 도해 |
| iot-architecture/hero-illustration.png / .webp | AI 생성 개념 그림. 배선·장치·UI는 실제 구현 증거가 아님 |
| iot-architecture/mqtt-flow.svg, process-contract.svg, event-contract.svg | 발행 코드와 프로젝트 가이드의 역할·데이터 필드를 재구성한 도해 |

위 표의 pywebview/와 iot-architecture/는 각각 `assets/img/projects/ku-pywebview-2026/`, `assets/img/projects/ku-iot-architecture-2026/`를 뜻한다.

재실행은 Windows Python·Flask 3.1.3 및 Edge 브라우저에서 확인했다. pywebview 네이티브 창, 실제 Pico 2W·센서·MQTT 브로커, 학생 시스템의 현장 성능은 이번 편집의 실행 검증 범위가 아니다. 브리지 파일 예제는 고정 demo_files의 이름·확장자·크기 반환이며 임의 파일 편집기로 설명하지 않는다.

AI 생성 프롬프트는 [별도 JSON](ku-project-delta-image-prompts.json)에 보존했다. 생성 원본은 보존하고 웹 게시용 WebP만 변환했다.
