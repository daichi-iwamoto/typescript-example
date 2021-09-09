import axios from 'axios';

let hello: string = 'hello';
console.log(hello);

function add(a: number, b:number):number {
    return a + b;
}

/*
存在しない変数なので、コンパイル時にエラーが出る
console.log(test);
*/

class Car {}