let express = require('express');
const  router = express.Router();
module.exports = router;

const indexController = require("../controllers/indexController");

//insert a question
router.post('/insert',indexController.insertQuestion);

//search 
router.get("/search", indexController.searchQuestion);
