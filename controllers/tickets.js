const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create,
    // show
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('tickets/new', {flight} );
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id
        await Ticket.create(req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.redirect(`/flights/${req.params.id}/tickets/new`)
    }
}

// async function show(req, res) {
//     try {
//         const ticket = await Ticket.findById(req.params.id)
//         const tickets = await Ticket.find({flight: flight._id})
//         res.render('flights/show', { title: 'Flight Detail', flight, tickets});
//     }
//     catch (err) {
//         console.log(err)
//         res.render('flights/index', { errorMsg: err.message });
//     }
// }
