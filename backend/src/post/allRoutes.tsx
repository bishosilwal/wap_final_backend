import express from 'express';
import indexHandler from './indexHandler';
import createHandler from './createHandler';
import updateHandler from './updateHandler';
import getHandler from './getHandler';

const allRoutes = express.Router();

allRoutes.get("/posts", indexHandler);
allRoutes.post("/posts", createHandler);
allRoutes.put("/posts/:id", updateHandler);
allRoutes.get("/posts/:id", getHandler);

export default allRoutes;
