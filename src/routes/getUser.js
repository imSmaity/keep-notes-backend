const User = require('../Models/UserModel')

const router = require('express').Router()


router.post('/', async (req, res) => {

    try {
        const user = await User.find()
        // console.log(user[0])
        res.send(user[0])
    }
    catch {
        res.status(400).send({ success: false })
    }
})

module.exports = router;