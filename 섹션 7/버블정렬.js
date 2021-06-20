function solution(arr) {
    let length = arr.length;
    let i, j, temp;
    let answer = arr;

    for (i = 0; i < length - 1; i++) { 
      for (j = 0; j < length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
        if (arr[j] > arr[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
          temp = arr[j]; // 두 수를 서로 바꿔준다
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return answer;
  };
  
let arr1 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr1));