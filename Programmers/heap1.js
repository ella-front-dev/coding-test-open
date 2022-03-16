
// 코딩테스트 연습 > 힙 > 디스크 컨트롤러


function solution(jobs) {
    let answer = 0;
    let sumIdx = 0;
    let subArr=[]
    let sum = 0;
    let item =0
    
    for(let i = 0; i < jobs.length; i++ ){
        sumIdx = sumIdx + i
        subArr = subArr.concat(jobs[i][1]);
        subArr.sort();
    }
    for(let j = 0; j < subArr.length; j++){
        item = item + subArr[j]
        sum = sum + item 
    }
    answer = (sum - sumIdx)/jobs.length

    return answer;
}

console.log(solution([[0, 3], [1, 9], [2, 6]]))




