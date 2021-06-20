function solution(s){
    let answer = "";
    let sH = new Map();
    let max = 0;

    for(let x of s){
        if(sH.has(x))
        sH.set(x, sH.get(x) + 1);
        else
        sH.set(x, 1);
    }
    for(let candi of sH.keys()) { // B A C D E
        if(sH.get(candi) > max){
            max = sH.get(candi);
            answer = candi;
        }
    }

    return answer;
}

let s1 = "BACBACCACCBDEDE";
console.log(solution(s1));