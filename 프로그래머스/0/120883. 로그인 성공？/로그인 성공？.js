function solution(id_pw, db) {
    var answer = '';
    let id = id_pw[0]
    let pw = id_pw[1]
    for(let i=0; i<db.length; i++){
        if ((db[i][0] === id) && (db[i][1] === pw)){
            answer = "login";
            break
        }
        else if (db[i][0] === id){answer ="wrong pw"}
    }
    if(!answer){answer = "fail"}
    return answer;
}