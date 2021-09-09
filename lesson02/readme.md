# Lesson02

## 「型注釈」と「型推論」

明示的に型を定義しない場合でも、`ts`ファイルであれば、  
入っている値を参考に型を推測して定義してくれる ⇒ `型推論`

## 主要なTypeScriptの型

### `boolean`, `number`, `string`

```ts
let hasValue: boolean = true;

// numberは「整数、小数、負数」全て許容
let count: number = 10;
let float: number = 2.32;
let negative: number = -92.4;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
```

### オブジェクトの型

```ts
// 基本的な「型注釈」での書き方
const person: {
    name: string;
    age: number;
} = {
    name: 'daichi',
    age: 24
}
```

#### Object型

`Object型`は存在するが、殆ど使うことはない

「どのような`key`を持っているか」という情報を持っていないので  
`key`で呼び出ししようとするとエラーになる

```ts
// Object型
const person: object = {
    name: 'daichi',
    age: 24   
}

console.log(person.age)     // error...!
```

