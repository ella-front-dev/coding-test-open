
// CodeUp 기초 100제 ( 1040 - 1049 )

/* 1040 - [기초-산술연산]
    입력된 정수의 부호를 바꿔 출력해보자.
    단, -2147483647 ~ +2147483647 범위의 정수가 입력된다.
*/
function func1040(n){
    let chg = Number(n)*-1
    return chg
}
console.log(func1040(-2147483648))

/* 1041 - [기초-산술연산]
    영문자 1개를 입력받아 그 다음 문자를 출력해보자.
    영문자 'A'의 다음 문자는 'B'이고, 영문자 '0'의 다음 문자는 '1'이다.
*/
function func1041(x){
    let asciiX =  x.charCodeAt()+1
    let result = String.fromCharCode(asciiX)
    return result
}
console.log(func1041("a"))

/* 1042 - [기초-산술연산]
    정수 2개(a, b) 를 입력받아 a를 b로 나눈 몫을 출력해보자.
    단, -2147483648 <= a <= b <= +2147483647, b는 0이 아니다.
*/
function func1042(x){
    let num = String(x).split(" ");
    let result = parseInt(Number(num[0])/Number(num[1]))
    return result
}
console.log(func1042("1 3"))

/* 1043 - [기초-산술연산]
    정수 2개(a, b) 를 입력받아 a를 b로 나눈 나머지를 출력해보자.
    단, 0 <= a, b <= +2147483647, b는 0이 아니다.   
*/
function func1043(x){
    let num = String(x).split(" ");
    let result = Number(num[0])%Number(num[1])
    return result
}
console.log(func1043("10 3"))

/* 1044 - [기초-산술연산]
    정수를 1개 입력받아 1만큼 더해 출력해보자.
    단, -2147483648 ~ +2147483647 의 범위로 입력된다.
*/  
function func1044(n){
    let result = n + 1
    return result
}
console.log(func1044(2147483647))

/* 1045 - [기초-산술연산]
    정수 2개(a, b)를 입력받아 합, 차, 곱, 몫, 나머지, 나눈 값을 자동으로 계산해보자.
    단 0 <= a, b <= 2147483647, b는 0이 아니다.

*/  
function func1045(n){
    let num = String(n).split(" ")
    let plus = num[0] + num[1];
    let minus = num[0] -  num[1];
    let multiply = num[0] * num[1];
    let quot = parseInt(num[0]/num[1]);
    let remain = num[0]%num[1];
    let division = Math.round((num[0]/num[1])*100)/100

    return (plus+"\n"+minus+"\n"+multiply+"\n"+quot+"\n"+remain+"\n"+division)
}
console.log(func1045("10 3"))

/* 1046 - [기초-산술연산]
    정수 3개를 입력받아 합과 평균을 출력해보자.
    단, -2147483648 ~ +2147483647
*/  
function func1046(n){
    let num = String(n).split(" ");
    let sum = 0;
    let arg = 0;
    for(let i in num){
        sum = sum + Number(num[i]);
    }
    arg = (Math.round((sum / num.length)*10)/10).toFixed(1);
    return (sum +"\n"+ arg)
}
console.log(func1046("1 2 3"))


/* 1047 - [기초-비트시프트연산]
    정수 1개를 입력받아 2배 곱해 출력해보자.
*/  
function func1047(n){
    let num = Number(n)
    return num<<1
}
console.log(func1047(1024))

/* 1048 - [기초-비트시프트연산]
    정수 2개(a, b)를 입력받아 a를 2의 b제곱 곱한 값으로 출력해보자.
    0 <= a <= 10, 0 <= b <= 10
*/  
function func1048(n){
    let num = String(n).split(" ");
    return Number(num[0]) * (Number(num[0])<<Number(num[1]))
}
console.log(func1048("3 9"))

/* 1048 - [기초-비트시프트연산]
    정수 2개(a, b)를 입력받아 a를 2의 b제곱 곱한 값으로 출력해보자.
    0 <= a <= 10, 0 <= b <= 10
*/  
function func1048(n){
    let num = String(n).split(" ");
    return Number(num[0]) * (Number(num[0])<<Number(num[1]))
}
console.log(func1048("3 9"))

/* 1049 - [기초-비교연산]
    두 정수(a, b)를 입력받아
    a가 b보다 크면 1을, a가 b보다 작거나 같으면 0을 출력하는 프로그램을 작성해보자.
*/  
function func1049(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) > Number(num[1]) ? 1 : 0
    return result
}
console.log(func1049("9 1"))