const express = require('express')
const uuid = require('uuid')
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

//Create members
router.post('/', (req, res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email()){
        return res.status(400).json({
            message: "Please include a name and email"
        })
    }
    
    members.push(newMember)
    res.status(200).json(members)
})

//Update member
router.put('/:id', (req, res)=>{

    if(req.params.id > members.length || req.params.id <=0){
        res.sendStatus(400).send("Bad request")
        return
    }


    const userExist = members.some((member)=>(member.id === parseInt(req.params.id)))

    if(userExist){
        const updateMember = req.body
        members[req.params.id-1].name = updateMember.name ? updateMember.name : updateMember.email
        members[req.params.id-1].email = updateMember.email ? updateMember.email : updateMember.name
        res.status(200).json(members[req.params.id-1])
    }else{
        res.status(400).json({
            message: "Bad request"
        })
    }
    
    
})

//Delete member
router.delete('/:id', (req, res)=>{

    if(req.params.id > members.length || req.params.id <=0){
        res.sendStatus(400).send("Bad request")
        return
    }

    const userExist = members.some((member)=>(member.id === parseInt(req.params.id)))

    if(userExist){
        members.splice(req.params.id-1, 1)
        res.status(200).json({
            message: `user ${req.params.id} deleted successfully`
        })
    }


    
})

module.exports = router