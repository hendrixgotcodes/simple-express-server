const express = require('express')
const members = require("../../Members")
const router = express.Router()

//Get all members
router.get('/', (req, res)=>{
    res.json(members)
})

// Get single member
router.get('/:id',(req, res)=>{

    if(req.params.id > members.length || req.params.id <=0){
        res.sendStatus(400).send("Bad request")
        return
    }
    
    res.json(members[req.params.id-1])
})

module.exports = router