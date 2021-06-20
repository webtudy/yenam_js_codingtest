function solution(s1, s2){
    let s1H = new Map();
    let s2H = new Map();
    let len = s2.length;

    for(let x of s2){
        if(s2H.has(x))
        s2H.set(x, s2H.get(x) + 1);
        else
        s2H.set(x, 1);
    }

    for(let x = 0; x < len; x++){
        if(s1H.has(s1[x]))
        s1H.set(s1[x], s1H.get(s1[x]) + 1);
        else
        s1H.set(s1[x], 1);
    }

    let p1 = 0;

    let flag = 0, answer = 0;

    while(p1 < s1.length - len + 1){
        flag = 0;
        for(let word of s2H.keys()) {
            if(s1H.get(word) != s2H.get(word)){
                flag = 1;
                break;
            }
        }
        if(flag == 0){
            answer++;
        }
        
        p1++;
        if(s1H.has(s1[p1 + len - 1]))
        s1H.set(s1[p1 + len - 1], s1H.get(s1[p1 + len - 1]) + 1);
        else
        s1H.set(s1[p1 + len - 1], 1);

        s1H.set(s1[p1 - 1],s1H.get(s1[p1 - 1]) - 1 );

    }

    return answer;
}

let s1 = "bacaAacba";
let s2 = "abc";
console.log(solution(s1, s2));