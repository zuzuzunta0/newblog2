---
title: "【AppSheetの使い方】シフト確認アプリを作ってみた"
date: 2021-12-19T09:56:45+09:00
draft: false
toc: false
image: ["/img/002eyecatch1.png"]
img: "/img/002eyecatch1.png"
comments: true
tags: ["AppSheet", "SpreadSheet"]
---

<!----------------------- ↓記事設計↓ ----------------------->
<!-- # 記事設計
- 伝えたいこと
- キーワード
  - AppSheet 使い方
- 読者像
  - 非エンジニア
  - 物を作ることにあまり抵抗がない
  - アルバイトを動かす立場の人間
  - AppSheetの存在を知っていて具体的に作り方を参考にしたい
- 読者の悩み
  - 仕事でデータを「気軽に」効率的に扱いたい
  - なにか良い方法はないかなぁ
  - AppSheet良さそう検討中
  - 実際に動いているアプリをみながら勉強したい(遅延評価勉強法を求めている)
- 悩みが解決する条件
  - AppSheetで作れそうと思うこと
  - AppSheetでアプリ作るのそんなに難しくなさそう
- 記事にいらない情報
  - AppSheetの良いところ
  - スプレッドシートの使い方 -->

<!----------------------- ↑記事設計↑ ----------------------->
{{< figure src="/img/002eyecatch2.png">}}
[Icons8](https://icons8.jp/)  
<!-- 導入文⇨読者の悩み共感 -->  
*スプレッドシートをアプリにできるツール*が無いかどうか探していたところ、  
この**AppSheet**に出会いました。

個人で使うことに関しては、めちゃくちゃ*便利で無料*だったので、  
今回は**実際のアプリの作り方**を解説していきたいと思います。

## 今回作るアプリの内容
### このアプリで解決したい課題
私の職場では、シフト表が下の画像のようになっています。
{{< figure src="/img/002old_shift_table.jpg" width="300" >}}  
とってもみにくいい！！！  
これでは「*今日誰が出勤するか*」を探すだけで時間がかかってしまいます。  
  
なぜならこの形の表は、そもそも*シフトを作るときに使うと便利な形*であって、  
*シフト表を見ること*に関して、便利な形ではありません。
### 作ったアプリの動く様子
「昨日」「今日」「明日」出勤するメンバーを確認することができる。
{{< figure src="/img/002appsheet-working.gif" >}}
↓こちらでシフト確認アプリの動作確認ができます。  
{{< link title="シフト確認アプリ" url="https://www.appsheet.com/newshortcut/9739a17a-a4c5-4906-af20-cd8e5353a445">}}  
（スマホの方はAppSheetのアプリをダウンロードしてからURLをタップしてください。）  
<!-- スプレッドシートの画像 -->
<!-- AppSheet側の画像 -->
### アプリの設計
{{< figure src="/img/002Flowchart_AppDesign.svg" >}}
今回作ったアプリのデータ抽出などの処理は、すべてスプレッドシート内で完結させています。

## アプリをつくるのに必要なもの
### スプレッドシートのデータ
{{< link title="シフト管理forリーダー2022" url="https://docs.google.com/spreadsheets/d/1YEOSUjQRfWycKkWA1PYXLyvWFj9rUCBAZQq3S3A-ZiE/edit?usp=sharing">}}  
こちらのシートを元にAppSheetでアプリを作っていきます。
### Googleアカウント
AppSheetではGoogleアカウントでのログインが可能です。
### ブラウザ
私は「Google Chrome」というWebブラウザだけで今回のアプリを作っています。
## アプリ作りの手順

### AppSheetにログイン
{{< figure src="/img/002AppSheet1.png">}}
{{< figure src="/img/002AppSheet1.5.png">}}
{{< figure src="/img/002AppSheet2.png">}}
{{< figure src="/img/002AppSheet3.png">}}
### アプリを新しく作成
{{< figure src="/img/002AppSheet4.png">}}
{{< figure src="/img/002AppSheet5.png">}}
{{< figure src="/img/002AppSheet6.png">}}  
↑お好きなアプリ名を入力してください
{{< figure src="/img/002AppSheet7.png">}}
selectを押すと↓のような待機画面になり...
{{< figure src="/img/002AppSheet9.png">}}
アプリがの自動生成が完了しました。↓  
Start Customizingをクリックすると、アプリ作りを始めることができます。
{{< figure src="/img/002AppSheet13.png">}}
### 実際のアプリ作りの流れ
{{< list "読み込むシート名を指定する" "アプリの画面上にタブをつくる" "読み込んだシートの表示設定" "セーブ" >}}
{{< youtube "4natTVc1RD4" >}}

## 自分のスマホで動くか確認
### 「AppSheet」を自分のスマホにインストール  
{{< figure src="/img/002appsheet.png" width="100px">}}
iPhoneの方は、コチラ↓から。  
<a href="https://apps.apple.com/us/app/appsheet/id732548900?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 180px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1383264000&h=1f2e22540d169a038bdea2c889998a39" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>  
Androidの方は、コチラ↓から。
<a href='https://play.google.com/store/apps/details?id=x1Trackmaster.x1Trackmaster&hl=ja&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img width= "200" alt='Google Play で手に入れよう' src='https://play.google.com/intl/en_us/badges/static/images/badges/ja_badge_web_generic.png'/></a>


