// Mobile menu

const menuTrigger = document.querySelector(".menu-trigger"); //.menu-triggerというクラスを読み込む
const menu = document.querySelector(".menu");  //.menuというクラスを読み込む
const mobileQuery = getComputedStyle(document.body).getPropertyValue(
  "--phoneWidth"
); //phoneWidthの値を読み込む
const isMobile = () => window.matchMedia(mobileQuery).matches; //モバイルのウィンドウサイズとマッチした時
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile()); //ハンバーガーボタンの表示非表示きりかえ
  menu && menu.classList.toggle("hidden", isMobile()); //PC画面で表示される横並びのヘッダーの表示非表示切り替え
};

isMobileMenu();


//クリックで表示非表示切り替え
menuTrigger &&
  menuTrigger.addEventListener(
    "click",
    () => menu && menu.classList.toggle("hidden")
  );

window.addEventListener("resize", isMobileMenu);
