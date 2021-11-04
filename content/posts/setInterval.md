---
title: "【Chrome拡張機能】JavaScriptで時計を作っていたら、'unsafe-eval'で怒られた"
date: 2021-10-23T18:03:49+09:00
draft: false
images:
tags: ["Chrome", "JavaScript"]
---

<!-- 記事設計項目 -->

<!-- 伝えたいこと：Chrome拡張機能をつくるときにだけ、動かなくなるJavaScriptの文があるよ！！ -->

<!-- ①掛け合わせ3つの狙うキーワード -->
   <!-- Chrome拡張機能 JavaScript unsafe-eval -->
  
   <!-- ②ターゲット -->
   <!--  Chrome拡張機能をJavaScriptで作ろうとしてる人  -->
    
   <!-- ③読者の悩み -->
   <!--   JavaScriptのエラーの意味がわからない   -->
   <!-- ④悩みが解決する条件 -->
   <!--   エラーの意味がわかり、正しい構文の書き方がわかる。   -->
   <!-- ⑤悩みの解決策 -->
   <!--   エラーの意味の解説・正しい構文の書き方   -->
   <!-- ⑥記事を読むメリット -->
   <!--      -->
   <!-- ⑦記事の信頼性 -->
   <!--      -->


<!--------------->



<!-- リード文 -->


  <!-- 読者の悩みに共感する -->
  <!-- 記事で示すことを書く -->
  <!-- 悩みが解決する条件を提示する -->
  <!-- 記事を読むメリットを示す -->
  <!-- 記事の信頼性を示す -->
  
  
<!----------->

  <!--リード文（権威・読者の不安を解消、安心させる・）-->
  <!--この記事を読む人の悩みの状況に共感する：　　Chrome拡張機能を作っているときに、Content Security Policyのエラーに引っかかって解決できない-->
    
  <!--この記事を読むことで何を得られるか、どんな価値が生まれるか：Content Security Policyのunsafe-evalの意味が何となくわかる-->

<!--この記事の根拠または信頼性：エンジニアではない私でも理解できた-->


{{< toc >}}


<!-- エラー解説 -->
## エラー文
<!-- エラーが出る直前までやろうとしていたこと -->
Chromeで新規タブを開いたときに、
JavaScriptでデジタル時計を作ろうしていたらconsoleにこんなエラーが表示されていました。
<!-- エラー本文 -->
> Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

<!-- エラー文要約 -->
[こちら](https://kuroeveryday.blogspot.com/2015/06/ChromeExtensionsEvalError.html)にも書かれている通り、
簡単に訳すと
> 文字列からコードを生成するevalメソッドはGoogleのセキュリティ上、ダメですよ！

<!--結論-->
## 解決策
setIntervalメソッドの第一引数を文字列ではなく、関数として読み込んだ。  
私がコードの中で文字列から生成していたコードが以下であります。
### 改善前
```JavaScript
setInterval('showClock()', 1000);
```

<!--理由-->

<!--具体例-->

### 改善後
```JavaScript
setInterval(function(){showClock()}, 1000);
```


### 改善前後全文

{{<link url="https://github.com/zuzuzunta0/New-Tab-Clock/commit/" title="GitHubのソースコード">}}

![setInterval code img](https://user-images.githubusercontent.com/64098050/138999282-cc327f11-411f-47ea-9ce9-db2ff03e5f76.PNG)





<!-- 

[MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/API/setInterval)
によると、setIntervalメソッドの第一引数

## なぜこのエラーにたどり着いたか
### 作りたかったもの
[Chrome Extensions: New Tab Override - Programming with Text](https://youtu.be/vNb3P5KIxXw)
このリンクにある動画にある通り、
Chromeで新規タブを開いたときに、JavaScriptで動く時計をHTML上に表示させたかった。

そこでネットからテキトーに[引っ張ってきたコード](https://qumeru.com/magazine/362)をそのまま貼り付けた。


setIntervalの第一引数には”定義した関数の文字列”を入れても関数を動かすことができるし、
”関数として直接functionを作ったもの”でも呼び込むことができる。


しかし、Chrome拡張機能の中で作る場合には、
第一引数に”定義した関数の文字列”を入れるとunsafe-evalというエラーがでてしまう。 -->

