function solution(s1, s2){
    let s1H = new Map();
    let s2H = new Map();

    for(let x of s1){
        if(s1H.has(x))
        s1H.set(x, s1H.get(x) + 1);
        else
        s1H.set(x, 1);
    }
    for(let x of s2){
        if(s2H.has(x))
        s2H.set(x, s2H.get(x) + 1);
        else
        s2H.set(x, 1);
    }

    for(let word of s1H.keys()) { 
        if(s1H.get(word) != s2H.get(word))
        return "NO";
    }

    return "YES";
}

let s1 = "tommarvoloriddle";
let s2 = "iamlordvoldemort";
console.log(solution(s1, s2));