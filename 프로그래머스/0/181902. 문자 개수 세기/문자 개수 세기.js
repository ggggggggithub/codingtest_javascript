function solution(my_string) {
    var answer = [];
    answer = new Array(52).fill(0)
    let alp = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]
    for(let i=0; i<my_string.length; i++){
        let num = alp.indexOf(my_string[i])
        answer[num] ++
    }
    return answer;
}