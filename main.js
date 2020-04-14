const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

// 클래스를 찾아서 토글 버튼에 연결, 할당

// addEventListener APi 를 이용함. 클릭하면 하라 .

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
