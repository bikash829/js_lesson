console.log("Hello Object");

const user ={
    fname : "Bikash",
    lName : "Chowdhury",
    age : 25,
    address : {
        city : "Dhaka",
        zipCode : "1553",
        dist: "Munshiganj",
        addr: "Charigaon",
    },
    fullName : function(){
        return this.fname + " " + this.lName;
    },
    shortInfo: function(){
        return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
    },
    addressInfo(){
        return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
    }
}


console.log(user);

console.log(user.fullName());
console.log(user.shortInfo());
console.log(user.addressInfo());