function solution(N, stages) {
    var answer = [];
    let logic = [];
    let cnt = 0;
    let cnt2 = 0;
    stages = stages.sort()
    for (let i = 1 ; i<=N ; i++){
        for (let j = 0 ; j<stages.length ; j++){
            if (stages[j] ==i){
                cnt +=1;
            }else if(stages[j] > i){
                cnt2 += 1;
            }
        }
        logic.push(cnt/(cnt2 + cnt))
        //
        //배열의 원하는 곳에 값 추가해야한다.
        cnt = 0;
        cnt2 = 0;
    } 
    for(let value of answer){
        
    }
    return answer;
}