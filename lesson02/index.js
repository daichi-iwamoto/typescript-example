var hasValue = true;
var count = 10;
var float = 2.32;
var negative = -92.4;
var single = 'hello';
var double = "hello";
var back = "hello";
// objectの型
var person = {
    name: 'daichi',
    age: 24
};
// 配列の型指定
var fruits = ['Apple', 'Banana'];
// タプル型
var book = ['bussiness', 1500, false];
// Enum（列挙型）
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
/*
coffee.size = 'TALL'            error...
coffee.size = CoffeeSize.TALL   success!
*/
// any型（なんでも入る）
var anything = 'hello';
anything = 22;
anything = 'test';
/*
一度型指定を行っても、any型の変数を入れることができる
any型と関わったものは全てTypeScriptの型監視から外れるイメージ
*/
var test = 22;
test = anything;
console.log(test);
// Union型
var unionType = 'test';
unionType = 10;
var unionTypes = ['test', 21];
// Literal型
/*
const apple: 'apple' = 'hello';     error...
*/
var clothSize = 'small';
var bodySize = 'small';
