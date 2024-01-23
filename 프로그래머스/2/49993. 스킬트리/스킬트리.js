function solution(skill, skill_trees) {
    var answer = 0;
    let arr = [];
    let num = 1
    while (num !== skill.length+1){
        arr.push(skill.slice(0,num))
        num++
    }
    const realskill = skill_trees.map((ele) => {
        const regex = new RegExp(`[^${skill}]`, 'g');
        return ele.replace(regex, '')
    })
    for(let i=0; i<realskill.length; i++){
        if (arr.includes(realskill[i])){
            answer++
        }
        if (realskill[i] === ''){
            answer++
        }
    }
    
    return answer;
}