$(document).ready(function () {
  const $smallButton = $("#smallButton");
  const $bigDiv = $("#bigDiv");
  const jump = 10;

  function moveButton(x, y) {
    const currentLeft = $smallButton.position().left;
    const currentTop = $smallButton.position().top;

    const newLeft = Math.min(
      Math.max(currentLeft + x, 0),
      $bigDiv.width() - $smallButton.width()
    );
    const newTop = Math.min(
      Math.max(currentTop + y, 0),
      $bigDiv.height() - $smallButton.height()
    );

    if (!checkCollision(newLeft, newTop)) {
      $smallButton.stop().animate({ left: newLeft, top: newTop }, 200);
    }
  }

  function checkCollision(left, top) {
    let collided = false;
    $(".obstacle").each(function () {
      const obstacle = $(this);
      const obstacleLeft = obstacle.position().left;
      const obstacleTop = obstacle.position().top;
      const obstacleWidth = obstacle.width();
      const obstacleHeight = obstacle.height();

      if (
        left < obstacleLeft + obstacleWidth &&
        left + $smallButton.width() > obstacleLeft &&
        top < obstacleTop + obstacleHeight &&
        top + $smallButton.height() > obstacleTop
      ) {
        collided = true;
      }
    });
    return collided;
  }

  function checkWin(left, top) {
    if (left >= 448 && top >= 448) {
      $("#message").show();
    }
  }

  function moveAuto() {
    const currentLeft = $smallButton.position().left;
    const currentTop = $smallButton.position().top;
    const targetLeft = $bigDiv.width() - $smallButton.width();
    const targetTop = $bigDiv.height() - $smallButton.height();

    let x = 0,
      y = 0;

    if (currentLeft < targetLeft) {
      x = Math.min(jump, targetLeft - currentLeft);
    } else if (currentLeft >= targetLeft) {
      x = 0;
    }

    if (currentTop < targetTop) {
      y = Math.min(jump, targetTop - currentTop);
    } else if (currentTop >= targetTop) {
      y = 0;
    }

    if (x !== 0) {
      if (!checkCollision(currentLeft + x, currentTop)) {
        moveButton(x, 0);
      } else {
        x = 0;
      }
    }

    if (y !== 0) {
      if (!checkCollision(currentLeft, currentTop + y)) {
        moveButton(0, y);
      } else {
        y = 0;
      }
    }

    checkWin(currentLeft, currentTop);
  }

  $("#auto").click(function () {
    setInterval(moveAuto, 200);
  });
});
