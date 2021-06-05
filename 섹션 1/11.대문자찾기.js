function SearchCapital(s)
{
    let answer = 0;
    for(let x of s)
    {
        if("A" <= x && x <= "Z")
            answer++;
    }
    return answer;
}

let str = "KoreaTimeGood";
console.log(SearchCapital(str));