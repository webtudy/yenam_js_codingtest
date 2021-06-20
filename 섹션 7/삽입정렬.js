function solution (arr) {
    let answer = arr;

    console.log(0, arr);
    for (let i = 1; i < arr.length; i++) {
        let right = arr[i];
        let left = i - 1;

        while (left >= 0 && arr[left] > right) {
            arr[left + 1] = arr[left];
            arr[left] = right;
            right = arr[left];
            left--;
            console.log(i, arr);
        }
    }

    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
    