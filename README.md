# ブログ運用ルールメモ

## ブログに新しく機能を追加する時

## ブログの記事更新時

## tcardgen（サムネ画像自動作成ツール）使い方
以下ターミナルへ
tcardgen --fontDir=static/fonts/Kinto_Sans  --output=static/ogp --template=static/img/tcardgen_template.png content/posts/004HowToWatchPLL.md 
<!-- tcardgen --fontDir=自動生成する画像に使うフォントのディレクトリのパス 
              --output=画像を自動生成した時の出力先ディレクトリ 
              --template=自動生成する前の背景テンプレート画像のファイルパス 
              タイトルやタグの情報を取得する記事のファイルパス -->
