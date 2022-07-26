# ブログ運用ルールメモ


## 目的
エラーによるブログにアクセスできない状態を無くす(ユーザーアクセスの機会損失)  
そのためにブランチを作ってプッシュしてエラーがないか事前に確認してから、masterブランチにマージする  

後から振り返ってわかりやすいようにこまめにpushする  
途中で機能づくり諦めるときにブランチごと削除できるように  

エラーに対してなにをやったか記録する 
## Gitフロー
### 新しく作業を開始する時（リモートリポジトリからローカルリポジトリにダウンロード）
`g pl origin master`
### ブログに新しく機能を追加する時
git ブランチを新しく作る  
`g add ファイル名`  
新しく作ったブランチにプッシュしていく  
pull request送る（netlify上で見れるようになる）  
netlifyで問題ないか確認する  
マージする  

### ブログの記事更新時・新機能作成途中の
## zshエイリアス
### vimで内容確認変更  
ホームディレクトリでターミナルに`vim ~/.zshrc`と入力する  

### エイリアス単語リスト
```
g = 'git'
```

## git エイリアス
### vimでgitエイリアス内容確認・変更
ホームディレクトリでターミナルに`vim ~/.gitconfig`と入力する

### 現状のエイリアスリスト  
```
co = checkout                 ## `g co ブランチ名` 指定したブランチに移動   
cob = checkout -b             ## `g cob ブランチ名` 新しいブランチを作成してそのブランチに移動
br = branch                   ## `g br` 現在あるブランチ一覧を表示
brd = branch -d               ## `g brd ブランチ名` 指定したブランチがマージ済であれば削除
brdd = branch -D              ## `g brdd ブランチ名` 指定したブランチを強制的に削除
d = diff                      ## `g d` 現在のワークツリーとインデックスの差分を表示
st = status                   ## `g st` 
com = commit  
pl = !git pull origin `git rev-parse --abbrev-ref HEAD`  
ps = !git push origin `git rev-parse --abbrev-ref HEAD`  
```

g st の項目  
| ログ名                           | 意味                                    |
| ----------------------------- | ------------------------------------- |
| Changes to be committed       | コミットする予定の変更したファイル（インデックスに反映されているファイル） |
| Changes not staged for commit | まだインデックスに追加されていない、変更したファイル            |
| Untracked files               | Git でまだ管理されていないファイル（新しく追加したファイル）      |  


## tcardgen（サムネ画像自動作成ツール）使い方
(https://michimani.net/post/development-generate-ogp-image-by-tcardgen-in-hugo/)  

以下ターミナルへ  
```
tcardgen 
--fontDir=static/fonts/Kinto_Sans  
--output=static/ogp 
--template=static/img/tcardgen_template.png 
content/posts/004HowToWatchPLL.md  
```
```
tcardgen 
--fontDir=自動生成する画像に使うフォントのディレクトリのパス 
--output=画像を自動生成した時の出力先ディレクトリ 
--template=自動生成する前の背景テンプレート画像のファイルパス 
タイトルやタグの情報を取得する記事のファイルパス
```

## 便利なショートカット
選択範囲のブロックコメント化:(MacOS) Shift + option + a  

## Pocket (ネット記事ページ保存サービス) 使い方
エラーに対してやった施作の記事はタグ[blog],[did]をつける  
