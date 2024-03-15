import express from "express";
import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage("./scratch");

const app = express();
const port = 4000;
app.use(express.json());
let products = [
    {
        id: 1,
        title: "An apple mobile which is nothing like apple",
        duration: "12:05",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        },
        {
        id: 2,
        title: "Samsung Universe 9",
        duration: "10:25",
        thumbnail:"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg&quot",
        },
        {
        id: 3,
        title: "Samsung Galaxy Book",
        duration: "06:51",
        thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        }
];

//C1 c2:
app.get('/videos' ,(req,res)=>{
    const value= req.query.value
    if(value){
        const product = products.filter((product)=>{
            return product.title.includes(value)
            })
            res.send(product)
    }else res.json(products)
    
})

//Cau 3:

//Cau 4:
app.post('/videos/posts' , (req,res)=>{
    products.push(req.body);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Listen on port http://localhost:${port}`);
  });