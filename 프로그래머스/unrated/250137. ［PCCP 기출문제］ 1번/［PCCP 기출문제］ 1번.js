function solution(bandage, health, attacks) {
    var answer = 0;
    answer = health;
    let idx = 0;
    let plushill = 0;
    let attacktime = [];
    for(let l=0; l<attacks.length; l++){
        attacktime.push(attacks[l][0])
    }
    let time = attacks[attacks.length-1][0]
    for (let i=1; i<=time; i++){
        if (attacktime.includes(i)){
            idx = attacktime.indexOf(i)
            answer -= attacks[idx][1]
            plushill = 0;
        }
        if (!attacktime.includes(i)){
        answer += bandage[1]
        plushill ++
        }
        if (plushill === bandage[0]){
            answer += bandage[2]
            plushill = 0
        }
        if (answer > health){
            answer = health;
        }
        if (answer <= 0){
            answer = -1
            break;
        }
    }
    return answer;
}