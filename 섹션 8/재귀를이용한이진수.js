function solution(n)
{
    let answer = 0;
    function recursion(n){
        let num = n;
        if(num == 0) return;
        else{
            recursion(parseInt(n/10));
            answer = answer*10 + (n%10);
        }
    }
    recursion(n);
    return answer;
}

console.log(solution(2381));