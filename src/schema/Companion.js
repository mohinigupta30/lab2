"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanionSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    character: {
        type: Schema.Types.String,
        required: true
    },
    doctors: [{
        type: Schema.Types.ObjectId, 
        ref: "Doctor"
    }],
    seasons: [Schema.Types.Number],
    alive: {
        type: Schema.Types.Boolean,
        required: true
    }
});

CompanionSchema.statics.create = function(obj) {
    // console.log(obj.doctors);
    const companion = new mongoose.model("Companion", CompanionSchema)();
    companion.alive = obj.alive;
    companion.character = obj.character;
    companion.doctors = obj.doctors;
    companion.name = obj.name;
    companion.seasons = obj.seasons;
    return companion;
}

module.exports = mongoose.model("Companion", CompanionSchema);
