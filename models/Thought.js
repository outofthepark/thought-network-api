const { Schema, model } = require('mongoose');

//TODO make sure required values are required
const ThoughtSchema = new Schema({
    thoughtText: {
      type: String
    },
    userName: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    reactions: []
  });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;