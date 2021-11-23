import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{
    constructor(loggerService){
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("wrong user type",user))
                    break;
            }
        }
    }

    //yum
    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName city age".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`validation problem on ${field} is required`,
                user))
            }
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors= true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }

        return hasErrors
    }
    checkEmployeeValidityForErrors(user){
        let requiredFields = "id firstName lastName city age salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`validation problem on ${field} is required`,
                user))
            }
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors= true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`,user))
        }
        return hasErrors
    }

    add(user){
        switch (user.type) {
            case "customer":
                this.customers.push(user)
                break;
            case "employee":
                this.employees.push(user)
                break;
            default:
                this.errors.push(
                    new DataError("this user cant added.Wrong user Type",user))
                break;
        }
        this.loggerService.log(user)
    }
    
    list(){
      //  return this.users
    }
    
    getById(id){
       // return this.users.find(u => u.id === id)
    }
}