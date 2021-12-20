var db=require('../config/connection')
var collection=require('../config/collection')
const bcrypt=require('bcrypt')
const { Db } = require('mongodb')
module.exports={
    doSignup:(adminData)=>{
        return new Promise(async(resolve,reject)=>{
            adminData.password=await bcrypt.hash(adminData.password,10)
            console.log(adminData);
            db.get().collection(collection.ADMIN_COLLECTION).insertOne(adminData).then((data)=>{
                resolve(data.insertedId)
            })
        })
    },
    doLogin:(adminData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
              let admin=await db.get().collection(collection.ADMIN_COLLECTION).findOne({Email:adminData.Email})
              if(admin){
                  bcrypt.compare(adminData.password,admin.password).then((status)=>{
                      if(status){
                          console.log('login-success')
                          response.admin=admin
                          response.status=true
                          resolve(response)
                      }else{
                          console.log('login faild');
                          resolve({status:false})
                      }
                  })
              }else{
                  console.log('incorrect admin id');
                  resolve({status:false})
              }
        })
    }
}