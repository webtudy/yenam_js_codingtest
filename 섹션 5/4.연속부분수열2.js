function solution(a, arr1){
    let answer = 0;
    let p1 = 0, p2, sum;
    while(p1 < arr1.length)
    {
        sum = 0;
        p2 = p1;
        while(sum < a && p2 < arr1.length) // p1 = 0
        {
            answer++;
            sum += arr1[p2];
            p2++;
        }
        if(sum > a)
        answer--;

        p1++;
    }

    return answer;
}

let a=[6, 1, 3, 1, 2, 3]; //
console.log(solution(5, a));