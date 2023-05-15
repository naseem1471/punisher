const gun = document.getElementById('gun');
const coordinatesElement = document.getElementById('coordinates');
let isMouseDown = false;

gun.addEventListener('mousedown', startDrag);
gun.addEventListener('touchstart', startDrag);

window.addEventListener('mousemove', drag);
window.addEventListener('touchmove', drag);

window.addEventListener('mouseup', stopDrag);
window.addEventListener('touchend', stopDrag);

function startDrag(event) {
  isMouseDown = true;
  event.preventDefault();

  if (event.type === 'touchstart') {
    const touch = event.touches[0];
    updateCoordinates(touch.clientX, touch.clientY);
    gun.style.left = touch.clientX + 'px';
    gun.style.top = touch.clientY + 'px';
  } else {
    updateCoordinates(event.clientX, event.clientY);
    gun.style.left = event.clientX + 'px';
    gun.style.top = event.clientY + 'px';
  }
}

function drag(event) {
  if (isMouseDown) {
    event.preventDefault();

    if (event.type === 'touchmove') {
      const touch = event.touches[0];
      updateCoordinates(touch.clientX, touch.clientY);
      gun.style.left = touch.clientX + 'px';
      gun.style.top = touch.clientY + 'px';
    } else {
      updateCoordinates(event.clientX, event.clientY);
      gun.style.left = event.clientX + 'px';
      gun.style.top = event.clientY + 'px';
    }
  }
}

function stopDrag() {
  isMouseDown = false;
}

function updateCoordinates(x, y) {
  coordinatesElement.textContent = `Gun coordinates: (${x}, ${y})`;
}

