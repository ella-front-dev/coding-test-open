
// CodeUp 기초 100제 ( 1070 - 1079 )

/* 1070 - [선택실행구조]
    월이 입력될 때 계절 이름이 출력되도록 해보자.
*/
function func1070(mon){
    let result = "";
    switch(mon){
        case 12 :
        case 1 :
        case 2 :
            result="winter"
            break;
        case 3 :
        case 4 :
        case 5 :
            result="spring"
            break;
        case 6 :
        case 7 :
        case 8 :
            result="summer"
            break;
        case 9 :
        case 10 :
        case 11 :
            result="autumn"
            break;
        default :
        result="what?"
    }
    return result;
}
console.log(func1070(3))

/* 1071 / 1073 - [반복실행구조]
    정수가 순서대로 입력된다.
    -2147483648 ~ +2147483647, 단 개수는 알 수 없다.
    0이 아니면 입력된 정수를 출력하고, 0이 입력되면 출력을 중단해보자.
*/
function func1071(n){
    let num = String(n).split(" ");
    let result = "";

    for(let i in num){
        if(Number(num[i]) === 0){
            return result
        } else {
            result = result + Number(num[i]) +"\n"
        }
    }

    return result;
}
console.log(func1071("7 4 2 3 1 5 6 0 9 10 8"))

/* 1072 - [반복실행구조]
    n개의 정수가 순서대로 입력된다.
    -2147483648 ~ +2147483647, 단 n의 최대 개수는 알 수 없다.
    n개의 입력된 정수를 순서대로 출력해보자.
*/
function func1072(n, list){
    let num = Number(n)
    let listArr = String(list).split(" ");
    let result = "";
    for(let i in listArr){
        result = result + Number(listArr[i]) +"\n"
    }
    return result;
}
console.log(func1072(5,"7 4 2 3 1"))

/* 1074 - [반복실행구조]
    정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.
    1씩 줄이면서 한 줄에 하나씩 1이 될 때까지 출력한다.
*/
function func1074(n){
    let result = "";
    for(let i = 0; i < n; i++){
        result = result + (n - i) + "\n"
    }
    return result;
}
console.log(func1074(5))

/* 1075 - [반복실행구조]
    정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.
    1씩 줄이면서 한 줄에 하나씩 0이 될 때까지 출력한다.
*/
function func1075(n){
    let result = "";
    for(let i = 1; i < n+1; i++){
        result = result + (n - i) + "\n"
    }
    return result;
}
console.log(func1075(5))

/* 1076 - [반복실행구조]
    영문자(a ~ z) 1개가 입력되었을 때 그 문자까지의 알파벳을 순서대로 출력해보자.
*/
// 넘김
function func1076(char){
    let result = "";
    for(let i = 0; i < n; i++){
        result = result + (n - i) + "\n"
    }
    return result;
}
// console.log(func1076(5))

/* 1077 - [반복실행구조]
    정수(0 ~ 100) 1개를 입력받아 0부터 그 수까지 순서대로 출력해보자.
*/
function func1077(n){
    let result = "";
    for(let i = 0; i <= n; i++){
        result = result + (n - i) + "\n"
    }
    return result;
}
console.log(func1077(5))

/* 1078 - [종합]
    정수(1 ~ 100) 1개를 입력받아 1부터 그 수까지 짝수의 합을 구해보자.
*/
function func1078(n){
    let num = 0;
    let result = 0;
    for(let i = 0; i < n; i++){
        num = n -i;
        if(num%2 === 0){
            result = result + num
        }
    }
    return result;
}
console.log(func1078(5))

/* 1079 - [종합]
    'q'가 입력될 때까지 입력한 문자를 계속 출력하는 프로그램을 작성해보자.
*/
function func1079(n){
    let num = String(n).split(" ");
    let result = "";
    for(let i in num){
        if(num[i] === 'q'){
            result = result + num[i]
            break;
        }else{
            result = result + num[i]+"\n"
        }
    }
    return result;
}
console.log(func1079("x b k d l q g a c"))


