function solution(arr){
    let answer=arr;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[i]){
            temp = arr[j]; // 두 수를 서로 바꿔준다
            arr[j] = arr[i];
            arr[i] = temp;
            }
        }
    } 
    return answer;
}

let arr1 = [13, 5, 11, 7, 23, 15];
console.log(solution(arr1));