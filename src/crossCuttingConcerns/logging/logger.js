export class BaseLogger{
    log(data){
        console.log("default logger : " +  data);
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        //içi dolu olduğu için base class daki log functionu eziyoruz.
        console.log("logged to elastic "+ data);
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("logged to mongo "+ data);
    }
}