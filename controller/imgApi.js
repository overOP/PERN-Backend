const prisma = require('../config/Prisma');

const imgApi = async (req, res) => {
    try {
        const getAllpost = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                images: {
                    select: {
                        url: true,
                    }
                },
            }
        })
        if (!getAllpost || getAllpost.length === 0) {
            return res.status(400).json({
                message: "No posts found"
            })
        }
        return res.status(200).json({
            message: "Posts found",
            data: getAllpost
        })
    }
    catch (error) {
        console.error("Error in imgApi:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
     }
}

module.exports = imgApi
