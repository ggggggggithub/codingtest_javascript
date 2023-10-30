function solution(n_str) {
    var answer = '';
    let a =0;
    for(let i=0; i<n_str.length; i++){
        if (n_str[i] !== "0"){
            a = i
            break;
        }
    }
    answer = n_str.slice(a,n_str.length)
    return answer;
}