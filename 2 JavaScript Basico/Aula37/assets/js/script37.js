let fruits = ['Maça', 'Uva', 'Laranja', 'Banana' ]

fruits.sort();
fruits.reverse();

console.log(fruits);


let cars = [
    {brand: 'Fiat', year:2022},
    {brand: 'Chevrolet', year:2021},
    {brand: 'Ford', year:2019},
    {brand: 'Peugeot', year:2020}
]

cars.sort((a,b) => a.year - b.year);
cars.reverse();
console.log(cars)