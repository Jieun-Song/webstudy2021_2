
//1. Use strict
//자바 스크립트 언어를 만들때 빠르게 만들어짐
//매우 유연하기 때문에... 위험함
// 비상식적인것들을 사용하지 못하게 하는 명령어.
'use strict';

// 2. Variable
// 변경될수있는 값
// let 변수이름 -> 변수 선언
let globalName = 'global name'; //전역변수
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);//정상출력
    console.log(globalName);//정상 출력
}
console.log(name);//아무것도 출력되지 않음
console.log(globalName);//정상출력

//var(don't ever use this!)
//var hoisting(move declaration frome bottom to top)
//has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//3.constants
//한번 할당하면 앞으로 바꿀수 없는 것(immutable)
//  -security
//  -thread safety
//  -reduce human mistakes
// 자바의 final과 비슷함
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//first-class function(변수에 함수를 할당 가능)
//선언x 숫자는 number만 사용하면 됨.
let a = 12;//정수
let b = 1.2;//소숫점의 숫자

const infinity = 1/0;//0으로 나누면 무한
const negativeInfinity = -1/0; 
const nAn = 'not a number'/2;

//bigInt
const bigInt = 123456789012345678901234567890n; //새롭게 추가된것

//string 모두 스트링타입으로 정의됨
const char = 'c';
const brendan = 'brandan';
const greeting = 'hello' + brendan;
//mutable

//boolean
//false = 0,null,nudefined, NaN, ''

//null 
let nothing = null;
//텅텅비어있다

//undefined
let x;
//비어있는지 아닌지 아직 정해지지 않았다.

//symbol, xreate unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);//false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); //true

