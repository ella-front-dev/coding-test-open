
// CodeUp 기초 100제 ( 1060 - 1069 )

/* 1060 - [비트단위논리연산]
    입력된 정수 두 개를 비트단위로 and 연산한 후 그 결과를 정수로 출력해보자.
    비트단위(bitwise)연산자 &를 사용하면 된다.(and, ampersand, 앰퍼센드라고 읽는다.)

    &(and) 는 1 , 1 = 1  0,0 = 0 0,1 = 0 1,0 = 0 임
*/
function func1060(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) & Number(num[1]);
    return result
}
console.log(func1060("3 5"))

/* 1061 - [비트단위논리연산]
    입력된 정수 두 개를 비트단위로 and 연산한 후 그 결과를 정수로 출력해보자.
    비트단위(bitwise)연산자 &를 사용하면 된다.(and, ampersand, 앰퍼센드라고 읽는다.)

    |(or) 은 0,0 만 0 이고 나머지는 다 1
*/
function func1061(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) | Number(num[1]);
    return result
}
console.log(func1061("3 5"))

/* 1062 - [비트단위논리연산]
    입력된 정수 두 개를 비트단위로 xor 연산한 후 그 결과를 정수로 출력해보자.
    비트단위(bitwise) 연산자 ^(xor, circumflex/caret, 서컴플렉스/카릿)를 사용하면 된다. 
    
    ^(xor) 은 1,0 = 1  0,1=1 나머지는 다 0
*/
function func1062(n){
    let num = String(n).split(" ");
    let result = Number(num[0]) ^ Number(num[1]);
    return result
}
console.log(func1062("3 5"))

/* 1063 - [삼항연산]
    입력된 두 정수 a, b 중 큰 값을 출력하는 프로그램을 작성해보자.
    단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다.
*/
function func1063(n){
    let num = String(n).split(" ");
    let a = Number(num[0]);
    let b = Number(num[1]);
    let result = a > b ? a : b;
    return result
}
console.log(func1063("123 456"))

/* 1064 - [삼항연산]
    입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
    단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다.
*/
function func1064(n){
    let num = String(n).split(" ");
    let a = Number(num[0]);
    let b = Number(num[1]);
    let c = Number(num[2]);
    let result = (a > b) ? (b > c ? c : b) :(a > c ? c : a ) 
    return result
}
console.log(func1064("3 -1 5"))

/* 1065 - [조건/선택실행구조]
    세 정수 a, b, c가 입력되었을 때, 짝수만 출력해보자.
*/
function func1065(n){
    let num = String(n).split(" ");
    let result = "";
    for(let i in num){
        if(Number(num[i])%2 === 0){
            result = result + Number(num[i])+ "\n" 
        }
    }
    return result
}
console.log(func1065("1 2 4"))

/* 1066 - [조건/선택실행구조]
    세 정수 a, b, c가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.
*/
function func1066(n){
    let num = String(n).split(" ");
    let result = "";
    for(let i in num){
        if(Number(num[i])%2 === 0){
            result = result + "even\n" 
        } else {
            result = result + "odd\n" 
        }
    }
    return result
}
console.log(func1066("1 2 8"))

/* 1067 - [조건/선택실행구조]
    정수 1개가 입력되었을 때, 음(minus)/양(plus)과 짝(even)/홀(odd)을 출력해보자.
*/
function func1067(n){
    let num = Number(n);
    let result = "";
    if(num > 0){
        result = "plus"
        if(num%2 === 0){
            result = result + "\neven"
        } else {
            result = result + "\nodd"
        }
    } else {
        result = "minus"
        if(num%2 === 0){
            result = result + "\neven"
        } else {
            result = result + "\nodd"
        }
    }
    return result
}
console.log(func1067(-2147483648))

/* 1068 - [조건/선택실행구조]
    점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.

    [ 평가 기준 ]
    점수 범위 : 평가
    90 ~ 100 : A
    70 ~   89 : B
    40 ~   69 : C
    0 ~   39 : D
    로 평가되어야 한다.
*/
// 안됨!!!!!
function func1068(n){
    let num = Number(n);
    let result = "";

    if(90 <= num <= 100){
        result = "A";
    }else if(70 <= num <90){
        result = "B";
    }else if(40 <= num <70){
        result = "C";
    }else{ result = "D"; }
    return result
}
console.log(func1068(30))

/* 1069 - [조건/선택실행구조]
    평가를 문자(A, B, C, D, ...)로 입력받아 내용을 다르게 출력해보자.

    평가 내용
    평가 : 내용
    A : best!!!
    B : good!!
    C : run!
    D : slowly~
    나머지 문자들 : what?
*/

function func1069(avg){
    let result = ""
    switch(avg){
        case "A" :
            result = "best!!!"
            break;
        case "B" :
            result = "good!!"
            break;
        case "C" :
            result = "run!"
            break;
        case "D" :
            result = "slowly~"
            break;
        default :
        result = "what?"
    }
    return result
}
console.log(func1069("A"))




