const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

router.get('.flights/:id/tickets/new', ticketsCtrl.new);
router.post('/:id/tickets', ticketsCtrl.create);
router.post('/flights/:id')

module.exports = router;