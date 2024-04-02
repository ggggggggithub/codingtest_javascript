function solution(id_list, report, k) {
    var answer = [];
    answer = new Array(id_list.length).fill(0)
    let dup = [...new Set(report)]
    let obj = {};
    for(let i=0; i<dup.length; i++){
        let [user, shingo] = dup[i].split(" ")
        if (obj.hasOwnProperty(shingo)){
               obj[shingo].push(user);
    } else {
      obj[shingo] = [user];
    }
  }
    const people = Object.values(obj).filter(item => item.length >= k).flat().sort()
    for(let i=0; i<people.length; i++){
        let j = id_list.indexOf(people[i])
        answer[j] ++
    }
    
    return answer;
}