const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('passwords')
})

module.exports = router