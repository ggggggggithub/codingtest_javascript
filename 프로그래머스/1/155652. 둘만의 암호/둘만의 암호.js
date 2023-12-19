function solution(s, skip, index) {
    var answer = '';
    let alp = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].filter(a => !skip.includes(a));
    for(let i=0; i<s.length; i++){
        answer += alp[(alp.indexOf(s[i])+index)%alp.length]
    }
    return answer;
}