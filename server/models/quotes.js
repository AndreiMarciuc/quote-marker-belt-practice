var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var QuoteSchema=new Schema({
    text:String,
    madeBy:String,
    likes:Number
});

mongoose.model('Quote',QuoteSchema);