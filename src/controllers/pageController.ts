import { Request, Response } from "express";

import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'All Animals',
            background: 'allanimals.jpg'
        },
        menu: createMenuObject('all')//menu active
    });
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        },
        menu: createMenuObject('dog')//menu active

    });
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Cats',
            background: 'banner_cat.jpg'
        },
        menu: createMenuObject('cat')//menu active

    });
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Fishes',
            background: 'banner_fish.jpg'
        },
        menu: createMenuObject('fish')//menu active

    });
}