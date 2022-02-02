module.exports = {
    "type": "mysql",
    "host": process.env.MYSQL_HOST || 'mysql',
    "port": 3306,
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "migrations": ["dist/db/migrations/**/*{.ts,.js}"],
    "cli": {
        "migrationsDir": "./db/migrations"
    },
    "synchronize": true
};
