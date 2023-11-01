function solution(my_string, m, c) {
    var answer = '';
    let arr = [];
    let a = '';
    for(let i=0; i<my_string.length; i++){
    a += my_string[i]
        if ((i+1)%m ===0){
            arr.push(a)
            a = '';
        }
    }
    for(let j=0; j<arr.length; j++){
        for(let k=0; k<arr[j].length; k++){
            if ((k+1) === c){
                answer += arr[j][k]
            }
        }
    }
    return answer;
}