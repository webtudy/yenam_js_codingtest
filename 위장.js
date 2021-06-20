fuction 

function solution(clothes) {
    var answer = 0;
    var clotH = new Map();

    for(let n in clothes){
        if(clotH.has(clothes[n][1]))
        clotH.set(clothes[n][1], parseInt(clotH.get(clothes[n][1])) + 1);
        else
        clotH.set(clothes[n][1], 1);
    }
    arr = [2 , 1 , 3 , 4, 7];
    for(let x in arr){
        for(let n of )
    }


    return clotH;
}

let arr = [["yellowhat", "headgear"],  // a = 2, b = 2, c = 1, 5 + 4 + 2 + 2 + 4
            ["bluesunglasses", "eyewear"],
            ["green_turban", "headgear"]];
console.log(solution(arr));