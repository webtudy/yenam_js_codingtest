function solution(s)
{
    let answer = "";
    for(let x in s) // x = 3, s[x] = k
    {
        if(s.indexOf(s[x]) == x) // s.indexOf(k) = 0, x = 3
            answer += s[x];
    }
    return answer;
}

let str = "ksekkset";
console.log(solution(str))