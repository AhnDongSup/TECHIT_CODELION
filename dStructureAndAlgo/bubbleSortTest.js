// 이 문제는 실제로 입사문제로 사용되던 알고리즘 문제입니다.
// 배열이 하나 주어졌을때 [3,2,4,5,2,1,0,3];
// 함수를 만듭니다. 가장 먼저 반복되는 원소의 값을 반환합니다.
// 반복되는 원소가 없으면 undefined를 반환합니다.
let arr = [3, 2, 4, 5, 2, 1, 0, 3];

function test(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] === arr[j]) {
        return arr[i];
      }
      // [3,2,4,5,2,1,0,3];
    }
  }
  return undefined;
}

// [3,2,3,4,5,2,1,0,3];
function test2(arr) {
  const useHash = {};
  // useHash[3]
  for (let i = 0; i < arr.length; i++) {
    if (useHash[arr[i]]) {
      return arr[i];
    } else {
      // 해쉬테이블의 키로 arr의 원소를 차례로 등록
      // {3:0, 2:1, }
      useHash[arr[i]] = i;
    }
  }
}

function 처음반복되는원소구하기ver3(input) {
  const makeSet = new Set();
  for (let i = 0; i < input.length; i++) {
    if (makeSet.has(input[i])) {
      return input[i];
    } else {
      // [1,2,3]
      makeSet.add(input[i]);
    }
  }
  return undefined;
}
