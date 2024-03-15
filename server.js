import express from 'express';
import mongoose,{Schema} from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const port = 3000;
app.use(express.json());
const connect = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/banhang');
        console.log(`Kết nối DB thành công`);
    } catch (error){
        console.log(`Không thể kết nối DB. Lỗi ${error}`)
    }
}

// console.log(dotenv.config().parsed.DB_URL);
const productSchema = new Schema({
    name:String,
    image:String,
    price:Number,
});

const productmodel = mongoose.model('Product', productSchema);

app.post('/products',(req, res)=>{
    const product = new productmodel(req.body);
    product.save();
    res.send(product);
})

app.listen(port,async ()=>{
    await connect();
    console.log(`Endpoint http://localhost:${port}`)
})

// Tạo svit thêm xóa sp
