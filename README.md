# Simple Markdown Edit
## 概要
名前の通りな極々簡単なマークダウンエディタです。
左側のエディターに構文を記入し、右側へ出力します。

## エディション
作成環境の異なるのエディションがあります。
* Vanilla(プレーンなhtml+JavaScript)
* [Vue.js](https://jp.vuejs.org/)
* [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
* [Andular](https://angular.jp/)

機能的にはどれも変わりませんのでわからなければVue.js版を使用してください。
(Vanilla版を除く/Vanilla版のみ明確に機能が劣ります)
上部リンクのリンクから各エディションのページへ移動ことができます。

## 機能
Vue.js/Blazor/Angular版では下記の機能に対応しています。

### 読込/保存
ブラウザの機能を利用してブラウザに編集したmdファイルを保存することができます。
基本的に消えることはないですが、ブラウザの状態によっては永続的なデータの保証ができないこともあります。
重要なデータはバックアップを行うことをおすすめします。

### アップロード/ダウンロード
mdファイルをアップロードしてエディタで編集を行うことができます。
また、編集中のファイルはmd形式及び変換したhtml形式でダウンロードすることができます。

## ソース
[GitHub](https://github.com/yosgspec/SimpleMarkdownEdit)にて管理しています。
ライセンスはCC0としていますので自由に改変等してください。

## お問い合わせ
YOS G-spec
[Twitter@yosgspec](http://twitter.com/yosgspec)
[ブログ](http://yosgspec.blog103.fc2.com/)