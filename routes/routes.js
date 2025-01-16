
const express = require('express');
const router = express.Router();

const {index,menu,separacion,sopa,hiato,tutorialSeparacion,tutorialSopa,tutorialHiato} = require('../controllers/controllers.js');

router.get('/',index);
router.get('/menu',menu);

// endPoinst Juegos

router.get('/juegoSeparacion',separacion);
router.get('/juegoSopa',sopa);
router.get('/juegoHiato',hiato);

//endPoints tutorial
router.get('/tutorialSeparacion',tutorialSeparacion);
router.get('/tutorialSopa',tutorialSopa);
router.get('/tutorialHiato',tutorialHiato);
module.exports = router;