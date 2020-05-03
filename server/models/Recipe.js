const mongoose = require('mongoose');
const slugify = require('slugify');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'Please provide a image Cover'],
  },
  procedures: {
    type: String,
    required: [true, 'Please provide a procedures'],
  },
  youtubeUrl: {
    type: String,
    required: [true, 'Please provide a youtube link or video link'],
  },
  slug: String,
});

recipeSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
