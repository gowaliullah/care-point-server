import express, { NextFunction, Request, Response } from 'express';
import { SpecialtiesController } from './specialties.controller';
import auth from '../../middlewares/auth';
import { fileUploder } from '../../helper/fileUploder';
import { SpecialtiesValidtaion } from './specialties.validation';
import { UserRole } from '../../../generated/enums';


const router = express.Router();


router.get(
    '/',
    SpecialtiesController.getAllFromDB
);

router.post(
    '/',
    fileUploder.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = SpecialtiesValidtaion.create.parse(JSON.parse(req.body.data))
        return SpecialtiesController.inserIntoDB(req, res, next)
    }
);



router.delete(
    '/:id',
    auth(UserRole.ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteFromDB
);

export const SpecialtiesRoutes = router;