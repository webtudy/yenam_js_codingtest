function solution(str){
    let answer="";
    for(let x of str){
        if(x >= "0" && x <= "9" ) answer+=x;
    }  
    return parseInt(answer);
}

let str="g0en2T0s8eSoft"; //
console.log(solution(str));