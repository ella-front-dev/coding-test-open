/* 
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
*/

function solution(participant, completion) {
  let answer = '';
  // 1. participant completion 올림차순으로 정렬
  // 2. participant Loop -> completion Loop
      // 여기서 같은 숫자의 배열에 다른 이름이 있다면 그 이름을 리턴
  
  let sortParticipate = participant.sort();
  let sortCompletion = completion.sort();
  console.log('sortParticipate', sortParticipate)
  console.log('sortCompletion', sortCompletion)
  
  for(let i=0; i < sortParticipate.length; i++){
    if(sortParticipate[i] !== sortCompletion[i]){
      console.log('i', i)
      return answer = sortParticipate[i]
    }
  }
  return answer;
}

let participant	= ["leo", "kiki", "eden"];
let completion = 	["eden", "kiki"]
console.log(solution(participant, completion))

participant = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]
console.log(solution(participant, completion))


// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.


/*
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
