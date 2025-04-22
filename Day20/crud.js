const express=require('express');
const app=express();

app.use(express.json());


let data = []; 

//create oper
app.post('/products',(req,res) => {
    const {name,price}=req.body;
    data.push({name,price });
    res.send("Product added.");
});

//Read oper
app.get('/products',(req,res)=>{
    res.send(data);
});

//Update oper
app.put('/products/:name', (req, res) => {
    const productName=req.params.name;  //URL se product ka name..need to be updated
    const {name,price}=req.body;

    for (let i=0;i<data.length;i++) {
        if (data[i].name===productName) {
            data[i].name=name || data[i].name;
            data[i].price = price || data[i].price;
            return res.send("Product updated");
        }
    }
    res.send("Product not found.");
});

//Delete oper
app.delete('/products/:name', (req, res) => {
    const productName = req.params.name;
    for (let i=0;i<data.length; i++) {
        if (data[i].name===productName) {
            data.splice(i, 1); // remove 
            return res.send("Product deleted");
        }
    }
    res.send("Product not found.");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
