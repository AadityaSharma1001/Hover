import { Router } from "express";
import { body } from "express-validator";
import { register, login, getProfile, logout } from "../controllers/captain.controller.js";
import authUser from "../middlewares/auth.middleware.js";


const router = Router();

router.post('/register', [  
    body('email').isEmail().withMessage('Email is not valid'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vechicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vechicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vechicle.platePhoto').isURL().withMessage('Plate photo must be a valid URL'),
    body('vechicle.ownerPhoto').isURL().withMessage('Owner photo must be a valid URL'),
    body('vechicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('location.lng').isNumeric().withMessage('Longitude must be a number'),
    body('location.lat').isNumeric().withMessage('Latitude must be a number')
    ], register);

router.post('/login', [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ], login);

router.get('/profile', authUser, getProfile);

router.get('/logout', authUser, logout);

export default router;