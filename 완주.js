function solution(participant, completion) {
    var parH = new Map();
    var comH = new Map();
    for(let x of participant){
        if(parH.has(x))
        parH.set(x, parH.get(x) + 1);
        else
        parH.set(x, 1);
    }
    console.log(parH);
    for(let x of completion){
        if(comH.has(x))
        comH.set(x, comH.get(x) + 1);
        else
        comH.set(x, 1);
    }
    
    for(let candi of parH.keys()) { 
        if(comH.get(candi) != parH.get(candi))
            return candi;
    }
    
}
arr1 = ["leo", "kiki", "eden"];
arr2 = ["eden", "kiki"];
console.log(solution(arr1, arr2))