function solution(lottos, win_nums) {
    var answer = [];
    let check = 0;
    let a = 6
    let b = 6
    let zero = 0;
    for(let i=0; i<lottos.length; i++){
        if (lottos[i] === 0){
            zero ++
        }
        for(let j=0; j<win_nums.length; j++){
            if (lottos[i] === win_nums[j] && check >= 1){
                a --
                b --
            }
            if (lottos[i] === win_nums[j]){
                check ++
            }
        }
    }
    b -= zero
    if (b < 1){
        b = 1
    }
    answer.push(b)
    answer.push(a)
    return answer;
}