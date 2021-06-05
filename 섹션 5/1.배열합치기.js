function solution(arr1, arr2){
    let answer = [];
    let p1 = p2 = 0;
    
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] == arr2[p2]){
            answer.push(arr1[p1]);
            answer.push(arr2[p2]);
        }
        else if(arr1[p1] > arr2[p2]){
            answer.push(arr2[p2]);
            answer.push(arr1[p1]);
        }
        else {
            answer.push(arr1[p1]);
            answer.push(arr2[p2]);
        }
        p1++;
        p2++;
    }

    while(p1 < arr1.length)
    answer.push(arr1[p1++]);
    while(p2 < arr2.length)
    answer.push(arr2[p2++]);
    

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));

/*
arr1.concat(arr2);
arr1.sort();

for(let i = 0; i < arr1.length; i++)
{
    for(let j = i + 1; j < arr1.length; j++)
    {
        if(arr1[i] == arr[j])
        arr1.split(i, 1);

    }
}
*/