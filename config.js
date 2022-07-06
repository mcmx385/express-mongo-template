export const NodeEnv = process.env.NODE_ENV || 'production'
export const MongoURL = 'mongodb://127.0.0.1:27017'
export const MongoDBName = 'expressdb'
export const MongooseSetting = { useUnifiedTopology: false, useNewUrlParser: true, dbName: MongoDBName }