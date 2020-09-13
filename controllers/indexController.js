
const Question = require('../models/question');

module.exports.insertQuestion = async function(req,res){
    try{
        // console.log(req.body);
        req.body.tag = JSON.parse(req.body.tag);
        Question.create({
            question:req.body.question,
            topic:req.body.topic,
            tag:req.body.tag
        },function(err,question){
            if(question){
                return res.json(200,{
                    message:"Question Submitted",
                    question:question
                });
            }
            return res.json(500,{message:"Iternal server error", error:err});
        });
    }catch(e){
        console.log("error in inserting ");
        return res.json(500,{message:"Internal server error",error:e});
    }
    

}

module.exports.searchQuestion = async function(req,res){
    // console.log(req.body.search);
    try{
        let question = await Question.find({ tag: req.body.search});
        // console.log(question)
        if(question.length==0 ){

            //search based on topic
            let question2 = await Question.find({ topic: req.body.search});
            if(question2){
                return res.json(200,{
                    message:"successful, here is your data",
                    data:{
                        question:question2
                    }
                });
            }
            return res.json(200,{
                message:"Nothing found"
            });
        }
        return res.json(200,{
            message:"successful, here is your data",
            data:{
                question
            }
        });
    }catch(e){
        console.log("error in searching ");
        return res.json(500,{message:"Internal server error",error:e});
    }
    

}