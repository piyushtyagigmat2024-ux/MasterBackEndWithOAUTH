import { Router } from "express";
import {healthCheack} from "../controllers/healthcheck.controllers.js";


const router = Router(); 

router.route('/').get(healthCheack);


export default router;