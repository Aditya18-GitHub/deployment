const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  
  },
  lastName: {
    type: String,
    required: true,
  
  },
  email: {
    type: String,
    required: true,
    unique: true,
   
    lowercase: true,
    validate: {
      validator: function(v) {
        // Simple email regex for validation
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length of 6
  },
  token: {
    type: String,
    
  },
});

// Create the model from the schema
exports.User =   mongoose.model('User', userSchema);


