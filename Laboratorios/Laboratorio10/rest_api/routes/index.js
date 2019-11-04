var express = require('express');
var router = express.Router();
var register = require("../models/register");

/* GET home page. */
router.get('/register', function(req, res, next) {
  console.log(req);
  register.find((err, register)=>{
    if(err){
      return Response.status(500).json({msj: "Error interno del sistema"});
    }
    if(register){
      Response.status(200).json(register);
    }
    else{
      Response.status(404).json({msj: "No hay registro"});
    }
  });
});

module.exports = router;
