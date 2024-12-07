import Captain from "../models/captain.model.js";
import BlacklistToken from "../models/blacklistToken.model.js";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ error: errors.array() });
        }

        const { fullname, email, password, vechicle } = req.body;

        const captainExist = await Captain.findOne({ email });
        if (captainExist) {
            return res.status(400).send({ error: 'Captain already exist' });
        }
        if (!fullname || !fullname.firstname || !fullname.lastname) {
            return res.status(400).send({ error: 'Full name must include first name and last name' });
        }

        if (!vechicle || !vechicle.color || !vechicle.plate || !vechicle.capacity || !vechicle.vechicleType) {
            return res.status(400).send({ error: 'Vechicle must include color, plate, plate photo, owner photo and capacity' });
        }

        // if (!location || !location.lng || !location.lat) {
        //     return res.status(400).send({ error: 'Location must include latitudes and longitudes' });
        // }

        const hashedPassword = await Captain.hashPassword(password);

        const captain = new Captain({ fullname, email, password: hashedPassword, vechicle/*, location*/ });
        await captain.save();
        const token = captain.generateAuthToken();
        res.status(201).json({ captain, token });
    } catch (error) {
        res.status(400).send(error);
    }
}

export const login = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send({ error: errors.array() });
    }

    const { email, password } = req.body;
    
    const captain = await Captain.findOne({email}).select(+'password');

    if(!captain){
        return res.status(401).json({error: 'Invalid email or password'});
    }

    const isMatch = await captain.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({error: 'Invalid email or password'});
    }

    const token = captain.generateAuthToken();
    res.status(200).json({token, captain});
}

export const getProfile = async (req, res) => {
    try {
        res.status(200).json({captain: req.captain});
    } catch (error) {
        res.status(400).send(error);
    }
}
export const logout = async (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if(!token){
        return res.status(401).send({error: 'Unauthorized'});
    }

    const blacklistToken = new BlacklistToken({token});

    await blacklistToken.save();

    res.status(200).send('Logout successfully');

}

