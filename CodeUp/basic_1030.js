
// CodeUp 기초 100제 ( 1030 - 1039 )

/* 1030 - [기초-출력변환] 
    정수 1개를 입력받아 그대로 출력해보자.
    단, 입력되는 정수의 범위는
    -9,223,372,036,854,775,808 ~ +9,223,372,036,854,775,807 이다.
*/
function intLimit(n){
    let number = parseInt(n)
    return number
}
console.log(intLimit(2147483648))


/* 1031 - [기초-출력변환] 
    10진수를 입력받아 8진수(octal)로 출력해보자.
*/
function base8(n){
    let number = n.toString(8)
    return number
}
console.log(base8(12345))

/* 1032 - [기초-출력변환] 
    10진수를 입력받아 16진수(hexadecimal)로 출력해보자. 소문자로 출력

*/
function baseLower16(n){
    let number = n.toString(16)
    return number.toLowerCase()
}
console.log(baseLower16(255))

/* 1033 - [기초-출력변환] 
    10진수를 입력받아 16진수(hexadecimal)로 출력해보자. 대문자로 출력
*/
function baseUpper16(n){
    let number = n.toString(16)
    return number.toUpperCase()
}
console.log(baseUpper16(255))

/* 1034 - [기초-출력변환] 
    8진수로 입력된 정수 1개를 10진수로 바꾸어 출력해보자.
*/
function base10(n){
    let number = parseInt(n, 8)
    return number
}
console.log(base10(13))

/* 1035 - [기초-출력변환] 
    16진수로 입력된 정수 1개를 8진수로 바꾸어 출력해보자.
*/
function base16(n){
    let number = parseInt(n, 16).toString(8)
    return number
}
console.log(base16("f"))

/* 1036 - [기초-출력변환] 
    영문자 1개를 입력받아 아스키 코드표의 10진수 값으로 출력해보자.
*/
function ascii(char){
    let number = char.charCodeAt()
    return number
}
console.log(ascii("A"))

/* 1036 - [기초-출력변환] 
    영문자 1개를 입력받아 아스키 코드표의 10진수 값으로 출력해보자.
*/
function ascii(char){
    let number = char.charCodeAt()
    return number
}
console.log(ascii("A"))

/* 1037 - [기초-출력변환] 
    10진 정수 1개를 입력받아 아스키 문자로 출력해보자.
    단, 0 ~ 255 범위의 정수만 입력된다.
*/
function ascii2(n){
    let number = String.fromCharCode(n)
    return number
}
console.log(ascii2(65))

/* 
    1038 : [기초-산술연산]
    정수 2개를 입력받아 합을 출력하는 프로그램을 작성해보자.
    (단, 입력되는 정수는 -1073741824 ~ 1073741824 이다.)

    1039 : [기초-산술연산]
    정수 2개를 입력받아 합을 출력해보자.
    단, 입력되는 정수는 -2147483648 ~ +2147483648 이다.
*/
function sum(n){
    let num = String(n).split(' ')
    console.log(num)
    let sum = 0;
    for(let i in num){
        sum = sum + Number(num[i])
    }
    return sum
}
console.log(sum("123 -123"))