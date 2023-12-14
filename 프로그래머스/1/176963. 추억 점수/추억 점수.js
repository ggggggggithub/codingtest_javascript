function solution(name, yearning, photo) {
    var answer = [];
    let num = 0;
    for (let i=0; i<photo.length; i++){
        for (let j=0; j<photo[i].length; j++){
            for (let k=0; k<name.length; k++){
                if (photo[i][j] === name[k]){
                    num += yearning[k]
                }
            }
        }
        answer.push(num);
        num = 0
    }
    return answer;
}