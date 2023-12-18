function solution(n, m, section) {
    var answer = 0;
    let num = section[0];
    for(let i=0; i<section.length; i++){
        if (num + m - 1 < section[i]){
            num = section[i]
            answer ++
        }
    }
    return answer+1;
}