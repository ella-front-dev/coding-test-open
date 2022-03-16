
// CodeUp 기초 100제 ( 1010 - 1020 )

/* 
    정수형(int)으로 변수를 선언하고, 변수에 정수값을 저장한 후
    변수에 저장되어 있는 값을 그대로 출력해보자.
*/

function intOut ( n ){
    let int = n; 
    return parseInt(int);
}
console.log(intOut(1));

/*
    문자형(char)으로 변수를 하나 선언하고, 변수에 문자를 저장한 후
    변수에 저장되어 있는 문자를 그대로 출력해보자.
*/

function charOut ( n ){
    let char = n; 
    return String(char);
}
console.log(charOut("g"));

/*
    실수형(float)로 변수를 선언하고 그 변수에 실수값을 저장한 후
    저장되어 있는 실수값을 출력해보자.
*/

function fltOut ( n ){
    let float = n; 
    return parseFloat(float).toFixed(6);
}
console.log(fltOut(123.123));

/* 2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자. */

function charOrder ( x, y ){
    let a = String(x);
    let b = String(y);
    return (b+" "+a);
}
console.log(charOrder("A", "b"));

/* 
    실수(float) 1개를 입력받아 저장한 후, 저장되어 있는 값을 소수점 셋 째 자리에서 반올림하여 소수점 이하 둘 째 자리까지 출력하시오.
*/

function fltOut2 (n){
    let a = (Math.round(n * 100)/100).toFixed(2)
    return (a);
}
console.log(fltOut2(123.126));

/* 
    int형 정수 1개를 입력받아 공백을 사이에 두고 3번 출력해보자.
*/

function intOut2 (n){
    let a = n
    return (a+" "+a+" "+a);
}
console.log(intOut2(123));

/* 
    어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.
*/

function timeOut (x){
    let time = x.split(":")
    return (time[0]+":"+time[1]);
}
console.log(timeOut("3:11"));


/* 
    어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.
*/

function dateOut (x){
    let date = x.split(".");
    let year = date[0];
    let month = date[1].length === 1 ? "0"+date[1] : date[1];
    let day = date[2].length === 1 ? "0"+date[2] : date[2];
    return (year+"."+month+"."+day);
}
console.log(dateOut("2020.1.1"));

// 자릿수에 맞춰 0 넣어 주기
function zeroPad(nr,base){
    let  len = (String(base).length - String(nr).length)+1;
    
    return len > 0? new Array(len).join('0')+nr : nr;
}

