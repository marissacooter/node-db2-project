
exports.up = async function(knex) {
  await knex.schema.createTable('cars', (tbl) => {
    tbl.increments("id"),
    tbl.text("vin").notNull(),
    tbl.text("make").notNull(),
    tbl.text("model").notNull(),
    tbl.real("mileage").notnull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
