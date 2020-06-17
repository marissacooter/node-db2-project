module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./data/car-dealer.db3"
        },
        useNullDefault: true,
        migrations: {
            directory: "./data/migrations",
        },
        seeds:{
            directory: "./data/seeds",
        },
    },
}