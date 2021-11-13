var db=require('../config/connection')
var collection=require('../config/collection')
var objId=require('mongodb').ObjectId

module.exports={
     // graphicImages
    addImages:(images,callback)=>{
        db.get().collection(collection.IMAGES_COLLECTION).insertOne(images).then((data)=>{
            callback(data.insertedId)
        })
    },
    getAllImages:()=>{
        return new Promise(async(resolve,reject)=>{
            let images=await db.get().collection(collection.IMAGES_COLLECTION).find().toArray()
            resolve(images)
        })
    },
    
    deletImages:(imgId)=>{
        return new Promise((resolve,reject)=>{
          db.get().collection(collection.IMAGES_COLLECTION).deleteOne({_id:objId(imgId)}).then((response)=>{
              resolve(response)
          })
        })
          
      },


      getImagesDetails:(imgId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.IMAGES_COLLECTION).findOne({_id:objId(imgId)}).then((images)=>{
                resolve(images)
            })
        })
    },
    updateImages:(imgId,imgDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.IMAGES_COLLECTION).updateOne({_id:objId(imgId)},{
                $set:{
                    titel:imgDetails.titel,
                   
                }
            }).then((response)=>{
                resolve()
            })
        })
        
    },
    // \graphicImages


    // staticImages
    addStaticImages:(staticImages,callback)=>{
        db.get().collection(collection.STAIC_IMG_COLLECTION).insertOne(staticImages).then((data)=>{
            callback(data.insertedId)
        })
    },

    getAllStaticImages:()=>{
        return new Promise(async(resolve,reject)=>{
            let staticImages=await db.get().collection(collection.STAIC_IMG_COLLECTION).find().toArray()
            resolve(staticImages)
        })
    },

    deletStaticImages:(staticImgId)=>{
        return new Promise((resolve,reject)=>{
          db.get().collection(collection.STAIC_IMG_COLLECTION).deleteOne({_id:objId(staticImgId)}).then((response)=>{
              resolve(response)
          })
        })
          
      },

      getStaticImagesDetails:(staticImgId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.STAIC_IMG_COLLECTION).findOne({_id:objId(staticImgId)}).then((staticImages)=>{
                resolve(staticImages)
            })
        })
    },

    updateStaticImages:(staticImgId,staticImgDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.STAIC_IMG_COLLECTION).updateOne({_id:objId(staticImgId)},{
                $set:{
                    titel:staticImgDetails.titel,
                   
                }
            }).then((response)=>{
                resolve()
            })
        })
        
    },


    // dainamicWorks

    addDainamicImages:(dainamicImages,callback)=>{
        db.get().collection(collection.DAINAMIC_IMG_COLLECTION).insertOne(dainamicImages).then((data)=>{
            callback(data.insertedId)
        })
    },
    getAllDainamicImages:()=>{
        return new Promise(async(resolve,reject)=>{
            let dainamicImages=await db.get().collection(collection.DAINAMIC_IMG_COLLECTION).find().toArray()
            resolve(dainamicImages)
        })
    },
    deletdainamicImages:(dainamicImgId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.DAINAMIC_IMG_COLLECTION).deleteOne({_id:objId(dainamicImgId)}).then((response)=>{
                resolve(response)
            })
        })
    }
}