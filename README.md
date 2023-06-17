# coding-conventions

## インストール

### 必要ツール

テーマ編集及び動作確認には以下のツールが必要です

- [Node.js](https://nodejs.org/)
  - [Volta](https://volta.sh/)：バージョン管理ツールとして Volta を用いています

### セットアップ

開発に必要なツールは以下のコマンドを使用してインストールしてください

```sh
$ npm install
```

### 利用可能な CLI コマンド

開発要に以下のコマンドが使用できます:

- `npm run dev` : すべての sass・ts ファイルの変更を監視し、変更される度にコンパイルします
- `npm run lint` : すべての sass・css・ts・js ファイルをチェックします [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).
- `npm run lintfix` : すべての sass・css・ts・js ファイルをチェックし修正可能な箇所を修正後保存します [JavaScript Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/).
- `npm run build` : 開発用ファイルを除いた本番環境用ファイルを生成します

このテーマは[husky](https://www.npmjs.com/package/husky)を用いてコミット時に lint を実行します  
コミット前に必ず `npm run build` を実行してからコミットしてください  
コミットできない場合は `npm run lintfix` を実行してください  
それでもコミットできない場合は変更点にエラーが存在するので修正してから再度コミットしてください
