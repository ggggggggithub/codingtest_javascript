function solution(num_list) {
    var answer = 0;
    let a = 0;
    let b = 0;
    for (let i=0; i<num_list.length; i++){
        if (i % 2 === 0 || i === 0){
            b += num_list[i]
        }
        if (i % 2 !== 0){
            a += num_list[i]
        }
    }
    if (a>b){
        answer = a
    }
    if (b>a){
        answer = b
    }
    if ( b ===a){
        answer = a
    }
    return answer;
}