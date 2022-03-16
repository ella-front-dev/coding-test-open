
// 코딩테스트 연습 > 정렬 > k번째 수

function solution(array, commands) {
    let answer = [];
    let arr = array;
    let cmd = commands;
    
    for(var i = 0; i < cmd.length; i++){
        let first = cmd[i][0];
        let last = cmd[i][1];
        let key = cmd[i][2];
        let subArr = arr.slice(first-1, last);
        let result = subArr.sort(function(a,b){
            return a - b;
        })
        console.log(first+"/"+last+"/"+key+"/"+subArr+"\n")

        answer = answer.concat(result[key-1])
    }
    
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
