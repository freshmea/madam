# 고려대 2025 다섯 과목 이미지 보완 명세

2026-09-25 편집. 교육생 개인정보가 없는 강사 자료와 설명용 그림만 사용했습니다.

## 구분과 재현

- AI 대표 일러스트 5장: built-in imagegen으로 생성. 실제 현장·성능·장비 구성을 증명하는 자료가 아닙니다. `hero-illustration.png` 원본과 배포용 WebP를 과목별 assets 폴더에 보관했습니다.
- 노트북 원본 출력 8장: 강사 저장소의 저장된 PNG 출력을 변형 없이 추출. 재학습하지 않았습니다. 아래 명세의 셀과 출력 인덱스는 0부터 셉니다.
- Python 실행 화면 2장: 강사 Game/Ball/UI 원본 클래스를 SDL dummy 환경에서 실행. seed=2025, update/draw 20회와 120회 뒤 캡처. 당시 교실 사진이 아닙니다.
- OpenCV 재현 3장: 새로 만든 도형 입력에 Canny, HSV inRange/contour, perspective transform 적용. 당시 C++ 웹캠 코드의 현장 검증은 아닙니다.
- TCP/IP 직접 제작 SVG 3장: 수신 경계·half-close·입출력 준비 상태를 설명하는 가상 도해. 패킷 측정 기록이 아닙니다.

재현 스크립트: [`scripts/ku-course-visuals.py`](../../scripts/ku-course-visuals.py). 실행 환경: Python 3.12, pygame 2.6.1, opencv-python-headless 5.0.0.93, numpy 2.5.3. 재현 도구 버전은 2025년 수업 환경과 구분합니다.

근거 저장소 리비전: `856a133a87d232a8ec714687139644f01f0a6cb9`.

## 생성 프롬프트

노트북 셀·출력 위치와 이미지별 원본 경로는 [자산 목록](ku-course-image-assets-2025.json)에 기록했습니다. 공개 페이지의 각 그림에도 고정 리비전의 원본 링크가 있습니다.

### TCP/IP

Warm ivory and charcoal tactile 3D isometric educational illustration, two computers linked through a central network switch and server, orange and blue luminous data packets, foreground process blocks and shared-memory tray. Wide 3:2 composition. No readable text, personal data, people, logos or watermark. Conceptual illustration, not actual classroom photography or a literal wiring diagram. (네트워크 프롬프트의 핵심 지시 재기록.)

### python

Use case: scientific-educational editorial illustration. Asset type: wide 3:2 hero for Korean university Python programming course blog. Create an exceptionally polished tactile 3D isometric scene with warm ivory background, charcoal equipment, orange and blue accents, soft studio shadows, visually rich coherent composition. Subject: a laptop with an abstract dark code editor, colorful grouped list blocks and key-value paired objects, small modular package boxes, separate translucent virtual-environment containers, and a second display showing a simple bouncing-ball physics game with a few colored circles. Make the scene show the progression from code and data to a runnable application. No snakes or Python logos. No readable text, no fake code, no logos, no personal data, no faces, no watermarks. This is a conceptual education illustration not a photograph of actual teaching or measured results. Keep charts conceptually plausible but unlabeled.

### opencv

Use case: scientific-educational editorial illustration. Asset type: wide 3:2 hero for Korean university OpenCV computer vision course blog. Create an exceptionally polished tactile 3D isometric scene with warm ivory background, charcoal equipment, orange and blue accents, soft studio shadows, visually rich coherent composition. Subject: a tabletop USB camera looking at simple colored geometric solids, a large screen showing a triptych of the same geometric scene: original colored objects, clean black-and-white edge contours, and corresponding feature points connected by fine matching lines. Include subtle pixel grid tiles and camera lens in foreground. No human faces or surveillance scene. No readable text, no fake code, no logos, no personal data, no faces, no watermarks. This is a conceptual education illustration not a photograph of actual teaching or measured results. Keep charts conceptually plausible but unlabeled.

### machine-learning

Use case: scientific-educational editorial illustration. Asset type: wide 3:2 hero for Korean university machine learning and data analysis course blog. Create an exceptionally polished tactile 3D isometric scene with warm ivory background, charcoal equipment, orange and blue accents, soft studio shadows, visually rich coherent composition. Subject: an open laptop with an attractive notebook showing a clean scatterplot of two synthetic colored data clusters, small structured tabular data tiles in foreground, two separate data trays for training and evaluation represented without labels, a branching decision tree model made of connected blocks, a small bar chart. Depict exploratory data analysis and validation rather than magical AI. No readable text, no fake code, no logos, no personal data, no faces, no watermarks. This is a conceptual education illustration not a photograph of actual teaching or measured results. Keep charts conceptually plausible but unlabeled.

### deep-learning

Use case: scientific-educational editorial illustration. Asset type: wide 3:2 hero for Korean university deep learning model integration course blog. Create an exceptionally polished tactile 3D isometric scene with warm ivory background, charcoal equipment, orange and blue accents, soft studio shadows, visually rich coherent composition. Subject: a workstation with two screens, one showing abstract training curves and a modest neural-network diagram, the other showing a simple handwritten digit with a prediction bar chart. In foreground visual layers of small image feature maps, a compact model storage object and two connected application blocks illustrating model request and response. No robot heads, no brains, no people. No readable text, no fake code, no logos, no personal data, no faces, no watermarks. This is a conceptual education illustration not a photograph of actual teaching or measured results. Keep charts conceptually plausible but unlabeled.
