function solution(n, arr){
    let answer = [], max = 0, num, sum, flag;
    for(let x of arr){
        sum = 0,num = x;
        while(num) //123
        {
            sum *= 10; // sum = 320 
            sum += (num%10); //  sum = 320 +1 321
            num = Math.floor(num/10); // num = 1
        }
        flag = 1;
        for(let i = 2; i < sum; i++)
        {
            if((sum%i) == 0 || sum == 1)
            {
                flag = 0
                break;
            }
        }
        if(flag == 1 && sum != 1)
        {
            answer.push(sum);
        }        
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(7, arr));