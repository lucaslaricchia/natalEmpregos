import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import EmpresasController from './controllers/EmpresasController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/empresas', EmpresasController.index);
routes.get('/empresas/:id', EmpresasController.show);
routes.post('/empresas', upload.array('images'), EmpresasController.create);

export default routes;