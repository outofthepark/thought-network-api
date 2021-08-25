const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//TODO Set field properties like trimmed, required, and unique
const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  }, 
  thoughts: [ { type: Schema.Types.ObjectId, ref: 'Thought' } ], //Array of id values referencing thought model
  friends:  [ { type: Schema.Types.ObjectId, ref: 'User'    } ], //Array of id values referencing the user model
},
{
  toJSON: { virtuals: true },
  id: false
});

// get total count of thoughts
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});

// get total count of friends
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;