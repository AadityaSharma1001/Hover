import User from "../models/user.model.js";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
    try {       
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).send({error: errors.array()});
        }
        
        const {fullname, email, password} = req.body;

        if (!fullname || !fullname.firstname || !fullname.lastname) {
            return res.status(400).send({ error: 'Full name must include first name and last name' });
        }

        const hashedPassword = await User.hashPassword(password);

        const user = new User({ fullname, email, password: hashedPassword });
        await user.save();
        const token = user.generateAuthToken();
        res.status(201).json({user, token});
    } catch (error) {
        res.status(400).send(error);
    }
}