function solution(a, arr1){
    let answer = 0;
    let p1 = 0, p2, sum;
    while(p1 < arr1.length)
    {
        sum = 0;
        p2 = p1;
        while(sum < a) // p1 = 0
        {
            sum += arr1[p2];
            p2++;
        }
        if(sum == a)
        answer++;

        p1++;
    }

    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2]; //
console.log(solution(6, a));