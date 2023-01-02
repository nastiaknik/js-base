const ball = document.querySelector('.ball');
const field = document.querySelector('.field');

field.addEventListener('click', moveBall);

// field.onclick = moveBall;

function moveBall(event) {
  // получим координаты клика мышью (относительно области просмотра)
  // это координаты нового места для мяча
  let x = event.clientX,
    y = event.clientY;

  // получим координаты поля (относительно области просмотра)
  let coordField = field.getBoundingClientRect();

  // преобразуем координаты нового места для мяча
  //   из координат относительно области просмотра
  //   в координаты относительно клиентской части поля
  x = x - coordField.x - field.clientLeft;
  y = y - coordField.y - field.clientTop;

  // координаты части клиентской части поля (относительно клиентской части поля),
  // на которой центру мяча разрешено появляться (чтобы он не вылез
  // на или за границу поля)
  let coordFieldX_left = ball.offsetWidth / 2,
    coordFieldY_left = ball.offsetHeight / 2,
    coordFieldX_right = field.clientWidth - ball.offsetWidth / 2,
    coordFieldY_right = field.clientHeight - ball.offsetHeight / 2;

  // скорректируем координаты нового места для мяча, если при этих координатах
  // мяч вылазит на или за границу поля
  if (x < coordFieldX_left) x = coordFieldX_left;
  if (y < coordFieldY_left) y = coordFieldY_left;
  if (x > coordFieldX_right) x = coordFieldX_right;
  if (y > coordFieldY_right) y = coordFieldY_right;

  /*  // скорректируем координаты так, чтобы в место клика мышью попал центр мяча,
  // а не левый верхний угол HTML-элемента, представляющего мяч
  x -= ball.offsetWidth / 2;
  y -= ball.offsetHeight / 2; */

  // передвинем мяч на новое место
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}
