/*
input: sequenced array of ticket-objects that contain a "to" and "from" keys and values
output: a sorted array of the ticket-objs that match the "to" and "from" values from start to finish of the journey
constaints:
edge:
all tickets are part of the trip, and none are missing;
start should be the only from that has no pair

 [
        {from: 'Los Angeles', to: 'San Francisco'},
        {from: 'San Francisco', to: 'Las Vegas'},
        {from: 'Las Vegas', to: 'Austin'}
  ]
*/

const { discover_the_train_tickets } = require('./helpers')

function sort_tickets(the_evidence) {
  let the_goods = [];
  let counter = {};
  let start;
  // loop through the ticket stack
  // Finding Starting point
  for (let i = 0; i < the_evidence.length; i++) {
    if (!counter[the_evidence[i].from]) {
      counter[the_evidence[i].from] = 1;
    }
    if (!counter[the_evidence[i].to]) {
      counter[the_evidence[i].to] = 1;
    }
    if (counter[the_evidence[i].to]) {
      counter[the_evidence[i].to] += 1;
    }
  }
  // find city with no matching pair, aka if a key has 1 for value, must be starting city
  let city = Object.keys(counter);
  for (let j = 0; j < city.length; j++) {
    if (counter[city[j]] === 1) {
      start = city[j];
    }
  }
  // find whole ticket info from start city
  for (let k = 0; k < the_evidence.length; k++) {
    if (the_evidence[k].from === start) {
      the_goods.push(the_evidence[k])
    }
  }
  // use first ticket as starting point to find rest of the journey
  for (let l = 0; l < the_goods.length; l++) {
    let currentTick = the_goods[l];
    for (let m = 0; m < the_evidence.length; m++) {
      if (currentTick.to === the_evidence[m].from) {
        currentTick = the_evidence[m];
        the_goods.push(currentTick);
        break;
      }
    }
  }
  return the_goods
}


/* 
  This variable determines the number of hops in the trip, 
  or tickets in the stack.
*/
const ticket_count = 50;

/* 
  This is the controling function that calls the sort function.
  By default it logs the stack return from sort function to the console.
  Make any changes you feel necessary.
*/
function crack_the_case() {
  const the_evidence = discover_the_train_tickets(ticket_count)
  const the_goods = sort_tickets(the_evidence)
  console.log(the_goods)
}

crack_the_case();

module.exports = sort_tickets;
