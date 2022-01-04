const imagesHelpers=require('../helpers/images-helpers')
const adminHelpers=require('../helpers/admin-helpers')
var express = require('express');
var router = express.Router();
const verifyLogin=(req,res,next)=>{
  if(req.session.admin){
    next()
  }else{
    res.redirect('admin/admin-login')
  }
}
/* GET home page. */
router.get('/',function(req, res, next) {
  let Admin=req.session.admin
  console.log('Admin',Admin);
  imagesHelpers.getAllImages().then((images)=>{
    imagesHelpers.getAllStaticImages().then((staticImages)=>{
      imagesHelpers.getAllDainamicImages().then((dainamicImages)=>{

        res.render('admin/view-product',{admin:true,Admin,images,staticImages,dainamicImages});
      })
      
    })
    
  })
  if(verifyLogin){
    console.log('login page opend')
  }else{
    console.log('login page closed');
  }
  
});

// graphicImages
router.get('/add-graphic-works',function(req,res){
  res.render('admin/add-graphic-works')
})

router.post('/add-graphic-works',function(req,res){
  
  imagesHelpers.addImages(req.body, (id)=>{
    let image=req.files.image
    image.mv('./public/works-images/'+id+'.jpg', (err,done)=>{
      if(!err){
        res.render('admin/add-graphic-works')
      }else{
        console.log(err);
      }
    })
   
  })

})

router.get('/delet-images/:id',function(req,res){
  let imgId=req.params.id
  console.log(imgId)
  imagesHelpers.deletImages(imgId).then((response)=>{
    res.redirect('/admin')
  })
})

router.get("/edit-images/:id",async(req,res)=>{
  let images=await imagesHelpers.getImagesDetails(req.params.id)
  res.render('admin/edit-images',{images})
})

router.post('/edit-images/:id',(req,res)=>{
  imagesHelpers.updateImages(req.params.id,req.body).then(()=>{
    let id=req.params.id
    res.redirect('/admin')
    if(req.files.image){
      let image=req.files.image
      image.mv('./public/works-images/'+id+'.jpg')
    }
  })
})

// staticImages
router.get('/add-static-web-works',function(req,res){
  res.render('admin/add-static-web-works')
})

router.post('/add-static-web-works',function(req,res){
  
  imagesHelpers.addStaticImages(req.body, (id)=>{
    let image=req.files.image
    image.mv('./public/works-images/'+id+'.jpg', (err,done)=>{
      if(!err){
        res.render('admin/add-static-web-works')
      }else{
        console.log(err);
      }
    })
   
  })

})

router.get('/delet-static-images/:id',function(req,res){
  let staticImgId=req.params.id
  console.log(staticImgId)
  imagesHelpers.deletStaticImages(staticImgId).then((response)=>{
    res.redirect('/admin')
  })
})
router.get("/edit-static-images/:id",async(req,res)=>{
  let staticImages=await imagesHelpers.getStaticImagesDetails(req.params.id)
  res.render('admin/edit-static-images',{staticImages})
})

router.post('/edit-static-images/:id',(req,res)=>{
  imagesHelpers.updateStaticImages(req.params.id,req.body).then(()=>{
    let id=req.params.id
    res.redirect('/admin')
    if(req.files.image){
      let image=req.files.image
      image.mv('./public/works-images/'+id+'.jpg')
    }
  })
})

// dainamicworks

router.get('/add-dainamic-web-works',function(req,res){
  res.render('admin/add-dainamic-web-works')
})

router.post('/add-dainamic-web-works',function(req,res){
  
  imagesHelpers.addDainamicImages(req.body, (id)=>{
    let image=req.files.image
    image.mv('./public/works-images/'+id+'.jpg', (err,done)=>{
      if(!err){
        res.render('admin/add-dainamic-web-works')
      }else{
        console.log(err);
      }
    })
   
  })

})

router.get('/delet-dainamic-images/:id',function(req,res){
  let dainamicImgId=req.params.id
  console.log(dainamicImgId)
  imagesHelpers.deletdainamicImages(dainamicImgId).then((response)=>{
    res.redirect('/admin')
  })
})
router.get('/admin-signup',(req,res)=>{
  res.render("admin/admin-signup")
})
router.post('/admin-signup',(req,res)=>{
  adminHelpers.doSignup(req.body).then((response)=>{
    console.log(response)
  })
})


router.get('/admin-login',function(req,res){
  res.render('admin/admin-login')
})
router.post('/admin-login',(req,res)=>{
  adminHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.admin=response.admin
      res.redirect('/admin')
    }else{
      // req.session.logginErr=true
      res.redirect('/admin/admin-login')
    }
  })
})
module.exports = router;
