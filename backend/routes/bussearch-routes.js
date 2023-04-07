import express from "express";
import { getbusbysearch } from "../controls/bus-control";

const bussearchrouter = express.Router();
bussearchrouter.put("/", getbusbysearch);

export default bussearchrouter;
