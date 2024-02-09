function solution(s) {
    var answer = -1;
    answer = 0;
    const turn = (str) => {
        let stack = [];
        for(let i=0; i<str.length; i++){
            let n = stack.length-1;
            if ((stack[n] === "[" && str[i] === "]") ||
               (stack[n] === "{" && str[i] === "}") ||
               (stack[n] === "(" && str[i] === ")")){
                stack.pop()
                }
                else {stack.push(str[i])}
        }
        if (stack.length === 0){
            return true
        }
        else {return false}
    }
    for (let i=1; i<=s.length; i++){
        let arr = [...s.slice(i), ...s.slice(0,i)]
        if (turn(arr)){
            answer++
        }
    }
    return answer;
}