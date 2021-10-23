---
title: "Chrome拡張機能を作成中に、Content Security Policyに違反しているとエラーが出た"
date: 2021-10-23T18:03:49+09:00
draft: false
toc: false
images:
tags:
  - untagged
---
## エラー文
> Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self'".


## 解決策
setIntervalの文の書き方を変えたら治った。

NG例
setInterval('showClock()', 1000);

OK例
setInterval(function(){showClock()}, 1000);


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
