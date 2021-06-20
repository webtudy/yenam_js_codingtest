function enter(arr,Chat){
    return `${Chat.get(arr[1])}님이 들어왔습니다.`;
}

function leave(arr,Chat){
    return `${Chat.get(arr[1])}님이 나갔습니다.`;
}


function solution(record) {
    var answer = [];
    let arr1 = [];
    
    let Chat = new Map();
    for(let x of record){
        arr1 = x.split(' ');
        for(let n in arr1){
            if(arr1[n] == "Enter" || arr1[n] == "Change")
            Chat.set(arr1[1], arr1[2]);
        }
    }
    for(let x of record){
        arr1 = x.split(' ');
        for(let n in arr1){
            if(arr1[n] == "Enter")
            answer.push(enter(arr1,Chat));
            else if(arr1[n] == "Leave")  
            answer.push(leave(arr1,Chat));
        }
    }
    
    
    return answer;
}

console.log(solution(	["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));