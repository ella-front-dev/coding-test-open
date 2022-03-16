
// CodeUp 기초 100제 ( 1050 - 1059 )

/* 1050 - [기초-비교연산]
    두 정수(a, b)를 입력받아
    a와 b가 같으면 1을, 같지 않으면 0을 출력하는 프로그램을 작성해보자.
*/
function func1050(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) === Number(num[1]) ? 1 : 0;
    return result
}
console.log(func1050("0 0"))

/* 1051 - [기초-비교연산]
    두 정수(a, b)를 입력받아
    b가 a보다 크거나 같으면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.
*/
function func1051(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) <= Number(num[1]) ? 1 : 0;
    return result
}
console.log(func1051("0 -1"))

/* 1052 - [기초-비교연산]
    두 정수(a, b)를 입력받아
    a와 b가 서로 다르면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.
*/
function func1052(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) !== Number(num[1]) ? 1 : 0;
    return result
}
console.log(func1052("0 1"))

/* 1053 - [기초-논리연산]
    1(true, 참) 또는 0(false, 거짓) 이 입력되었을 때
    반대로 출력하는 프로그램을 작성해보자.
*/
function func1053(n){
    let result = n === 1 ? 0 : 1;
    return result
}
console.log(func1053(0))

/* 1054 - [기초-논리연산]
    두 개의 참(1) 또는 거짓(0)이 입력될 때,
    모두 참일 때에만 참을 출력하는 프로그램을 작성해보자.
*/
function func1054(n){
    let num = String(n).split(" ");
    let result = (Number(num[0]) === 1 && Number(num[1]) === 1) ? 1 : 0;
    return result
}
console.log(func1054("1 1"))

/* 1055 - [기초-논리연산]
    두 개의 참(1) 또는 거짓(0)이 입력될 때,
    하나라도 참이면 참을 출력하는 프로그램을 작성해보자.
*/
function func1055(n){
    let num = String(n).split(" ");
    let result = (Number(num[0]) === 1 || Number(num[1]) === 1) ? 1 : 0;
    return result
}
console.log(func1055("1 1"))

/* 1056 - [기초-논리연산]
    두 가지의 참(1) 또는 거짓(0)이 입력될 때,
    참/거짓이 서로 다를 때에만 참을 출력하는 프로그램을 작성해보자.
*/
function func1056(n){
    let num = String(n).split(" ");
    let a = Number(num[0]);
    let b = Number(num[1]);
    let result = (a!== 1 && b === 1)||(a === 1 && b !== 1) ? 1 : 0;
    return result
}
console.log(func1056("1 1"))

/* 1057 - [기초-논리연산]
    두 개의 참(1) 또는 거짓(0)이 입력될 때,
    참/거짓이 서로 같을 때에만 참이 계산되는 프로그램을 작성해보자
*/
function func1057(n){
    let num = String(n).split(" ");
    let a = Number(num[0]);
    let b = Number(num[1]);
    let result = (a === 1 && b === 1)||(a !== 1 && b !== 1) ? 1 : 0;
    return result
}
console.log(func1057("0 0"))

/* 1058 - [기초-논리연산]
    두 개의 참(1) 또는 거짓(0)이 입력될 때,
    모두 거짓일 때에만 참이 계산되는 프로그램을 작성해보자.
*/
function func1058(n){
    let num = String(n).split(" ");
    let a = Number(num[0]);
    let b = Number(num[1]);
    let result = a !== 1 && b !== 1 ? 1 : 0;
    return result
}
console.log(func1058("0 1"))

/* 1059 - [기초-비트단위논리연산]
    입력 된 정수를 비트단위로 참/거짓을 바꾼 후 정수로 출력해보자.
    비트단위(bitwise)연산자 ~ 를 붙이면 된다.(~ : tilde, 틸드라고 읽는다.)

    ** 비트단위(bitwise) 연산자는,
    ~(bitwise not), &(bitwise and), |(bitwise or), ^(bitwise xor),
    <<(bitwise left shift), >>(bitwise right shift)
    가 있다.
    예를 들어 1이 입력되었을 때 저장되는 1을 32비트 2진수로 표현하면
    00000000 00000000 00000000 00000001 이고,
    ~1은 11111111 11111111 11111111 11111110 가 되는데 이는 -2를 의미한다.

    <예시>
    int a=1;
    printf("%d", ~a); //-2가 출력된다.

    ~(bitwise not) 연산자 만약 2를 입력 (0010) -> 0과 1을 바꿔 -3 (1101) 로 출력해준다 맨 앞에껀 부호
*/
function func1059(n){
    let result = ~n
    return result
}
console.log(func1059(2))