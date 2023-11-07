function solution(num_list) {
    var answer = 0;
    for(let i=0; i<num_list.length; i++){
        while (num_list[i] !== 1){
        num_list[i] = Math.floor(num_list[i] /2);
        answer ++;     
        }
    }
    return answer;
}
