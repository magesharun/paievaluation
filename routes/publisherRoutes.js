const express=require('express');

const router=express.Router();

const gameController=require('../controllers/publisherControllers');

router.post('/',publisherControllers.createPublisher);
router.get('/',getAllPublisher);
router.get('/:id',getPublisherById);
router.put('/:id',publisherControllers.updatePublisher);
router.delete('/:id',publisherControllers.deletePublisher);


module.exports=router;
