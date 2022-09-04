var express = require('express')
var router = express.Router()

router.get("/services",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if (hours >8 && hours <20) {
        res.render('open');

    }
    else 
    {
        res.render('closed');

    }
})
module.exports = router;