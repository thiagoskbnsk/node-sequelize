module.exports = {
  dialect: 'postgres',
  host: 'host.docker.internal',
  username: 'postgres',
  password: 'postgres',
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true
  }
}