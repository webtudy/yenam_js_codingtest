function solution(s)
{
    let i = s.length;
    if(i % 2 == 0)
        {
            let str = "";
            str += s[i/2 -1];
            str += s[i/2];            
            return str;
        }
    else
        return Math.floor(i/2);
}

let str = "heilo";
console.log(solution(str))