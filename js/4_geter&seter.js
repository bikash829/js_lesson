console.log("Hello Geter & Seter.");

class Address{
    constructor(city,zipCode,dist,addr){
      this.address = {};
      this.address.city = city;
      this.address.zipCode = zipCode;
      this.address.dist = dist;
      this.address.addr = addr;
    }

    set city(p){
      this.address.city  = p;
    }

    set zipCode(p){
      this.address.zipCode  = p;
    }
    set dist(p){
      this.address.dist  = p;
    }
    set addr(p){
      this.address.addr  = p;
    }



    get addressInfo() {
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

  set firstName(arg){
    this.fName = arg;
  }
  set lastName(arg){
    this.lName = arg;
  }

  set _age(arg){
    this.age = arg;
  }

  get fullName(){
    return this.fName + " " + this.lName;
  }
  get shortInfo(){
    return `This is ${this.fullName} who is ${this.age} years old from ${this.address.city}.`;
  }
  // addressInfo = this.addressInfo;


}

const user1 = new User('Bikash',"Chowdhury",25,'Dhaka','1553','Munshiganj','charigaon');
const user2 = new User('Kazi',"Jahin",28,'Faridpur','5553','Faridpur','Somewhere');


user1.city = "New York";
user1._age = 35;



console.log(user1.addressInfo);
console.log(user1.fullName);
console.log(user1.shortInfo);
console.log(user1);

console.log(user2.addressInfo);
console.log(user2.fullName);
console.log(user2.shortInfo);
console.log(user2);