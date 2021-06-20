function solution(arr, n){
    let answer;
    let sortarr = arr;
    
    sortarr.sort((a, b)=>a-b);

    let low = 0;
    let high = sortarr.length - 1;

    while(1){
        let search = parseInt((low + high)/2);
        if(sortarr[search] == n){
            answer = search + 1;
            break;
        }
        else if(sortarr[search] < n)
        low = search + 1;
        else
        high = search - 1;
    }


    return answer;
    
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(arr, 32));