const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = require('../config/Prisma');

const imgApi = async (req, res) => {
    try {
        const getAllUsers = await prisma.user.findMany({
            select: {
                file: true,
                title: true,
                description: true,
            }
        })
        if (!getAllUsers) {
            return res.status(400).json({
                message: "No users found"
            })
        }
        return res.status(200).json({
            message: "Users found",
            data: getAllUsers
        })
    }
    catch (error) {
        console.error("Error in dataApi:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
     }
}

module.exports = imgApi