function solution(wallpaper) {
    var answer = [];
    let file = [];
    let file2 = [];
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++)
        if (wallpaper[i][j] === "#"){
            file.push([i])
            file2.push([j])
    }
    }
    answer.push(Math.min(...file))
    answer.push(Math.min(...file2))
    answer.push(Math.max(...file)+1)
    answer.push(Math.max(...file2)+1)
    return answer;
}