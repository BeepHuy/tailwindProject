function initializeProgressBar() {
  let currentPosition = 0; // Vị trí ban đầu
  const progressBar = document.querySelector("#loadA");

  function updateProgressBar(delta) {
    currentPosition += delta;
    currentPosition = Math.max(0, Math.min(60, currentPosition)); // Giới hạn vị trí trong khoảng từ 0 đến 60
    progressBar.style.left = currentPosition + "%";
  }

  document.querySelector("#prever").addEventListener("click", function () {
    updateProgressBar(-30); // Di chuyển về phía trái 30%
  });

  document.querySelector("#next").addEventListener("click", function () {
    updateProgressBar(30); // Di chuyển về phía phải 30%
  });
}

document.addEventListener("DOMContentLoaded", initializeProgressBar);

function initialize() {
  let current = 0; // Vị trí ban đầu
  const progres = document.querySelector("#loadA2");

  function updateProgres(delta) {
    current += delta;
    current = Math.max(0, Math.min(60, current)); // Giới hạn vị trí trong khoảng từ 0 đến 60
    progres.style.left = current + "%";
  }

  document.querySelector("#prever2").addEventListener("click", function () {
    updateProgres(-30); // Di chuyển về phía trái 30%
  });

  document.querySelector("#next2").addEventListener("click", function () {
    updateProgres(30); // Di chuyển về phía phải 30%
  });
}

document.addEventListener("DOMContentLoaded", initialize);

function initiali() {
  let curre = 0; // Vị trí ban đầu
  const progre = document.querySelector("#load3");

  function updatePro(delta) {
    curre += delta;
    curre = Math.max(0, Math.min(60, curre)); // Giới hạn vị trí trong khoảng từ 0 đến 60
    progre.style.left = curre + "%";
  }

  document.querySelector("#prever3").addEventListener("click", function () {
    updatePro(-30); // Di chuyển về phía trái 30%
  });

  document.querySelector("#next3").addEventListener("click", function () {
    updatePro(30); // Di chuyển về phía phải 30%
  });
}

document.addEventListener("DOMContentLoaded", initiali);

// document.addEventListener("DOMContentLoaded", function () {
//   let currentPosition = 0; // Vị trí ban đầu

//   const leftButton = document.querySelector("#prever");
//   const rightButton = document.querySelector("#next");
//   const progressBar = document.querySelector("#loadA");

//   leftButton.addEventListener("click", function () {
//     currentPosition -= 30; // 30% vị trí ở giữa
//     currentPosition = Math.max(0, currentPosition);
//     updateProgressBar();
//   });

//   rightButton.addEventListener("click", function () {
//     currentPosition += 30; // 60% vị trí cuối
//     currentPosition = Math.min(60, currentPosition);
//     updateProgressBar();
//   });

//   function updateProgressBar() {
//     progressBar.style.left = currentPosition + "%";
//   }
// });
