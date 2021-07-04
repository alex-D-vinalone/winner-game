function match(str){
    let state = start;
    for(let s of str){
      state = state(s);
    }
    return state === end;
  }
   
  function start(s){
    return s === 'a' ? foundA : start;
  }
  function end(s){
    return end;
  }
  function foundA(s){
    return s === 'b' ? foundB : start(s);
  }
  function foundB(s){
    return s === 'c' ? foundC : start(s);
  }
  function foundC(s){
    return s === 'a' ? foundA2 : start(s);
  }
  function foundA2(s){
    return s === 'b' ? foundB2 : start(s);
  }
  function foundB2(s){
    return s === 'x' ? end : foundB(s);
  }

  console.log(match('abcabcabx'));