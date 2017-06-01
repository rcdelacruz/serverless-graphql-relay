const env = {
  DATABASE_NAME: process.env.DATABASE_NAME || 'taladb',
  DATABASE_HOST: process.env.DATABASE_HOST || 'tala.cagdu4wrxisr.ap-southeast-1.rds.amazonaws.com',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'taladb',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'SwnytHqyu46wn3_r',
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;
