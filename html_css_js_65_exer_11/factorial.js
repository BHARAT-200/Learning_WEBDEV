function fact_rec(a){
    if(a <= 1){
        return 1;
    }
    return a * fact_rec(a-1);
}

function fact_iter(a){
    let ft = 1;
    while(a >= 1){
        ft = ft * a;
        a--;
    }
    return ft;
}

function fact_iterf(a){
    let ft = 1;
    for(let i = a;i >= 1;i--){
        ft *= i;
    }
    return ft;
}

console.log(fact_iter(5))
console.log(fact_iterf(5))
console.log(fact_rec(5))