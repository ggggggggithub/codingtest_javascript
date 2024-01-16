function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>(a-b))
    while (people.length > 1){
        if (people[0] + people[people.length-1] > limit){
            people.pop()
            answer++
        }
        else {
            people.pop()
            people.shift()
            answer++
        }
    }
    if (people.length){
        answer++}
    return answer;
}