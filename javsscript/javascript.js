//slide 3
let currentIndex3 = 0;
const slides3 = document.querySelectorAll(".slide3");

function showSlide3() {
  slides3.forEach((slide3, index3) => {
    if (
      index3 === currentIndex3 ||
      index3 === (currentIndex3 + 1) % slides3.length ||
      index3 === (currentIndex3 + 2) % slides3.length
    ) {
      slide3.style.display = "inline-block";
    } else {
      slide3.style.display = "none";
    }
  });
}

function prevSlide3() {
  currentIndex3 =
    currentIndex3 === 0
      ? slides3.length - 1
      : (currentIndex3 - 1 + slides3.length) % slides3.length;
  showSlide3();
}

function nextSlide3() {
  currentIndex3 = (currentIndex3 + 1) % slides3.length;
  showSlide3();
}

showSlide3();

// slide 2
let currentIndex2 = 0;
const slides2 = document.querySelectorAll(".slide2");

function showSlide2() {
  slides2.forEach((slide2, index2) => {
    if (
      index2 === currentIndex2 ||
      index2 === (currentIndex2 + 1) % slides2.length ||
      index2 === (currentIndex2 + 2) % slides2.length
    ) {
      slide2.style.display = "inline-block";
    } else {
      slide2.style.display = "none";
    }
  });
}

function prevSlide2() {
  currentIndex2 =
    currentIndex2 === 0
      ? slides2.length - 1
      : (currentIndex2 - 1 + slides2.length) % slides2.length;
  showSlide2();
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % slides2.length;
  showSlide2();
}

showSlide2();
// slide 1
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, index) => {
    if (
      index === currentIndex ||
      index === (currentIndex + 1) % slides.length
    ) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function prevSlide() {
  currentIndex =
    currentIndex === 0
      ? slides.length - 1
      : (currentIndex - 1 + slides.length) % slides.length;
  showSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide();
}

showSlide();
//
function initializeProgressBar(progress, prevBtn, nexBtn) {
  let currentPosition = 0; // Vị trí ban đầu
  const progressBar = document.querySelector(progress);

  function updateProgressBar(delta) {
    currentPosition += delta;
    currentPosition = Math.max(0, Math.min(60, currentPosition)); // Giới hạn vị trí trong khoảng từ 0 đến 60
    progressBar.style.left = currentPosition + "%";
  }

  document.querySelector(prevBtn).addEventListener("click", function () {
    updateProgressBar(-30); // Di chuyển về phía trái 30%
  });

  document.querySelector(nexBtn).addEventListener("click", function () {
    updateProgressBar(30); // Di chuyển về phía phải 30%
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeProgressBar("#loadA", "#prever", "#next");
  initializeProgressBar("#loadA2", "#prever2", "#next2");
  initializeProgressBar("#loadA3", "#prever3", "#next3");
});
// reponserve tablet
const buyBtns = document.querySelectorAll(".js-by-bar");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
function showBuyTicket() {
  modal.classList.add("flex");
  modal.classList.remove("hidden");
}
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTicket);
}

const modalClose = document.querySelector(".js-modal-close");

function hideBuyTicket() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}
modalClose.addEventListener("click", hideBuyTicket);
modal.addEventListener("click", hideBuyTicket);
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//header modal
// Lấy chiều cao của header2
var header2Height = document.getElementById("header2").offsetHeight;

// Thêm sự kiện cho window khi cuộn trang
window.addEventListener("scroll", function () {
  // Lấy vị trí cuộn hiện tại của trang
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Nếu vị trí cuộn lớn hơn hoặc bằng chiều cao của header2
  if (scrollPosition >= header2Height) {
    // Hiển thị header1
    document.getElementById("header1").classList.remove("hidden");
  } else {
    // Ẩn header1
    document.getElementById("header1").classList.add("hidden");
  }
});

//  hiển thị nút scrotroll mobile
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  var header2 = document.getElementById('header2');
  var smoothScroll = document.getElementById('smooth-scroll');

  // Kiểm tra khi cuộn hết header2
  if (window.scrollY >= header2.offsetHeight) {
    smoothScroll.style.display = 'block'; // Hiển thị nút smooth scroll
  } else {
    smoothScroll.style.display = 'none'; // Ẩn nút smooth scroll
  }
});
