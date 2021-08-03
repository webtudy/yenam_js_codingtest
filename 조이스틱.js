function solution(name) { //JAN
    let answer = 0;
    let plate = [];
    for(let x of name){ 
        if(x == 'A')
            plate.push(0);
        else
            plate.push(1);
    }
    
    function sumplate(plate){
        let sum = 0;
        for(let x of plate)
            sum += x;
        console.log(plate,"sumplate", sum);
        return sum;
    }

    let i = 0;
    let flag = 0;
    while(sumplate(plate) != 0){
        let change = 0;
        if(name[i] != 'A'){
            if(name[i] <= 'N')
                change = name.charCodeAt(i) - 65;
            else
                change = 91 - name.charCodeAt(i);

            plate[i] = 0;
            answer += change;
        }
        console.log(i,plate[i]);// [0, 0, 1] i = 0
        if(flag == 0){ // skakaaaaaak len - j + i < len - i
            let j = plate.indexOf(1);
            let len = plate.length;
            if(len - j + i < len - i - 1){
                flag = 1;
                answer += i + 1;
                i = len - 1;
            }
            else{
                i++;
                answer++;
            }
        }
        else{
            i--;
            answer++;
        }

        console.log("1");
    }
    if(answer != 0)
    answer--;
    
    return answer;
}

console.log(solution("JAN")); // len = 13, i = 1, j = 11 (len - j + i < len - i )