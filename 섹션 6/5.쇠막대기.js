function solution(s){ // "()(((()())(())()))(())"
    let stack = [];  // 스택배열만들기
    let pipe = 0;

    for(let x = 0; x < s.length; x++){
        if(s[x] == "(" && s[x + 1] == ")"){
        stack.push(pipe);
        x++;
        }
        else if(s[x] == "(")
        pipe++;
        else if(s[x] == ")"){
        pipe--;
        stack.push(1);
        }
        console.log(x, pipe, stack);
    }
    let sum = 0;
    for(let x of stack){
        sum += x;
    }
    // 마지막으로 스택에 남아있는 값이 최종연산된 값이다
    return sum;
    
  } 

let str="(((()(()()))(())()))(()())";
console.log(solution(str));