module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 33061),
      database: env('DATABASE_NAME', 'db_cine_centroamericano'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Develop@111021_gg'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
