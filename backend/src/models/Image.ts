import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Empresa from './Empresa';


@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;


    @Column()
    path: string;

    @ManyToOne(()=> Empresa, empresa => empresa.images)
    @JoinColumn({name: 'empresa_id'})
    empresa: Empresa;
}