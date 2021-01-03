import express, { Router, Request, Response } from "express";
const Product = require("../models/product.model")
import { errorMsg } from "../errors/errormsg"
const router: Router = express.Router();

// GET

// get all necklaces + bracelets
router.get("/", async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.json(products)
        res.status(200)
    } catch (err) {
        res.status(500).json(errorMsg("DatabaseError"))
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
        res.status(500).json(errorMsg("DatabaseError"))
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
        res.status(500).json(errorMsg("DatabaseError"))
    }
});

// get specific necklace
router.get("/necklaces/:id", getProduct, (req: any, res: any) => {
    res.json(res.product.name)
});

// get all bracelets
router.get("/bracelets/:id", async (req: any, res: any) => {
    try {
        const query = { "_id": req.params.id, "category": "bracelet" }
        const products = await Product.find(query)
        res.json(products)
        res.status(200)
    } catch (err) {
        res.status(500).json(errorMsg("DatabaseError"))
    }
});

// POST

// Create product
router.post("/createProduct", async (req: Request, res: Response) => {
    const newProduct = new Product({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        imgLink: req.body.imgLink,
        isSold: req.body.isSold,
        tags: req.body.tags
    })
    newProduct.save((err: any, resp: Response) => {
        if (err) {
            res.send({message: err.message})
        } else {
            res.send(newProduct)
        }
    })

// DELETE PRODUCT


})

// middleware 
module.exports = router
