const mongoose = require('mongoose');

const UserPersonaSchema = new mongoose.Schema({
  model: { type: String, required: true },
  age: { type: String, required: true },
  skinColor: { type: String, required: true },
  personalityTrait: { type: String, required: true },
  voiceType: { type: String, required: true },
  description: { type: String, required: true }
});

const UserPersona = mongoose.model('UserPersona', UserPersonaSchema);
module.exports = UserPersona;
