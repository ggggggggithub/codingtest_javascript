function solution(rank, attendance) {
    var answer = 0
    let ranksort = [];
    for(let i=0; i<attendance.length; i++){
        if (attendance[i] === true){
            ranksort.push(rank[i])
        }
    }
    ranksort.sort(function (a, b) {
  return a - b;
});
    let a = rank.indexOf(ranksort[0]) * 10000
    let b = rank.indexOf(ranksort[1]) * 100
    let c = rank.indexOf(ranksort[2]) 
    answer = a + b + c
    return answer;
}