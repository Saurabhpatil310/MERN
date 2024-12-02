import mongoose from "mongoose";

const bookSecheme =mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model('Book',bookSecheme);

export default Book;