const myCity = {
  city:'New York'
}
myCity.popular = true;
console.log(myCity);
myCity.country = 'USA'
console.log(myCity);
// Добавление новых свойств в обьектах

// Удаление свойств
const myName = {
  lastName: 'Pryshchyk',
  firstName: 'Maksim',
  country: 'Poland'
}
delete myName.lastName;
console.log(myName);