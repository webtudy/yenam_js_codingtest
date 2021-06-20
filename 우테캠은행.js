function create(arr, mapB){
    let answer;
    if(mapB.has(arr[1])) // 이미 계설된 계좌라면 403코드 보냄
    answer = 403;
    else{// 없는 계좌라면 계좌 맵에 이름과 한도 저장
    mapB.set(arr[1], arr[2]);
    answer = 200;
    }
    return answer;
}

function deposit(arr, mapB){
    let answer;
    if(!mapB.has(arr[1])) // 없는 계좌라면 404코드 보냄
    answer = 404;
    else{ // 존재하는 계좌라면 입력받은 돈 입금 (문자열 상태니 숫자로 변환후 계산)
    mapB.set(arr[1], parseInt(mapB.get(arr[1])) + parseInt(arr[2]));
    answer = 200;
    }
    return answer;
}

function withdraw(arr, mapB){
    let answer;
    if(!mapB.has(arr[1])) // 없는 계좌라면 404코드 보냄
    answer = 404;
    else if(parseInt(mapB.get(arr[1])) - parseInt(arr[2]) >= 0){
    mapB.set(arr[1], parseInt(mapB.get(arr[1])) - parseInt(arr[2]));
    answer = 200;
    }
    else //
    answer = 403;
    
    return answer;
}

function solution(arr){ // "명령, 계좌명, 돈"
    let answer = [];
    let arr1 = [];
    let bank = new Map();
    for(let x of arr){
        arr1 = x.split(' ');
        for(let n in arr1){
            if(arr1[n] == "CREATE")
            answer.push(create(arr1, bank));
            else if(arr1[n] == "DEPOSIT")  
            answer.push(deposit(arr1, bank));
            else if(arr1[n] == "WITHDRAW") 
            answer.push(withdraw(arr1, bank));
        }

    }
    return answer;
}

let arr =   ["DEPOSIT 3a 10000",
            "CREATE 3a 300000",
            "WITHDRAW 3a 150000",
            "WITHDRAW 3a 150001"];
console.log(solution(arr));