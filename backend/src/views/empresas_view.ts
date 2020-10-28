import Empresa from '../models/Empresa';
import imagesView from './images_view';

export default {
    render(empresa: Empresa) {
        return {
            id: empresa.id,
            name: empresa.name,
            cnpj: empresa.cnpj,
            images: imagesView.renderMany(empresa.images),
        };
    },

    renderMany(empresas: Empresa[]) {
        return empresas.map(empresa => this.render(empresa));
    }
};