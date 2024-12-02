import User from "../models/user.model.js";
import BlacklistToken from "../models/blacklistToken.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const token =
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const isTokenBlacklisted = await BlacklistToken.findOne({ token });

    if (isTokenBlacklisted) {
        return res.status(401).send({ error: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id
    });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default authUser;
