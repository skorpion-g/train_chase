const sort_tickets = require('../index');

test('Should sort the input array of tickets by location', () => {
    const tickets = [
        {from: 'Las Vegas', to: 'Austin'},
        {from: 'Los Angeles', to: 'San Francisco'},
        {from: 'San Francisco', to: 'Las Vegas'}
    ]
    const orderedTickets = [
        {from: 'Los Angeles', to: 'San Francisco'},
        {from: 'San Francisco', to: 'Las Vegas'},
        {from: 'Las Vegas', to: 'Austin'}
    ]
    expect(sort_tickets(tickets)).toEqual(orderedTickets)
})
