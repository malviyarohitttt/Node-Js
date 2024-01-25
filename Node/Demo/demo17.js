const firsName = () => {
  console.log("First Name");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mahi")
    }, 2000);
  });
};
const middleName = () => {
  console.log("Middle Name");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Raina")
    reject("Raina")
    }, 5000);
  });
};
const lastName = () => {
  console.log("Last Name");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jadeja")
    }, 7000);
  });
};

// Promise.all => Execute all the functions is given sequence of array and execution time is maximum.
//                in this case 7 seconds because lastName take 7 seconds to execute

Promise.all([firsName(), middleName(), lastName()]).then((data) => {
    console.log("Data[0] : "+data[0]);
    console.log("Data[1] : "+data[1]);
    console.log("Data[2] : "+data[2]);
}).catch((content) =>{
    console.log("content[0] : "+content[0]);
    console.log("content[1] : "+content[1]);
    console.log("content[2] : "+content[2]);
})


// Promise.race => executes a function whose execution time is least.
//                 in this case 5 seconds because firstName takes 5 seconds to execute

Promise.race([firsName(), middleName(), lastName()]).then((data) => {
    console.log("Data[0] : "+data[0]);
    console.log("Data[1] : "+data[1]);
    console.log("Data[2] : "+data[2]);
}).catch((content) =>{
    console.log("content[0]"+content[0]);
    console.log("content[1]"+content[1]);
    console.log("content[2]"+content[2]);
})