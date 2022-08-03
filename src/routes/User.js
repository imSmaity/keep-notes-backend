const User = require('../Models/UserModel')

const router = require('express').Router()


router.put('/', async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.body._id, req.body, { new: true })
        res.send(user)
    }
    catch {
        res.status(400).send({ success: false })
    }
})

module.exports = router;