function solution(n, arr){
    let answer , max = 0, num, sum;
    for(let x of arr){
        sum = 0,num = x;
        while(num) // 123
        {
            sum += (num%10);
            num = Math.floor(num/10);
        }
        if(sum > max)
        {
            max = sum;
            answer = x;            
        }
        else if(sum == max)
            answer = Math.max(answer, x);
        
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));