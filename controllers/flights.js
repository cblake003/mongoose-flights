const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''});
}


async function create(req, res) {
    if (!req.body.departs) {
        delete req.body.departs;
    }
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    }
    catch (err) {
        console.log(err)
        res.render('/flights/new')
    }
}

async function show(req, res) {
    try {
        const flight = await Flight.findById(req.params.id)
        const tickets = await Ticket.find({flight: flight._id})
        res.render('flights/show', { title: 'Flight Detail', flight, tickets});
    }
    catch (err) {
        console.log(err)
        res.render('flights/index', { errorMsg: err.message });
    }
}
