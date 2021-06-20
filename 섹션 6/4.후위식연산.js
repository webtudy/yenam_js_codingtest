function solution(s){
    let stack = [];  // 스택배열만들기
    
    for (let x of s) {
        if ('0' <= x && x <= '9') // 숫자면 차례대로 스택에넣고
        stack.push(parseInt(x)); // 

        else { // 연산자면
            let val2=stack.pop(); // 
            let val1=stack.pop(); // 마지막 숫자 두개 꺼낸후 
            
            if(x == '+') stack.push(val1+val2); // 연산하고 스택에 넣기
            else if(x == '-') stack.push(val1-val2);
            else if(x == '*') stack.push(val1*val2);
            else if(x == '/') stack.push(val1/val2);
        }// 마지막으로 스택에 남아있는 값이 최종연산된 값이다
    
  } 
  return stack.pop();
}
let str="352+*9-"; // 3 52
console.log(solution(str));