const knex = require("knex")
const confid = require("../knexfile")

module.exports = knex(config.development)