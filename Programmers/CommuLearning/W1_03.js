/* 
문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

function solution(numbers) {

  // //    1. 각각의 요소를 string으로 변환 한다.
  // //    2. 내림 차순으로 정렬
  // //    3. 해당 요소를 합친다.  

  let result = numbers.map((item) => item+'').sort((a,b) => (b+a) - (a+b) )

  return result.join('');
}

let numbers	= [6, 10, 2];
console.log(solution(numbers))

numbers	= [3, 30, 34, 5, 9];
console.log(solution(numbers))

/*
입출력 예
numbers	return
[6, 10, 2]	"6210"
[3, 30, 34, 5, 9]	"9534330"

*/
/*
python
def solution(numbers):
    result = list(map(str, numbers))
    result.sort(key=lambda x: x * 3, reverse=True)
    return str(int(''.join(result)))
*/
