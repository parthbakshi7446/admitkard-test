const mongoose = require('mongoose');

const quesSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    topic:{
        type: String,
        required:true
    },
    tag:[
        {
            type: String,
        }
    ]
},{
    timestamps:true
});

const Question = mongoose.model('Question',quesSchema);

module.exports = Question;
