
exports.up = function(knex) {
  return knex.schema.createTable('new_cars', tbl => {

      tbl.increments("id");

      tbl.string("vin").notNullable();

      tbl.string("make").notNullable();
      
      tbl.string("model").notNullable();

      tbl.integer("mileage").notNullable();

      tbl.string("transmission_type").defaultTo("None");

      tbl.string("trasmission_status").defaultTo("None");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('new_cars');
};
