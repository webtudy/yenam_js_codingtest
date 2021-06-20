function solution(n)
{
    function recursion(n){
        let num = n;
        if(num == 1)
        console.log(1);
        else{
            recursion(num - 1)
            console.log(num);
        }
    }
    recursion(n);
}

solution(3);