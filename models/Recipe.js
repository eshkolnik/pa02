'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var recipeSchema = Schema( {
  userId: ObjectId,
  name: String,
  ingredients:String,
  instructions:String,
  completed: Boolean,
  createdAt: Date,
} );

module.exports = mongoose.model( 'Recipe', recipeSchema );
