
// exports.seed = async function(knex) {
//   // Deletes ALL existing entries
//   await knex('cars').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('cars').insert([
//         {vin: '12313', make: 'exampleOne', model: 'modelOne', mileage: '1000'},
//         {vin: '35345', make: 'exampleTwo', model: 'modelTwo', mileage: '2000'},
//         {vin: '34523', make: 'exampleThree', model: 'modelThree', mileage: '3000'},
//         {vin: '34534', make: 'exampleFour', model: 'modelFour', mileage: '4000'},
//         {vin: '12343', make: 'exampleFive', model: 'modelFive', mileage: '5000'},
//         {vin: '23434', make: 'exampleSix', model: 'modelSix', mileage: '6000'}
//       ]);
//     });
// };

exports.seed = async function(knex) {
  await knex("cars").truncate()
  await knex("cars").insert([
        {vin: '12313', make: 'exampleOne', model: 'modelOne', mileage: '1000'},
        {vin: '35345', make: 'exampleTwo', model: 'modelTwo', mileage: '2000'},
        {vin: '34523', make: 'exampleThree', model: 'modelThree', mileage: '3000'},
        {vin: '34534', make: 'exampleFour', model: 'modelFour', mileage: '4000'},
        {vin: '12343', make: 'exampleFive', model: 'modelFive', mileage: '5000'},
        {vin: '23434', make: 'exampleSix', model: 'modelSix', mileage: '6000'}
  ])
}
