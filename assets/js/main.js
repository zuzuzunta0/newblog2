/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
const chosenThemeIsDark = chosenTheme == "dark";
const chosenThemeIsLight = chosenTheme == "light";

// Detect the color scheme the operating system prefers.
function detectOSColorTheme() {
  if (chosenThemeIsDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (chosenThemeIsLight) {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Switch the theme.
function switchTheme(e) {
  if (chosenThemeIsDark) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  detectOSColorTheme();
  window.location.reload();
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());

  detectOSColorTheme();
} else {
  localStorage.removeItem("theme");
}


/*----------------------------------------

TableOfContents (current area of heading) single.html 
reference→https://ics.media/entry/190902/

----------------------------------------*/

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