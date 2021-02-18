import express, { Router, Request, Response, Application } from 'express';
const Orders = require("../models/order.model")
const router: Router = express.Router();

export const OrdersRoutes = (app: Application) => {

    // get all orders
    router.get("/", async (req: Request, res: Response) => {
        try {
            const orders = await Orders.find()
            res.json(orders)
            res.status(200)
        } catch (err) {
            res.status(500).send(err);
        }
    });

    // create order
    router.post("/new", async (req: Request, res: Response) => {
            const newOrder = new Orders(req.body)
            newOrder.save((err: Error, resp: Response) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(200).json(newOrder)
                }
            })
    });

    // get order by user
    router.get("/:id", async (req: Request, res: Response) => {
        const query = { "userReference":  req.params.id }
        try {
            const orders = await Orders.find(query)
            res.json(orders)
            res.status(200)
        } catch (err) {
            res.status(500).send(err);
        }
    });

    router.delete("/cancel/:id", async (req: Request, res: Response) => {
        const query = { "userReference":  req.params.id }
        await Orders.findOneAndDelete(query, (result: any, err: Error)=> {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(result)
            }
        })
    });

    router.patch("edit", async(req: Request, res: Response) => {
        const id = req.params.id
        const orderToUpdate = req.body
        const updatedProduct = await Orders.findByIdAndUpdate(id, {new: true})

    })


    app.use('/api/orders', router);

}