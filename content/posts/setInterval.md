---
title: "Chrome拡張機能を作成中に、Content Security Policyに違反しているとエラーが出た"
date: 2021-10-23T18:03:49+09:00
draft: false
toc: false
images:
tags:
  - untagged
---

<!-- 記事設計項目 -->


　　<!-- ①掛け合わせ3つの狙うキーワード -->
   <!-- Chrome拡張機能　JavaScript　error -->
  
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

## エラー文
> Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".

<!--結論-->
## 解決策
setIntervalメソッドの第一引数を文字列ではなく、関数として読み込んだ。

<!--理由-->

<!--具体例-->
NG例
```JavaScript
setInterval('showClock()', 1000);
```
OK例
```JavaScript
setInterval(function(){showClock()}, 1000);
```
![setInterval code](https://user-images.githubusercontent.com/64098050/138996681-34a97e6e-1727-48d7-8ca9-c0f0ca468e8c.png)


[MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/API/setInterval)
によると、setIntervalメソッドの第一引数

## なぜこのエラーにたどり着いたか
### 作りたかったもの
[Chrome Extensions: New Tab Override - Programming with Text](https://youtu.be/vNb3P5KIxXw)
このリンクにある動画にある通り、
Chromeで新規タブを開いたときに、JavaScriptで動く時計をHTML上に表示させたかった。

そこでネットからテキトーに[引っ張ってきたコード](https://qumeru.com/magazine/362)をそのまま貼り付けた。

## どのように解決したか




setIntervalの文がChrome拡張機能の
Content Security Policyに違反しているとのエラーが出た。

原因
ネットからテキトーに引っ張ってきた
setIntervalの構文の使用が原因

だめな構文
setInterval('showClock()', 1000); 

setIntervalの第一引数には”定義した関数の文字列”を入れても関数を動かすことができるし、
”関数として直接functionを作ったもの”でも呼び込むことができる。


しかし、Chrome拡張機能の中で作る場合には、
第一引数に”定義した関数の文字列”を入れるとunsafe-evalというエラーがでてしまう。
セキュリティ上の理由でこの形の構文は許可できないらしい。

正しい構文
setInterval(function(){showClock()}, 1000); 
Terms
Privacy
Security
Status
