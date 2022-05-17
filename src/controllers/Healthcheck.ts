import {Request, Response} from 'express';
import {controller, httpGet} from 'inversify-express-utils';
import Constants from '../constants/Constants';

@controller(`${Constants.CONTEXTPATH}/healthcheck`)
export class HealthcheckController {

    @httpGet('/')
    public async checkhealth(req: Request, res: Response){
        res.json({status: "success"})
    }
}