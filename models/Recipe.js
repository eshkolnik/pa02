'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var courseSchema = Schema( {
    name: String,
    ingredients: Mixed,
    steps: Mixed,
    timers: Mixed,
    imageURL: String,
    originalURL: String,
} );

module.exports = mongoose.model( 'Recipe', recipeSchema );
