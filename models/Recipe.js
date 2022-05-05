'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

var recipeSchema = Schema( {
    name: String,
    ingredients: Mixed,
    steps: Mixed,
    timers: Mixed,
    imageURL: String,
    originalURL: String,
} );

module.exports = mongoose.model( 'Recipe', recipeSchema );
