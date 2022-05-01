/* 
문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

function solution(n, lost, reserve) {
  // 1. 전체 학생 수만큼 요소가 1씩 증가하는 배열을 만든다. total = [1,2,3 ...., n]
  // 2. Loop
  //    2-1. lost와 같은 값 있는지 비교
  //    2-2. 있다면 그 값이 reserve값의 +1, 0, -1한 값인지
  //    2-3. +1,0, -1 값이라면 그 값은 그대로 두고 reserve값을 제거 
  //    2-4. 값이 아니라면 total에서 그 값은 뺀다.

  let total = new Array(n).fill(0,0,n).map((item, index) => item = index + 1);
  let lostArr = lost;
  let  reserveArr = reserve;

  console.log('total', total);
  console.log('lostArr', lostArr);
  console.log('reserveArr', reserveArr);

  for(let i=0; i < total.length; i++){
    if (lostArr.indexOf(total[i]) !== -1 ) {
      if(reserveArr.indexOf(total[i]) !== -1 ){
        reserveArr.splice(i,1)
        console.log('0 tatal', total)
        console.log('0 reserveArr', reserveArr)
      }else if(reserveArr.indexOf(total[i]+1) !== -1){
        reserveArr.splice(i+1,1)
        console.log('1 tatal', total)
        console.log('1 reserveArr', reserveArr)
      }else if(reserveArr.indexOf(total[i]-1) ){
       reserveArr.splice(i-1,1)
       console.log('-1 total[i]', total[i])
       console.log('-1 total[i]', total[i])
       console.log('-1 tatal', total)
       console.log('-1 reserveArr', reserveArr)
      }else{
        total.splice(i, 1)
      }
    }
  }
  console.log('tatal', total)
  return total.length;
}

let n	= 5;
let lost = [2, 4]
let reserve = [1, 3, 5]
console.log(solution(n, lost, reserve))

n	= 5;
lost = [2, 4]
reserve = [3]
console.log(solution(n, lost, reserve))

n	= 3;
lost = [3]
reserve = [1]
console.log(solution(n, lost, reserve))

/*
입출력 예
n	lost	reserve	return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	4
3	[3]	[1]	2
입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.

*/
/* 
[파이썬 ]
def solution(participant, completion):
    # 1. participant completion 올림차순으로 정렬
    # 2. participant Loop -> completion Loop
        # 여기서 같은 숫자의 배열에 다른 이름이 있다면 그 이름을 리턴
    answer = ''
    sortParticipate = sorted(participant)
    sortCompletion = sorted(completion)
    sortCompletion.append('empty')
    # 여기서 임의의 값을 넣어준 이유는 sortParticipate Loop 돌리면서 sortCompletion의 인덱스와 비교해야하는데 전체 갯수가 달라서 임의로 넣어주었다.

    for index, item in enumerate(sortParticipate):
        if  item != sortCompletion[index]:
            answer = item
            return answer
*/