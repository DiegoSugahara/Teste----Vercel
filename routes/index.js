const express = require('express');
const router = express.Router();

//listar
router.get('/', async(req, res) => {
    res.render("base", {
        title: "Home",
        view: "index"
    });
});

module.exports = router;
