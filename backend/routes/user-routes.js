import express from "express";
import { deleteuser, getallusers, getuserbyid, loginuser, signup, updateuser, getbookingsofuser } from "../controls/user-control";

const userrouter = express.Router();

userrouter.get("/",getallusers);
userrouter.get("/:id", getuserbyid);
userrouter.post("/signup", signup);
userrouter.put("/:id", updateuser);
userrouter.delete("/:id", deleteuser);
userrouter.post("/login", loginuser);
userrouter.get("/bookings/:id", getbookingsofuser);

export default userrouter;