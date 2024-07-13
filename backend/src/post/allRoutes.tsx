import express from 'express';
import indexHandler from './indexHandler';

const allRoutes = express.Router();

allRoutes.get("/posts", indexHandler)


export default allRoutes;
