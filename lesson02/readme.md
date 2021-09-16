# Lesson02

## 「型注釈」と「型推論」

明示的に型を定義しない場合でも、`ts`ファイルであれば、  
入っている値を参考に型を推測して定義してくれる ⇒ `型推論`

以降は主に「型注釈」での書き方を説明

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

### 配列の型

```ts
const fruits: string[] = ['apple', 'banana'];
```

### Tuple型

タプル型は、配列内の要素ごとに型を指定することができる
* 初期値の段階で型の定義がされていないものを追加することはできない
* 型の定義された要素に、別の型を入れることはできない
* push等で配列に型の指定をされていない要素を追加することはできる

```ts
const book: [string, number, boolean] = ['bussiness', 1500, false];

// error
const book: [string, number, boolean] = ['bussiness', 1500, false, 1];

// not error
const book: [string, number, boolean] = ['bussiness', 1500, false];
book.push(1)
```

### 列挙型

特定の値のグループのみを受け付ける型

```ts
enum CoffeeSize {
    SHORT= 'SHORT',
    TALL= 'TALL',
    GRANDE= 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
}

coffee.size = 'TALL';            // error...
coffee.size = CoffeeSize.TALL;   // success!
```

### any型

なんでも入る型  
プロジェクトの初めから`TypeScript`で開発を行う場合は、  
極力使わないよう気を付ける

一度型指定を行っても、any型の変数を入れることができる  
`any`型と関わったものは全て`TypeScript`の型監視から外れるイメージ

```ts
let anything: any = 'hello';
anything = 22;
anything = 'test';

let test: number = 22;
test = anything;
console.log(test);
```

### Union型

複数の型を受け入れることができる型

```ts
// 数値か文字列が入る変数
let unionType: number | string = 'test';
unionType = 10;

// 数値か文字列が入る配列
let unionTypes: (number | string)[] = ['test', 21];
```

### Literal型

特定の値のみを受け付ける型

`const`を使用する場合、型推論で`Literal型`になる

```ts
const apple: 'apple' = 'hello';     // error...

let clothSize: 'small' | 'medium' | 'large' = 'small';
```

### Typeエイリアス

型を変数のように扱う

```ts
type ClothSize = 'small' | 'medium' | 'large'

let clothSize: ClothSize = 'small';
```

### 関数に型を付ける

パラメータ, 戻り値に型を付く  
型推論の場合、パラメータが`any`になってしまう

```ts
function add(num01: number, num02: number):number {
    return num01 + num02
}
```

戻り値のない（`return`がない）関数の場合  
返り値には`void`を指定する（`any`でもエラーは出ない）

```ts
function hello(): void {
    console.log('hello');
}
```

関数を保持する変数の型  

```ts
// const 変数名: (引数名: 型, 引数名: 型) => 返り値の型 = 関数
const addFunc: (num01: number, num02: number)  => number = add;
```
