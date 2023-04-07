import express from "express";
import {addbus, getbuses, getbusbyid, deletebus, updatebus} from "../controls/bus-control";

const busrouter = express.Router();
busrouter.post("/", addbus);
busrouter.get("/", getbuses);
busrouter.get("/:id", getbusbyid);

busrouter.delete("/:id", deletebus);
busrouter.put("/:id", updatebus);

export default busrouter;