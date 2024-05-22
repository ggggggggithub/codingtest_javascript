function solution(dots) {
    var answer = 0;
    let a = [];
    let b = [];
    for(let i=0; i<dots.length; i++){
        if (!a.includes(dots[i][0])){a.push(dots[i][0])}
        if (!b.includes(dots[i][1])){b.push(dots[i][1])}
    }
    let garo = a[0] - a[1]
    let sero = b[0] - b[1]
    answer = Math.abs(garo*sero)
    return answer;
}