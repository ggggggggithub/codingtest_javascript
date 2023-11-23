function solution(arr) {
    var answer = [];
    answer = arr
    let len = [1,2,4,8,16,32,64,128,256,512,1024]
    for(let i=0; i<len.length; i++){
        if(arr.length === len[i]){
            break;
        }
        if (arr.length < len[i]){
           for(let j=arr.length; j<len[i]; j++){
               arr.push(0)
         
           }
                  break;
            answer = arr
        }
    }
    
    return answer;
}