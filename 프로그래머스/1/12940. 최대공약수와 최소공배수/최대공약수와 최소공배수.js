function solution(n, m) {
    var answer = [];
    let a =0;
    let b = 0;
    if (n<m){a = n; b=m;}
    else {a = m; b =n;}
    let c = 0;
    let d = 0;
    for(let i=1; i<=a; i++){
        if (n%i===0 && m%i===0){
            c = i
        }
    }
    for (let i=a; i<=(a*b); i += a){
        if (i%b===0){
            d = i;
            break;
        }
    }
    answer.push(c)
    answer.push(d)
    return answer;
}