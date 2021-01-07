import express, { Router, Request, Response, Application } from 'express';
const Orders = require("../models/order.model")
const router: Router = express.Router();

export const OrdersRoutes = (app: Application) => {

    router.get("/", async (req: Request, res: Response) => {
        try {
            const orders = await Orders.find()
            res.json(orders)
            res.status(200)
        } catch (err) {
            res.status(500).send('Error connecting to the Database');
        }
    });

    router.post("/new", async (req: Request, res: Response) => {
            const newOrder = req.body 
            newOrder.save((err: Error, resp: Response) => {
                if (err) {
                    res.status(500).send('Error connecting to the Database');
                } else {
                    res.status(200).json(newOrder)
                }
            })
    });

    app.use('/api/orders', router);

}