function solution(s, t){
    let answer=[];
    let len=0;
    for(let x of s){
        if(x==t){
            len=0;
            answer.push(len);
        }
        else{
            len++;
            answer.push(len);
        }
    }
    len=0;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]==t)
        len = 0
        else
        {
            len++;
            if(len < answer[i])
            answer[i] = len;
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));