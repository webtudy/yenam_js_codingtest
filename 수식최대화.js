function caclulate(x, y, c){
    if(c == "+")
    return (x+y);
    else if(c == "-")
    return (x-y);
    else if(c == "*")
    return (x*y);
}

function solution(expression) {
    let answer = 0;
    let patt = [[0,1,2],[0,2,1],[1,2,0],[1,0,2],[2,1,0],[2,0,1]];
    let order = ['-','+','*'];
    
    let num = [];
    let sign = [];
    let temp = "";
    for(let x of expression){
        if('0' <= x && x <= '9'){
            temp += x;
        }
        else{
            num.push(parseInt(temp));
            sign.push(x);
            temp = "";
        }
    }
    console.log(calc); // [ 50, 6, 3, 2], [*, -, *] , - + *
    
    let stack = [];
    let val1, val2;
    for(let x of patt){
        for(let y of patt[x]){
            for(let z = 0; z < calc.length; z++){
                if(sign[z] == patt[x]){
                    val1 = stack.pop();
                    val2 = num[z];
                    stack.push(calculate(val1, val2, sign[z]))
                }
                else
                stack.push(num[z])
                    
            }
        }
    }
    
    
    return answer;
}