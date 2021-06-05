function solution(s){
    s=s.toLowerCase();
    for(let n in s)
    {
        if(s[n] != s[s.length - 1 - n])
            {
                return "NO";
            }
    }
    return "YES";

}
let str="goSoG";
console.log(solution(str));