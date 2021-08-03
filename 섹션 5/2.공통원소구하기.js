function solution(arr1, arr2){
    let answer=[];
    arr1.sort();
    arr2.sort();
    let p1=p2=0;
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] === arr2[p2]){
            answer.push(arr1[p1]);
            p1++;
            p2++;
        }
        else if(arr1[p1] > arr2[p2])
        p2++
        else
        p1++;
    }
    return answer;
}

let a=[1, 3, 9, 5, 2]; // [1,2,3,5,9]
let b=[3, 2, 5, 7, 8]; // [2,3,5,7,8]
console.log(solution(a, b));