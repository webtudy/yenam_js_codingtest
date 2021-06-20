function Checkhand(x, hand, high, height, flag){
    let distL = Math.abs(high[x] - height[0]);
    let distR = Math.abs(high[x] - height[1]);

    if(flag[0] == 0)
    distL++;

    if(flag[1] == 0)
    distR++;

    console.log(high[x], height[0], flag[0], distL);
    console.log(high[x], height[1], flag[1], distR);
    if(distL == distR){
        if(hand == 'left'){
            return "L";
        }
        else{
            return "R";
        }
    }
    else if(distL < distR){
        return "L";
    }
    else{
        return "R";
    }
}

function solution(numbers, hand) {
    let answer = '';
    let high = [1,4,4,4,3,3,3,2,2,2]; // 숫자별 높이
    let which = [1,4,7,3,6,9]; //0~2 왼손, 3~5 오른손
    let height = [1,1];
    let flag = [0,0];
    for(let x of numbers){
        if(which.indexOf(x) < 0){
            answer += Checkhand(x, hand, high, height, flag);
            if(Checkhand(x, hand, high, height, flag) == "L"){
                flag[0] = 1;
                height[0] = high[x];
            }
            else{
                flag[1] = 1;
                height[1] = high[x];
            }
        }
        else if(which.indexOf(x) < 3){
            flag[0] = 0;
            answer += 'L';
            height[0] = high[x];
        }
        else{
            flag[1] = 0;
            answer += 'R';
            height[1] = high[x];
        }
        console.log(height, answer)
    }
    return answer;
}
let numbers =[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand = "left";
console.log(solution(numbers, hand));