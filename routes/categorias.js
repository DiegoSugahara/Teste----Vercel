const express = require('express');
const router = express.Router();

//listar
router.get('/categorias', async(req, res) => {
    res.render("base", {
        title: "Categorias",
        view: "categorias/show"
    });
});

//add
router.get('/add', async(req, res) => {
    res.render("base", {
        title: "Adicionar Categorias",
        view: "categorias/add"
    });
});

//edit
router.get('/edit', async(req, res) => {
    res.render("base", {
        title: "Editar Categorias",
        view: "categorias/edit"
    });
});

module.exports = router;