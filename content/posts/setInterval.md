---
title: "SetInterval"
date: 2021-10-23T18:03:49+09:00
draft: false
toc: false
images:
tags:
  - untagged
---

# Chrome拡張機能を作成中に、Content Security Policyに違反しているとエラーが出た

## 背景

## エラー内容

##　どのように解決したか


新規タブを開いたときにJavaScriptで時計をHTML上に表示させるこーどを書いてみた結果、

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
