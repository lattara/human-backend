import express, { Router, Request, Response, Application } from 'express';
const Product = require("../models/product.model")
const router: Router = express.Router();


export const ProductRoutes = (app: Application) => {
// GET

// get all necklaces + bracelets
router.get("/", async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.json(products)
        res.status(200)
    } catch (err) {
        res.status(500).send('Error connecting to the Database');
    }
});

// get all necklaces
router.get("/necklaces", async (req: Request, res: Response) => {
    try {
        const query = { "category": "necklace" }
        const products = await Product.find(query)
        res.json(products)
        res.status(200)
    } catch (err) {
        res.status(500).send('Error connecting to the Database');
    }
});

// get all bracelets
router.get("/bracelets", async (req: Request, res: Response) => {
    try {
        const query = { "category": "bracelet" }
        const products = await Product.find(query)
        res.json(products)
        res.status(200)
    } catch (err) {
        res.status(500).send('Error connecting to the Database');
    }
});

// get specific product
router.get("/products/:id", async (req: any, res: any) => {
    Product.findById(req.params.id)
    .then((result: any)=> {
        if (!result){
            res.status(404).send('Product not found, please try again')
        }else {
            res.status(200).json(result)
            }    
    })
    .catch((err: any)=> res.status(500).json({message: 'Error connecting to the Database'}))
});

// POST

// Create product
router.post("/createProduct", async (req: Request, res: Response) => {
    const newProduct = req.body
    newProduct.save((err: Error, resp: Response) => {
        if (err) {
            res.status(500).send('Error connecting to the Database');
        } else {
            res.status(200).json(newProduct)
        }
    })
})

//PATCH

//Update product
router.patch("/updateProduct/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const productToUpdate = req.body
        const updatedProduct = await Product.findByIdAndUpdate(id, {$set: productToUpdate}, {new: true})
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).send('Error occurred while updating the project. Please try again.');
    }
})

// DELETE

// Delete product
router.delete("/deleteProduct/:id", async(req: Request, res: Response) => {
    Product.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(200).send('Product deleted successfully')
    })
    .catch((err: any)=>{
        res.status(500).send('Error in deleting product, please try again later')
    })
 })

 app.use('/api/products', router);

}
