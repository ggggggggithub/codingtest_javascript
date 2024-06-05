function solution(keyinput, board) {
    var answer = [];
    let ud = (board[1]-1)/2
    let rl = (board[0]-1)/2
    let sero = 0;
    let garo = 0;
    for(let i=0; i<keyinput.length; i++){
        let key = keyinput[i]
        if (key === "right"){garo ++}
        else if (key === "left"){garo --}
        else if (key === "up"){sero ++}
        else if (key ==="down"){sero --}
        if (Math.abs(garo) > rl){
            if (garo >0){garo = rl}
            else {garo = -rl}}
        if (Math.abs(sero)>ud){
            if(sero>0){sero = ud}
            else {sero = -ud}}
    }
    answer.push(garo,sero)
    return answer;
}