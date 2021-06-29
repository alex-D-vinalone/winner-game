function match(str) {
    let state = start;
    for(let c of string) {
        state = state(c)
    }
    return state === end;
}

function start(c) {
    if(c==='a')
        return foundA;
    else
        return start
}

function end(c) {
    return end
}

