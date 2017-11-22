module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME || 'jailmail',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME_TEST,
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_NAME
  }

};
