# Lesson 01

```bash
# install
npm install typescript

# compile
tsc index.ts
```

## TypeScriptのメリット

* ドキュメントを充実
* Linter機能が充実
* ES5へのコンパイラ

## TypeScirptのドキュメントとしての側面

引数`a, b`と返り値が数値であることがわかる
```js
function add(a: number, b:number):number {
    return a + b;
}
```

## Linterとしての側面

* 引数の値が、指定の型と違う
* 定義されていない変数名を使用している

等が、コンパイルの時点でエラーとして表示してくれる  
ただし、エラーが出ていてもjsファイルは生成される

## ES5へのコンパイラとしての側面

`Class`構文や`const, let`等、ES5, ES3で対応していない  
記述方法をES5, ES3等の記述方法へ変換できる

デフォルトでは`ES3`に変換される  

```bash
# ES5に変換したい場合
tsc index.ts --target ES5
```