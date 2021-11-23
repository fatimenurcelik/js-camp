import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import { users } from "../data/users.js";
import Customer from "../models/customer.js";
import user from "../models/user.js";
import UserService from "../services/userService.js"

console.log("comp yuklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)


let user1 = new user(1, "Fatime Nur", "Celik", "NewYork");
let user2 = new user(2, "Baran ", "Gökçekli", "Muğla");

userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(2))

let customer = { id:1, firstName:"fatimeNur"}

//prototyping
customer.lastName="celik"
//console.log(customer.lastName)
console.log("**************************")
userService.load()

let customerToAdd = new Customer(1,"Seda", "Yılmaz","ankara","ghvhghbgg")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log("++++++++++");
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);


