const express=require('express');

const router=express.Router();

const gameController=require('../controllers/gameControllers');

router.post('/',gameController.createGame);
router.get('/',getAllgames);
router.get('/:id',getGameById);
router.put('/:id',gameController.updateGame);
router.delete('/:id',gameController.deleteGame);


module.exports=router;
