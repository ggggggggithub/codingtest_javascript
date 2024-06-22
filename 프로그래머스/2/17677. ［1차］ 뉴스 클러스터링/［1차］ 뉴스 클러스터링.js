function solution(str1, str2) {
    var answer = 0;
    function arrmake(str){
        let obj = {};
        for(let i=0; i<str.length-1; i++){
            let word = (str[i]) + (str[i+1])
            word = word.toLowerCase()
            if(!/[!@#$%^&*()-+*_/=,.?":{}|<>0-9\s]/.test(word)){
            if (!obj.hasOwnProperty(word)){
                obj[word] = 1
            }
                else{
                    obj[word] ++
                }
            }
        }
        return obj
    }
    let obj1 = arrmake(str1)
    let obj2 = arrmake(str2)
    function mergeObjects(obj1, obj2) {
  const mergedObj = { ...obj1 };
  for (const key in obj2) {
    if (obj1.hasOwnProperty(key)) {
      if (obj2[key] > obj1[key]) {
        mergedObj[key] = obj2[key]; 
      }
    } else {
      mergedObj[key] = obj2[key];
    }
  }
  return mergedObj;
}
    let sumobj = mergeObjects(obj1,obj2)
    let minusobj = {};
    for(let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      minusobj[key] = Math.min(obj1[key], obj2[key]);
    }
  }
    let sum = 0;
    let minus = 0;
    for (let ele in sumobj){
        sum += sumobj[ele]
    }
    for (let e in minusobj){
        minus += minusobj[e]
    }
    if ((Object.keys(obj1).length === 0) && (Object.keys(obj2).length === 0)){
        return 65536
    }
    answer = Math.trunc((minus/sum)*65536)
    return answer
    ;
}