import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Empresa from '../models/Empresa';
import empresaView from '../views/empresas_view';
import * as Yup from 'yup';

export default {

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const empresasRepository = getRepository(Empresa);

        const empresa = await empresasRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(empresaView.render(empresa));
    },

    async index(request: Request, response: Response) {
        const empresasRepository = getRepository(Empresa);

        const empresas = await empresasRepository.find({
            relations: ['images']
        });

        return response.json(empresaView.renderMany(empresas));
    },


    async create(request: Request, response: Response) {

        const {
            name,
            cnpj
        } = request.body;

        const empresasRepository = getRepository('empresas');

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const data = {
            name,
            cnpj,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            cnpj: Yup.number().required(),
            images: Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const empresa = empresasRepository.create(data);

        await empresasRepository.save(empresa);

        return response.status(201).json(empresa);

    }
}