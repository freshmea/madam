"""Reproduce editorial demonstrations; never substitutes for 2025 classroom evidence.

Requires pygame, opencv-python-headless and numpy. Source checkout passed with --source.
The notebook figures are extracted without alteration. Run from the MADAM root.
"""
import argparse, base64, json, os, random, sys
from pathlib import Path

p = argparse.ArgumentParser()
p.add_argument('--source', type=Path, required=True)
p.add_argument('--libs', type=Path)
a = p.parse_args()
if a.libs: sys.path.insert(0, str(a.libs))
root = Path(__file__).resolve().parents[1]
assets = root / 'assets/img/projects'

# Saved notebook PNG bytes: reuse the instructor's historical output, without rerunning training.
manifest = json.loads((root/'docs/projects/ku-course-image-assets-2025.json').read_text(encoding='utf-8'))
for item in manifest:
    if 'cell_index' not in item: continue
    notebook = json.loads((a.source/item['source']).read_text(encoding='utf-8'))
    output = notebook['cells'][item['cell_index']]['outputs'][item['output_index']]['data']['image/png']
    (root/item['file']).write_bytes(base64.b64decode(''.join(output)))

# Deterministic, newly drawn scene; no third-party photo or learner data.
import cv2
import numpy as np
scene = np.full((420, 640, 3), 245, np.uint8)
cv2.rectangle(scene, (65, 105), (230, 310), (40, 120, 235), -1)
cv2.circle(scene, (425, 220), 100, (220, 100, 30), -1)
cv2.rectangle(scene, (270, 55), (345, 120), (70, 170, 70), -1)
gray = cv2.cvtColor(scene, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 50, 150)
mask = cv2.inRange(cv2.cvtColor(scene, cv2.COLOR_BGR2HSV), (5, 120, 100), (25, 255, 255))
marked = scene.copy()
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for c in contours:
    x, y, w, h = cv2.boundingRect(c)
    cv2.rectangle(marked, (x, y), (x+w, y+h), (20, 20, 20), 3)
def panels(name, images, labels):
    canvas = np.full((480, 640 * len(images), 3), 255, np.uint8)
    for i, (im, label) in enumerate(zip(images, labels)):
        if im.ndim == 2: im = cv2.cvtColor(im, cv2.COLOR_GRAY2BGR)
        canvas[60:, i*640:(i+1)*640] = im
        cv2.putText(canvas, label, (i*640+22, 40), cv2.FONT_HERSHEY_SIMPLEX, .8, (30,30,30), 2)
    cv2.imwrite(str(assets/'ku-opencv-2025'/name), canvas)
panels('canny-demo.png', [scene, gray, edges], ['Synthetic input', 'Grayscale', 'Canny: 50 / 150'])
panels('hsv-demo.png', [scene, mask, marked], ['Synthetic input', 'HSV mask: H 5-25', 'Bounding rectangle'])
src = np.float32([[65,105],[230,105],[230,310],[65,310]])
dst = np.float32([[40,40],[590,40],[590,375],[40,375]])
warped = cv2.warpPerspective(scene, cv2.getPerspectiveTransform(src,dst),(640,420))
panels('perspective-demo.png',[scene,warped],['Four corners of orange rectangle','Perspective transform'])

# Run the instructor's original Game/Ball/UI classes in a headless display.
os.environ['SDL_VIDEODRIVER'] = 'dummy'
os.environ['SDL_AUDIODRIVER'] = 'dummy'
sys.path.insert(0, str(a.source/'python/gravity_pygame/src'))
import pygame
from gravity.game import Game
random.seed(2025)
game = Game()
for frame in range(1, 121):
    game.update()
    game.draw()
    if frame in (20, 120):
        pygame.image.save(game.screen, str(assets/'ku-python-2025'/f'gravity-frame-{frame}.png'))
pygame.quit()
print('Created 3 OpenCV comparisons and 2 original-code Pygame captures.')
