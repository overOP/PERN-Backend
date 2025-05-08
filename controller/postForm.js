
const prisma = require("../config/Prisma");
const postcreate = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.files;
    const userid = req.user.id;
    const images = [];
    image.map((value, index) => {
      const path = value.path;
      images.push(path);
    });

    const savePost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        image: images,
        userId: userid,
      },
    });
    return res.status(201).json({
      message: "Post Created Successfully",
      data: savePost,
    });
  } catch (error) {
    console.log(error);
  }
};

const postGet = async(req,res)=>{
  const getPost = await prisma.post.findMany();
  return res.status(200).json({
    message:"Post Fetched",
    data:getPost
  })
}


module.exports = {
  postcreate,
  postGet
};











// const prisma = require("../config/Prisma");

// const createPost = async (req, res) => {
//   const { title, content } = req.body;
//   const files = req.files;
//   const userId = req.user.id;

//   try {
//     const imagePaths = files.map(file => file.path);

//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         images: {
//           create: imagePaths.map(path => ({ url: path })),
//         },
//         userId,
//       },
//       include: {
//         images: true,
//       },
//     });

//     res.status(201).json({ message: "Post created", data: post });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating post", error });
//   }
// };

// const updatePost = async (req, res) => {
//   const { id } = req.params;
//   const { title, content } = req.body;

//   try {
//     const post = await prisma.post.update({
//       where: { id: Number(id) },
//       data: { title, content },
//     });
//     res.status(200).json({ message: "Post updated", data: post });
//   } catch (error) {
//     res.status(404).json({ message: "Post not found", error });
//   }
// };

// const deletePost = async (req, res) => {
//   const { id } = req.params;

//   try {
//     await prisma.post.delete({ where: { id: Number(id) } });
//     res.status(200).json({ message: "Post deleted" });
//   } catch (error) {
//     res.status(404).json({ message: "Post not found", error });
//   }
// };

// module.exports = {
//   createPost,
//   updatePost,
//   deletePost,
// };
