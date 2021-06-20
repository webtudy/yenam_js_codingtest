function solution(arr){
    let answer=arr;

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < 0 && arr[i] > 0){ // 음수먼저 제일 앞으로 땡겨온다
                arr.unshift(arr[j]);
                i++;
                j++;
            }
        }
    }


    return answer;
}

let arr1 = [1, 3, 2, -3, -2, 5, 6, -6];
console.log(solution(arr1));