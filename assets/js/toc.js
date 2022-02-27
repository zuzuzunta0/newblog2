 // 今回の交差を監視する要素
const boxes = document.querySelectorAll("h2, h3");

const options = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: "-1px 0px -99% 0px", // ビューポートの上辺を判定基準にする
  threshold: 0 // 閾値は0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
// それぞれのboxを監視する
boxes.forEach(box => {
  observer.observe(box);
});

/**
* 交差したときに呼び出す関数
* @param entries
*/
function doWhenIntersect(entries) {
  console.log(entries);
  // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateIndex(entry.target);
    }
  });
}

/**
* 目次の色を変える関数
* @param element
*/
function activateIndex(element) {
  // すでにアクティブになっている目次を選択
  const currentActiveIndex = document.querySelector(".active");
  // すでにアクティブになっているものが0個の時（=null）以外は、activeクラスを除去
  if (currentActiveIndex !== null) {
    currentActiveIndex.classList.remove("active");
  }
  // 引数で渡されたDOMが飛び先のaタグを選択し、activeクラスを付与
  const newActiveIndex = document.querySelector(
    `a[href='#${element.id}']`
  );
  newActiveIndex.classList.add("active");
}

//タブレット以下の時だけ,目次をクリックすると目次が閉じる処理

//TableOfContentsのIDを呼び込む
const details = document.querySelectorAll(".top-toc");
const toc = document.getElementById("TableOfContents");
//addEventListenerでTableOfContentsをクリックした時
toc.addEventListener("click", function(){
  details.open = false ;
});
//toggleでTableOfContentsのopen属性切り替え