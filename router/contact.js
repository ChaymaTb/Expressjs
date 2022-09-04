var express = require('express')
var router = express.Router()

router.get("/contact",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if (hours >8 && hours <12) {
        res.render('open');

    }
    else 
    {
        res.render('closed');

    }
})

module.exports = router;