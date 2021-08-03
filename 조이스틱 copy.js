function valid(arr){ // [9, 0, 13]
    let ar1 = arr.slice();
    let cnt = 0;
    for(let k = 0; k < ar1.length; k++){
        if (ar1[k] === 0) {
            ar1.length - k
        }else{
            cnt++;
        }
    }
    return cnt;
}
function solution(name) {
  let answer = 0;
  let strarr = [];
  let sum = 0;
  let str;
    for (let x of name) {
    str = x.charCodeAt(x)-65;
    if(str > 12){
        str = 26-str;
        //console.log(str);
    }
    strarr.push(str);
}
answer = strarr.reduce((acc,cur) => {return acc += cur},0);
//
sum = valid(strarr);
answer = answer + sum;
  return answer;
}

console.log(solution("JAN")); // len = 13, i = 1, j = 11 (len - j + i < len - i )