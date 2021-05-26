function solution(s)
{
    let answer = "";
    for(let x of s)
    {
        if("a" <= x && x <= "z")
            answer += x.toUpperCase();
        else
            answer += x.toLowerCase();
    }
    return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));