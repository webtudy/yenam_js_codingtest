function solution(n){
    let answer = 0;

    function recursion(n){
        if(n == 1)
        return 1;
        else
        return n*recursion(n-1);
    }
    answer = recursion(n);
    return answer;
}

console.log(solution(5));