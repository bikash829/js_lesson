console.log("Hello Class");

class Address{
    constructor(city,zipCode,dist,addr){
      this.address = {};
      this.address.city = city;
      this.address.zipCode = zipCode;
      this.address.dist = dist;
      this.address.addr = addr;
    }

    addressInfo() {
      return `${this.address.addr} \nZip Code : ${this.address.zipCode} \nDistrict : ${this.address.dist} \nCity : ${this.address.city}`;
    }

}

class User extends Address{
  constructor(fName,lName,age,city,zipCode,dist,addr){
    super(city,zipCode,dist,addr);
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }

  fullName(){
    return this.fName + " " + this.lName;
  }
  shortInfo(){
    return `This is ${this.fullName()} who is ${this.age} years old from ${this.address.city}.`;
  }
  // addressInfo = this.addressInfo;


}

const user1 = new User('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');
const user2 = new User('Kazi',"Jahin",28,'Faridpur','5553','Faridpur','Somewhere');


console.log(user1.addressInfo());
console.log(user1.fullName());
console.log(user1.shortInfo());
console.log(user1);

console.log(user2.addressInfo());
console.log(user2.fullName());
console.log(user2.shortInfo());
console.log(user2);