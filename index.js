// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
function mondayWork (workType = 'go to the office'){
    return `This Monday, I will ${workType}.`
}
mondayWork()

let wrapAdjective = function(style="*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }
}
