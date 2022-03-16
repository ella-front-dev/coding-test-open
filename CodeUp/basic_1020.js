
// CodeUp 기초 100제 ( 1020 - 1029 )

/* 1020 :[기초-출력변환] 
    주민번호는 다음과 같이 구성된다.
    XXXXXX-XXXXXXX
    앞의 6자리는 생년월일(yymmdd)이고 뒤 7자리는 성별, 지역, 오류검출코드이다.
    주민번호를 입력받아 형태를 바꿔 출력해보자.
*/
function privateNum(n){
    let num = n.split("-")
    return( num[0]+num[1] )
}
console.log(privateNum("110011-0000000"))

/* 1021 :[기초-출력변환] 
    1개의 단어를 입력받아 그대로 출력해보자.
*/
function word(x){
    let char = String(x)
    return char
}
console.log(word("Information"))

/* 1022 :[기초-출력변환] 
    공백 문자가 포함되어 있는 문장을 입력받고 그대로 출력하는 연습을 해보자.
*/
function sentence(x){
    let stc = String(x)
    return stc
}
console.log(word("Programming is very fun!!"))

/* 2023 : [기초-출력변환] 
    실수 1개를 입력받아 정수 부분과 실수 부분으로 나누어 출력한다.
    ** 여러 가지 방법들로 해결할 수 있다.
    만약 실수 부분이 0으로 시작하지 않는다면(예를 들어 1.000009)
    scanf("%d.%d", &a, &b)도 하나의 방법이 될 수 있다.
*/
function printNum(n){
    let intNum = Math.floor(n)
    let floorNum = n % 1
    return(intNum+"\n"+floorNum)
}
console.log(printNum(123.123123))

/*  자바스크립트 올림 / 버림 / 반올림  
    올림 : Math.cell()
    버림 : Math.floor()
    반올림 : Math.round()
*/

/* 2024 : [기초-출력변환] 
    단어를 1개 입력받는다. 입력받은 단어(영어)의 각 문자를 한줄에 한 문자씩 분리해 출력한다. 
*/
function wordOut(w){
    let word = String(w).split("");
    let words = "";
    for(let i in word){
        words = words + "'"+word[i]+"'\n";
    }
    return words
}
console.log(wordOut("word"))

/* 2025 : [기초-출력변환] 
    다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다. 
*/
function intOut(n){
    // let num = n;
    // let strNum = String(num);
    let result = "";

    for(let i=0; i > strNum .length; i++){

    }
    return result
}

/* 2026 : [기초-출력변환] 
    입력되는 시:분:초 에서 분만 출력해보자. 
*/
function timeMin(x){
    let time = x.split(":");
    return time[1]
}
console.log(timeMin("17:23:57"))

/* 2027 : [기초-출력변환] 
    입력되는 시:분:초 에서 분만 출력해보자.
 */
function dateFormet(d){
    let date = d.split(".");
    let year = function(){
        let  len = (4 - date[0].length);
        return (len > 0? new Array(len+1).join('0')+date[0] : date[0]);
    } 
    let mon = date[1].length === 1 ? "0"+date[1] : date[1];
    let day = date[2].length === 1 ? "0"+date[2] : date[2];
    
    return (day+"-"+mon+"-"+year())
}
console.log(dateFormet("17.2.7"))

/* 2028 : [기초-출력변환] 
    정수 1개를 입력받아 그대로 출력해보자.
    (단, 입력되는 정수의 범위는 0 ~ 4,294,967,295 이다.)
 */
function intLimit(n){
    let number = parseInt(n)
    return number
}
console.log(intLimit(2147483648))

/* 2029 : [기초-출력변환] 
    실수 1개를 입력받아 그대로 출력해보자.
    (단, 입력되는 실수의 범위는 +- 1.7*10-308 ~ +- 1.7*10308 이다.)
    소수점 11자리 이하까지
 */
function floatPrint(n){
    let num = (Math.round(n * 100000000000)/100000000000).toFixed(11)
    return (num);
}
console.log(floatPrint(3.141592653591234567890))
