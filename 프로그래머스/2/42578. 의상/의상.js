function solution(clothes) {
    var answer = 1;
    let obj = {};
    for (let i = 0; i < clothes.length; i++){
        if(obj.hasOwnProperty(clothes[i][1])){
            obj[clothes[i][1]].push(clothes[i][0]);
        }
        else {
            obj[clothes[i][1]] = [clothes[i][0]];
        }
    }
     const clothesObj = {}

    clothes.forEach(arr =>{
        let [el,type] = arr
        if(clothesObj.hasOwnProperty(type)){
            clothesObj[type]++
        }else{
            clothesObj[type] = 1
        }

    })
    for(let key in clothesObj){
        answer *= clothesObj[key] + 1
    }
    
    return answer-1;
}