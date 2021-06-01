function solution(s){
    s=s.toLowerCase().replace(/[^a-z]/g, '');
    for(let n in s)
    {
        if(s[n] != s[s.length - 1 - n])
            {
                return "NO";
            }
    }
    return "YES";

}
let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));