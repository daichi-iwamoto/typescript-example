# Lesson03

## TypeScriptの基本的なコンパイル

```bash
# watchモード
tsc index.ts --watchs 

# 複数ファイル
tsc index.ts example.ts

# tsconfig.json 作成
tsc --init
```

### tsconfig
```bash
# tsconfig.json 作成
tsc --init

# 全てのtsファイルをコンパイル
tsc

# watchモード
tsc -w
```

#### 特定のファイルのコンパイルを除く

`exclude`を使用することで、特定のファイルをコンパイルしないように設定できる  
ただし、`exclude`を使用する場合は、除外設定が上書きされる為  
明示的に`node_modules`を指定する必要がある
```json
{
  "compilerOptions": {
    //   略
  },
  "exclude": [
    "test.ts",
    "*dex.ts",
    "**/test.ts",
    "node_modules"
  ]
}
```

#### 特定のファイルのみコンパイルする

デフォルトでは全てのtsファイルがコンパイルされる
```json
{
  "compilerOptions": {
    //   略
  },
  "include": [
    "test.ts"
  ],
  "files": [
    "temp/test.ts"
  ]
}
```
`include`はワイルドカードを使用して指定できるが、  
`exclude`で指定されているものはコンパイルできない

`files`は絶対パスでファイルを指定しなければならないが、  
`exclude`で指定されているファイルもコンパイルしてくれる
