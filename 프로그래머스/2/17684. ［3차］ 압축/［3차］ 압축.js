function solution(msg) {
    var answer = [];
    const alp = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    let str = '';
    for(let i=0; i<msg.length; i++){
        str += msg[i]
        if (i === msg.length-1){
            if (!alp.includes(str)){
                answer.push(alp.indexOf(str.slice(0,str.length-1))+1)
                answer.push(alp.indexOf(msg[i])+1)
                }
            else {answer.push(alp.indexOf(str)+1)}
            break;
        }
        if (!alp.includes(str)){
            answer.push(alp.indexOf(str.slice(0,str.length-1))+1)
            alp.push(str)
            str = msg[i];
        }
    }
    return answer;
}