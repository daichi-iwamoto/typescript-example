let hasValue: boolean = true;

let count: number = 10;
let float: number = 2.32;
let negative: number = -92.4;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// objectの型
const person: {
    name: string;
    age: number;
} = {
    name: 'daichi',
    age: 24
}

// 配列の型指定
const fruits: string[] = ['Apple', 'Banana'];

// タプル型
const book: [string, number, boolean] = ['bussiness', 1500, false];

// Enum（列挙型）
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

/*
coffee.size = 'TALL'            error...
coffee.size = CoffeeSize.TALL   success!
*/

// any型（なんでも入る）
let anything: any = 'hello';
anything = 22;
anything = 'test';

/*
一度型指定を行っても、any型の変数を入れることができる
any型と関わったものは全てTypeScriptの型監視から外れるイメージ
*/
let test: number = 22;
test = anything;
console.log(test);

// Union型
let unionType: number | string = 'test';
unionType = 10;

let unionTypes: (number | string)[] = ['test', 21];

// Literal型
/*
const apple: 'apple' = 'hello';     error...
*/
let clothSize: 'small' | 'medium' | 'large' = 'small';

// type エイリアス
type BodySize = 'small' | 'medium' | 'large'

let bodySize: BodySize = 'small';