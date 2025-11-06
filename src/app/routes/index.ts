import express from 'express';
import {  userRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/user.routes';
import { scheduleRoutes } from '../modules/schedule/user.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/schedule',
        route: scheduleRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;