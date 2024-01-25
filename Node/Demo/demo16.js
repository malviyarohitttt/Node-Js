// Promise 

const even_odd = (num) =>{
    return new Promise((resolve, reject) =>{
        (num%2===0) ? resolve("Even number : "+num) : reject("Odd number : "+num)
    })
}

/*
    var res = even_odd(11);

    res.then((data)=>{
        console.log(data)
    }).catch((data) =>{
        console.log(data)
    })
*/

even_odd(157).then((data)=>{
    console.log(data)
}).catch((data) =>{
    console.log(data)
})