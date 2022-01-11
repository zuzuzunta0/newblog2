---
title: "AppSheetで非エンジニアがシフト確認アプリ作ってみた【AppSheet】"
date: 2021-12-19T09:56:45+09:00
draft: false
toc: false
image: ["/img/002eyecatch1.png"]
img: "/img/002eyecatch1.png"
comments: true
tags: ["AppSheet", "SpreadSheet"]
---

<!----------------------- ↓記事設計↓ ----------------------->


  <!-- 伝えたいこと -->

  <!-- ①掛け合わせ3つの狙うキーワード 
  google appsheet -->


  <!-- ②読者像・読者の理解レベル 
  アルバイトを動かす立場の人間,
  AppSheetの存在を知っていて、具体的に作り方を参考にしたい-->


  <!-- ③読者の悩み 
  ・シフト表を毎回たどって今日のメンバーを現すのが、いちいちめんどくさい
  ・シフト表をスマホで確認したい
  -->
  <!-- ④悩みが解決する条件
  シフト表を自
   -->

  <!-- ⑤悩みの解決策 -->

  <!-- ⑥記事を読むメリット -->

  <!-- ⑦記事の信頼性 -->

<!-- このアプリが提供する価値
・昨日のメンバー可視化⇨昨日の状況が把握できて、それぞれがどれぐらいの疲労度で望んでくるのかわかりやすい＆昨日のことについての雑談ネタにもなる＆チームの承認を高めることができる
・明日のメンバー可視化⇨ホワイトボードで明日のメンバーを作る時に役立つ＆明日の準備を頭に入れることができる
・スプレッドシートから作っている⇨データベースの操作が視覚的にわかりやすい。
 -->

<!---------
-------------- ↑記事設計↑ ----------------------->
{{< figure src="/img/002eyecatch1.png">}}
[Icons8](https://icons8.jp/)
{{< toc >}}
<!-- 導入文⇨読者の悩み共感 -->
## このアプリでやりたいこと
スプレッドシートのシフト表を、スマホから見やすくしたい。  
そこでおすすめしたいのが「AppSheet」  
スプレッドシートの中の情報を読み込んだスマホアプリが作れるので、  
情報確認もとても簡単になりましたので、ご紹介します。
## 実際のアプリ設計
### スプレッドシート内で作るもの
1. シフト表作る
1. その日ごとの出勤する人を抜き出して、ひとつのセルにまとめ、それを並べる
1. ひとつのセルにまとめた表を、関数を使って昨日・今日・明日のシートを別に作って抜き出す

### AppSheet内でつくるもの
1. 昨日・今日・明日の3つのタブをつくる
1. 3つのタブそれぞれに、読み込むスプレッドシートを指定する

<!-- 背景↓ -->
## なぜ私はAppSheetを選んだのか？
スプレッドシートのスマホアプリが実際にありますが、  
情報の確認がめんどくさい。

## そんなあなたに「シフタス」
*シフト*の*ステータス*が見られるアプリ 
なづけて「*シフタス*」 
動作風景  
できることは立ったの3つ。しかし、効果は無限大。
「昨日・本日・明日」の出勤メンバーがパッとわかります。  
### 昨日のタブ
自分が休みだった日の昨日はどんな状況だったのかの**雑談ネタ**になります。  
毎日同じ作業を繰り返す仕事にとって、  
その日の変化にいかに上手く対応できるかどうかは、  
こういう時の雑談で状況を知っておくことが意外と大事です。  

### 本日のタブ
当日の業務中の判断に使います。  
今何人いるのか、誰が出勤していないのかが手元ですぐわかることは、  
業務の中での**判断スピードを高めます。**  
さまざまな状況の変化にも柔軟にスピーディーに対応可能になります。

### 明日のタブ
仕事は準備が10割です。  
**明日の仕事の流れを予測して準備する**ことは、  
明日の出勤メンバーを把握することから始まります。  
能力のバランスをみて、根回ししておくのも、素晴らしいリーダーの秘訣です。
## インストール方法
### 「AppSheet」を自分のスマホにインストール  
{{< figure src="/img/002appsheet.png" width="100px">}}
iPhoneの方は、コチラ↓から。  
<a href="https://apps.apple.com/us/app/appsheet/id732548900?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 180px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1383264000&h=1f2e22540d169a038bdea2c889998a39" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>  
Androidの方は、コチラ↓から。
<a href='https://play.google.com/store/apps/details?id=x1Trackmaster.x1Trackmaster&hl=ja&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width= "200" alt='Google Play で手に入れよう' src='https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png'/></a>

### URLを開く
AppSheetがダウンロードできた状態で、  
以下のURLを開くと、私の作ったシフト確認アプリが確認できます。

https://www.appsheet.com/newshortcut/9739a17a-a4c5-4906-af20-cd8e5353a445
## 使い方
*シフタス*は
### スプレッドシート側の操作
月が変わるごとに、アルバイトの
###
## 使った技術
{{< list "Google Spreadsheet" "App Sheet">}}
