const Recipe = require('../models/Recipe');

module.exports = {
  getAllRecipies: async (req, res) => {
    try {
      const recipies = await Recipe.find({});
      if (recipies.length <= 0) {
        return res.status(400).json({
          error: 'No Recipies Yet!',
        });
      }
      res.status(200).json({
        data: {
          recipe: recipies,
        },
      });
    } catch (error) {
      res.status(404).json({
        error: 'Something went wrong!',
      });
    }
  },
  getRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        res.status(400).json({
          message: error,
          error: 'No Recipe Found',
        });
      }

      res.status(200).json({
        data: {
          recipe,
        },
      });
    } catch (error) {
      res.status(404).json({
        error: 'Something went wrong!',
      });
    }
  },
  createRecipe: async (req, res) => {
    try {
      const newRecipe = await Recipe.create(req.body);
      res.status(200).json({
        data: {
          recipe: newRecipe,
        },
      });
    } catch (error) {
      res.status(400).json({
        message: error,
        error: 'Invalid input recipe',
      });
    }
  },
  updateRecipe: async (req, res) => {
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!updatedRecipe) {
        return res.status(400).json({
          message: error,
          error: 'Invalid input recipe',
        });
      }

      res.status(200).json({
        data: {
          recipe: updatedRecipe,
        },
      });
    } catch (error) {
      res.status(404).json({
        error: 'Something went wrong!',
      });
    }
  },
  deleteRecipe: async (req, res) => {
    console.log(req.params.id);
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(400).json({
        message: error,
        error: 'Invalid input recipe',
      });
    }

    res.status(200).json({
      data: 'Recipe Deleted',
    });
  },
};
