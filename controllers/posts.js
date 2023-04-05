const Post = require("../models/post");
const handleError = require("../service/handleError");
const handleSuccess = require("../service/handleSuccess");
const post = {
  async getPosts(req, res) {
    const allPosts = await Post.find();
    handleSuccess(res, allPosts);
  },
  async createPost(req, res) {
    try {
      const data = req.body;
      if (data.content) {
        const newPost = await Post.create({
          content: data.content,
          image: data.image,
          name: data.name,
          likes: data.likes,
        });

        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (error) {
      handleError(res, error);
    }
  },
  async updatePost(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;
      console.log("id:" + id);

      if (data.content) {
        const updatePost = await Post.findByIdAndUpdate(id, {
          content: data.content,
          image: data.image,
          name: data.name,
          likes: data.likes,
        });
        handleSuccess(res, updatePost);
      } else {
        handleError(res);
      }
    } catch (error) {
      handleError(res, error);
    }
  },
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      console.log(id);
      const deletePost = await Post.findByIdAndDelete(id);

      handleSuccess(res, deletePost);
    } catch (error) {
      handleError(res, error);
    }
  },
};

module.exports = post;
