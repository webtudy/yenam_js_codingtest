function solution(a, b) {
    var answer = 0;
    for(let i = a; i <= b; i++)
    answer += i;
    return answer;
}
let a = 5, b = 7;
console.log(solution(a,b));