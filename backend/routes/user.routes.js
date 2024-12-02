import express from 'express';
import { body } from 'express-validator';
import { register, login, getProfile, logout } from '../controllers/user.controller.js';
import authUser  from "../middlewares/auth.middleware.js"

const router = express.Router();

router.post('/register', [
  body('email').isEmail().withMessage('Email is not valid'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], register);

router.post('/login', [
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], login);

router.get('/profile', authUser, getProfile);

router.get('/logout', authUser, logout);

export default router;