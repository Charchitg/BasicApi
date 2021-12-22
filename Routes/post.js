const express = require('express');

const Delete = require('../Controller/Delete');
const Update = require('../Controller/Update');
const Create = require('../Controller/Create');
const Get = require('../Controller/Get');


const router = express.Router();

router.get('/details' , Get);

router.post('/create' , Create);

router.put('/update' , Update);

router.delete('/delete' , Delete);


module.exports = router;