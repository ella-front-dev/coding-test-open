// CodeUp 기초 100제 ( 1001 - 1009 )

/*
    이번에는 줄을 바꿔 출력하는 출력문을 연습해보자.
    다음과 같이 줄을 바꿔 출력해야 한다.
    Hello
    World (두 줄에 걸쳐 줄을 바꿔 출력)
*/

console.log("Hello\nWorld")

/*
    이번에는 작은 따옴표(single quotation mark)가 들어있는
    특수한 형태의 출력문에 대한 연습을 해보자.다음 문장을 출력하시오.
    'Hello'
*/

console.log("'Hello'")

/*
    이번에는 큰따옴표(double quotation mark)가 포함된 출력문을 연습해보자. 다음 문장을 출력하시오.
    "Hello World" (단, 큰따옴표도 함께 출력한다.)
*/

console.log("\"Hello World\"")

/* 
    이번에는 특수문자 출력에 도전하자! 다음 문장을 출력하시오.
    "!@#$%^&*()"
    (단, 큰따옴표도 함께 출력한다.) 
*/

console.log("\"!@#$%^&*()\"")

/* 
    윈도우 운영체제의 파일 경로를 출력하는 연습을 해보자. 파일 경로에는 특수문자들이 포함된다. 다음 경로를 출력하시오.
    "C:\Download\hello.cpp"  (단, 큰따옴표도 함께 출력한다.)
*/

console.log("\"C:\\Download\\hello.cpp\"")


/* 
    이번에는 특수문자를 출력하는 연습을 해보자.
    키보드로 입력할 수 없는 다음 모양을 출력해보자.
    (** 참고 : 운영체제의 문자 시스템에 따라 아래와 같은 모양이 출력되지 않을 수 있다.)
    ┌┬┐
    ├┼┤
    └┴┘
*/
//다음과 같은 유니코드로 특수문자를 표현한다고 하자.

console.log("\u250C\u252C\u2510\n\u251C\u253C\u2524\n\u2514\u2534\u2518")

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


