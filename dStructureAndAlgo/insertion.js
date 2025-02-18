let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];

function insertionSort([...arr]) {
    for (let i = 1; i < arr.length; i++) {
        // j - 1은 정렬되었다고 간주되는 데이터중에 가장 큰 원소를 의미합니다. // j는 정렬이 필요한 원소를 의미합니다. 만약 arr[j] 가 arr[j-1]보다 크다면 위치를 교환할 필요가 없습니다. 반대라면 교환합니다.
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        }
    }
    return arr
}
console.log(insertionSort(myArr));