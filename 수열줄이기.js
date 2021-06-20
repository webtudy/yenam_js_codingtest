function solution(arr){
    let answer = 0;
    let count = 1;
    let nondup = [];
    let arr1 = arr;
    while(arr1.length != 1){
        for(let x = 0; x < arr1.length; x++){
            if(arr1[x] == arr1[x+1])
            count++;
            else{
                nondup.push(count);
                count = 1;
            }
        }
        arr1 = nondup;
        nondup = [];
        answer++;
    }
    if(arr1[0] != 1)
    answer++;

    return answer;
}

arr1 = [2];
console.log(solution(arr1));