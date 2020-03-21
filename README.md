# Simple Markdown Edit  
## 概要  
名前の通り、極々簡単な[Markdown](https://ja.wikipedia.org/wiki/Markdown)エディタです。  
左側のエディターに構文を記入し、右側へ出力します。  
  
## エディション  
異なるソースベースを持つ4つのエディションがあります。  
* [Vanilla版](/mdedit/) (プレーンなhtml+JavaScript)  
* [Vue.js版](/mdedit/ve/) ([フレームワーク](https://jp.vuejs.org/))  
* [Blazor版](/mdedit/br/) ([フレームワーク](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor))  
* [Andular版](/mdedit/ng/) ([フレームワーク](https://angular.jp/))  
  
機能的にはどれも変わりませんのでわからなければVue.js版を使用してください。  
(ただしVanilla版のみ明確に機能が劣ります)  
上部リンクから各エディションのページへ移動ことができます。  
  
## 機能  
Vue.js/Blazor/Angular版では下記の機能に対応しています。  
  
### 読込/保存  
ブラウザの機能を利用してエディタで編集したmdファイルを保存することができます。  
基本的に消えることはないですが、ブラウザの状態によっては永続的なデータの保証ができないこともあります。  
重要なデータはバックアップを行うことをおすすめします。  
  
### アップロード/ダウンロード  
mdファイルをアップロードしてエディタで編集を行うことができます。  
また、編集中のファイルはmd形式及び変換したhtml形式でダウンロードすることができます。  
  
## ソースコード  
[GitHub](https://github.com/yosgspec/SimpleMarkdownEdit)にて管理しています。  
ライセンスはCC0としていますので自由に改変等してください。  
ただし、下記の使用ライブラリについてはそれぞれライセンスを参照してください。  
  
### ライブラリ  
[highlight.js](https://highlightjs.org/)  
[markdown-it](https://github.com/markdown-it/markdown-it)  
[markdig](https://github.com/lunet-io/markdig)  
  
## お問い合わせ  
YOS G-spec  
[Twitter@yosgspec](http://twitter.com/yosgspec)  
[ブログ](http://yosgspec.blog103.fc2.com/)  
