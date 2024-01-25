function showDetails(rollnumber,name,age) {
    console.log("            Student Details            ")
    console.log("Roll Number : "+rollnumber) 
    console.log("Name : "+name)
    console.log("Age : "+age)

    var obj = function (collage,mobileNumber){
        console.log("Collage : "+collage);
        console.log("Mobile Number : "+mobileNumber);

        var obj1 = function(course){
            console.log("Course : "+course);
        }
        return obj1;
    }
    
    return obj;
}

console.log("-----------------------------------------------------------------------------")
showDetails(139,'Rohit',20)('Sage',9669264151)('B.Tech');
console.log("-----------------------------------------------------------------------------")
