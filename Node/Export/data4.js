function show(){
    this.f1 = ()=>{
        console.log("F1 called...")
    }
    this.f2 = ()=>{
        console.log("F1 called...")
    }
}

module.exports = new show();