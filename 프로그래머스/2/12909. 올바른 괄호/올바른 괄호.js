function solution(s){
    var answer = true;
    const stack = [];
    let arr = s.split('')
    for (let i=0; i<s.length; i++){
        if (s[i] === ')' && stack[stack.length-1] === '('){
            stack.pop()
        }
        else {stack.push(s[i])}
    }
    if (stack.length !== 0){
        answer = false
    }
 return answer
}