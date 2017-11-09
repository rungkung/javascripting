function isLessthan(res,number){
  return number['cost'] < res;
}
var restaurants = [
  {
    name: 'Audrey',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Company',
    place: 'central',
    cost: 1500
  },
  {
    name: 'Jone Salad',
    place: 'esplanade',
    cost: 500
  },
  {
    name: 'Swesens',
    place: 'esplanade',
    cost: 1000
  },
  {
    name: 'Pizza Hut',
    place: 'central',
    cost: 1500
  }
];

// Output - Array of objects for which the cost is less than 1500
var objectArray = restaurants.filter(isLessthan.bind(this,1500));
console.log(objectArray);