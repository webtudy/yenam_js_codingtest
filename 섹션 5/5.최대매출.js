function solution(a, arr1){
    let answer = 0;
    let sum, max = 0, p1 = 0, p2;
    while(p1 < arr1.length - a)
    {
        p2 = p1;
        sum = 0;
        for(let i = 0; i < a; i++){
        sum += arr1[p2];
        p2++;
        }
        if(sum > max)
        max = sum;
        p1++;
    }
    answer = max;

    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15]; //
console.log(solution(3, a));