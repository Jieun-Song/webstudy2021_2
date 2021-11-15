
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
//