function solution(s1){
    let answer = "YES";
    let n = 0;
    for(let x of s1){ 
        if( x == '(')
        n++;
        else
        n--;
        if(n < 0){
        answer = "NO";
        break;
        }
    }
    if(n != 0)
    answer = "NO";
    return answer;
}

let s = "(()(()))(()";
console.log(solution(s));
/*
function solution(s1){
    let answer = "YES";
    let n = 0, m = 0;
    for(let x of s1){
        if( x == '(')
        n++;
        else
        m++;
    }
    if(n != m || s1[0] == ')' || s1[s1.length - 1] == '(')
    answer = "NO";

    return answer;
}
 */