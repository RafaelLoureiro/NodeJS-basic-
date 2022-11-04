import { Request, Response } from "express";

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll(); //add array list

    res.render('pages/page', {
        menu: createMenuObject('all'),//menu active
        banner: {
            title: 'Todos Os Animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog'); //add array list

    res.render('pages/page', {
        menu: createMenuObject('dog'),//menu active
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');


    res.render('pages/page', {
        menu: createMenuObject('cat'),//menu active
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),//menu active
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list

    });
}