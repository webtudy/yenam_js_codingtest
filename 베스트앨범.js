function solution(genres, plays) {
    var answer = [];
    var genrH = new Map();
    
    for(let x in genres){
        if(genrH.has(genres[x]))
            genrH.set(genres[x], genrH.get(genres[x]) + plays[x]);
        else
            genrH.set(genres[x], plays[x]);
    }
    let sortH = [];
    for (let genr of genrH.keys()) {
        sortH.push([genr, genrH.get(genr)]);
    }

    sortH.sort(function(a, b) {
    return b[1] - a[1];
    });

    console.log(sortH, genrH);
    
    for(let i = 0; i < sortH.length; i ++){
        let sortG = [];
        for(let x in genres){            
            if(sortH[i][0] == genres[x])
            sortG.push([x, plays[x]]);
        }
        sortG.sort(function(a, b){
            return b[1] - a[1];
        })
        for(let j in sortG){
            answer.push(parseInt(sortG[j][0]));
            if(j == 1)
            break;
        }
    }

    return answer;
}

let arr1 = ["classic", "pop", "classic", "classic", "pop"];
let arr2 = [500, 600, 150, 800, 2500];
// console.log(solution(arr1, arr2));

console.log(solution(['A', 'B', 'C'], [1, 2, 3]) == [ 2, 1, 0 ]);