/*
Promise : Request and Response
          then & catch => depend response object
    
          response object success => execute then block
          response object failure => execute catch block

          
let variable = new Promise((resolve,reject) => {}) 

        resolve() => Execut then block
        reject() => Execut catch block
     
        # here resolve and reject both are user defined variables
            * resolve or first parameter = success
            * reject or second parameter = failure
        
variable.then(()=>{}).catch(()=>{})          
*/


let p1 = new Promise((resolve,reject)=>{
    let x = 10;
    if(x<0){
        resolve("Hello...")
    }
    else{
        reject("Bye...")
    }
})
p1.then((result)=>{
    console.log("Result is : "+result)
}).catch((err)=>{
    console.log("Error Is : "+err)
})