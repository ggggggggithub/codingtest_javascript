function solution(picture, k) {
    var answer = [];
    let sim = '';
    let a = 1;
    for(let i=0; i<picture.length; i++){
        for(let j=0; j<picture[i].length; j++){
            for(let l=0; l<k; l++){
                sim += [picture[i][j]]
            }
        }
        for(let o=0; o<k; o++){
          answer.push(sim)
        }
            sim = '';
    }
    return answer;
}