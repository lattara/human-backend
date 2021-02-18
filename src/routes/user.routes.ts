import express, { Router, Request, Response, Application } from "express";
const User = require("../models/user.model")

// AUTH

export const UserRoutes = (app: Application) => {

    const router: Router = express.Router();
    const secret: string = process.env.SECRET!;


    router.post("/register", async (req: Request, res: Response) => {
        const newUser = new User(req.body)
        newUser.save((err: Error, resp: Response) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(newUser)
            }
        })
    })

    router.post("/login", async (req: Request, res: Response) => {
        const getUser = User.findById(req.params.id)
        getUser.save((err: Error, resp: Response) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(getUser)
            }
        })
    })

    router.patch("/:id", async (req: Request, res: Response) => {
        const updatedUser = req.body
        await User.findOneAndUpdate({_id: req.params.id}, updatedUser, {new: true}, (err: Error, resp: Response)=> {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(`Details successfully updated for ${req.body.firstname} ${req.body.lastname}`)
            }
        });
    })



    router.get("/loggedUser/:id", async (req: Request, res: Response) => {
        try {
            User.findById(req.params.id)
        } catch (err) {
            res.status(500).send(err);
        }
    })

    app.use('/user', router);
}
