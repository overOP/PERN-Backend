const { PrismaClient } = require('../generated/prisma-js');
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));

module.exports = prisma;
