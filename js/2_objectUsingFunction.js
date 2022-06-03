console.log("Hello Objects function.");
// ================setp 1 ================
// let fullName = function(){
//     return this.fName + " " + this.lName;
// }
// let shortInfo = function(){
//     return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
// }
// let addressInfo = function(){
//     return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
// }


// function createUser(fName,lName,age,city,zipCode,dist,addr){
//     const address = {};
//     const user = {address: address};
//     user.fName = fName;
//     user.lName = lName;
//     user.age = age;
//     user.address.city = city;
//     user.address.zipCode  = zipCode;
//     user.address.dist  = dist;
//     user.address.addr = addr;
//     user.fullName = fullName;
//     user.shortInfo = shortInfo;
//     user.addressInfo  = addressInfo;
//     return user;
// }

// const user1 = createUser('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');


// console.log(user1);
// console.log(user1.fullName());
// console.log(user1.shortInfo());
// console.log(user1.addressInfo());



// ============================step 2 ==========================

// const userMethods = {
//     fullName : function(){
//         return this.fName + " " + this.lName;
//     },
//     shortInfo: function(){
//         return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
//     },
//     addressInfo(){
//         return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
//     }
// }

// function createUser(fName,lName,age,city,zipCode,dist,addr){
//     const address = {};
//     const user = {address: address};
//     user.fName = fName;
//     user.lName = lName;
//     user.age = age;
//     user.address.city = city;
//     user.address.zipCode  = zipCode;
//     user.address.dist  = dist;
//     user.address.addr = addr;
//     user.fullName = userMethods.fullName;
//     user.shortInfo = userMethods.shortInfo;
//     user.addressInfo  = userMethods.addressInfo;
//     return user;
// }

// const user1 = createUser('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');


// console.log(user1);
// console.log(user1.fullName());
// console.log(user1.shortInfo());
// console.log(user1.addressInfo());



// ****************************step 3 ************************************
// const userMethods = {
//     fullName : function(){
//         return this.fName + " " + this.lName;
//     },
//     shortInfo: function(){
//         return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
//     },
//     addressInfo(){
//         return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
//     }
// }

// function createUser(fName,lName,age,city,zipCode,dist,addr){
//     const address = {};
//     const user = Object.create(userMethods);
//     user.address = address;
//     user.fName = fName;
//     user.lName = lName;
//     user.age = age;
//     user.address.city = city;
//     user.address.zipCode  = zipCode;
//     user.address.dist  = dist;
//     user.address.addr = addr;
//     return user;
// }

// const user1 = createUser('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');


// console.log(user1);
// console.log(user1.fullName());
// console.log(user1.shortInfo());
// console.log(user1.addressInfo());




// ==================================step 4==================================

// function createUser(fName,lName,age,city,zipCode,dist,addr){
//     const address = {};
//     const user = Object.create(createUser.prototype);
//     user.address = address;
//     user.fName = fName;
//     user.lName = lName;
//     user.age = age;
//     user.address.city = city;
//     user.address.zipCode  = zipCode;
//     user.address.dist  = dist;
//     user.address.addr = addr;
//     return user;
// }


// createUser.prototype.fullName = function(){
//     return this.fName + " " + this.lName;
// }
// createUser.prototype.shortInfo = function(){
//     return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
// }
// createUser.prototype.addressInfo = function(){
//     return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
// }



// const user1 = createUser('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');


// console.log(createUser.prototype);

// console.log(user1);
// console.log(user1.fullName());
// console.log(user1.shortInfo());
// console.log(user1.addressInfo());



// ================================step 5 new keyword ================================
function CreateUser(fName,lName,age,city,zipCode,dist,addr){
    const address = {};
    this.address = address;
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.address.city = city;
    this.address.zipCode  = zipCode;
    this.address.dist  = dist;
    this.address.addr = addr;
}


CreateUser.prototype.fullName = function(){
    return this.fName + " " + this.lName;
}
CreateUser.prototype.shortInfo = function(){
    return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
}
CreateUser.prototype.addressInfo = function(){
    return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
}



const user1 = new CreateUser('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');
const user2 = new CreateUser('Kazi',"Jahin",25,'Faridpur','1553','Somewhere','Somevillage');


console.log(CreateUser.prototype);

console.log(user2);
console.log(user2.fullName());
console.log(user2.shortInfo());
console.log(user2.addressInfo());

