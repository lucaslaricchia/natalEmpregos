import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Image from './Image';

@Entity('empresas')
export default class Empresas{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: number;

    @OneToMany(()=> Image, image => image.empresa, {
        cascade: ['insert' , 'update']
    })
    @JoinColumn({ name: 'empresa_id' })
    images: Image[];

}