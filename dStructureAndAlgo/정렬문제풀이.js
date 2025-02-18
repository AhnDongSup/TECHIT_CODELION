const foods = [
  { cookingTime: 10, deliveryTime: 15 },
  { cookingTime: 7, deliveryTime: 13 },
  { cookingTime: 3, deliveryTime: 15 },
  { cookingTime: 15, deliveryTime: 5 },
  { cookingTime: 11, deliveryTime: 20 },
  { cookingTime: 13, deliveryTime: 10 },
];

// 버블정렬로 풀어보기
function bubbleSort([...arr]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      const timeOne = arr[j].cookingTime + arr[j].deliveryTime;
      const timeTwo = arr[j + 1].cookingTime + arr[j + 1].deliveryTime;

      if (timeTwo < timeOne) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) break;
  }

  return arr;
}

// console.log(bubbleSort(foods));

// 선택정렬로 풀어보기
function selectionSort([...foods]) {
  for (let i = 0; i < foods.length; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < foods.length; j++) {
      const timeOne = foods[j].cookingTime + foods[j].deliveryTime;
      const timeTwo = foods[minimumIndex].cookingTime + foods[minimumIndex].deliveryTime;

      if (timeOne < timeTwo) {
        minimumIndex = j;
      }
    }
    if (minimumIndex !== i) {
      [foods[i], foods[minimumIndex]] = [foods[minimumIndex], foods[i]];
    }
  }

  return foods;
}

// console.log(selectionSort(foods));

// 삽입정렬로 풀어보기
function insertionSort([...foods]) {
  for (let i = 1; i < foods.length; i++) {
    for (
      let j = i;
      j > 0 && foods[j].cookingTime + foods[j].deliveryTime < foods[j - 1].cookingTime + foods[j - 1].deliveryTime;
      j--
    ) {
      [foods[j], foods[j - 1]] = [foods[j - 1], foods[j]];
    }
  }
  return foods;
}

console.log(insertionSort(foods));
