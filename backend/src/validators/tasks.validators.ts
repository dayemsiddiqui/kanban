import { check } from 'express-validator';

export const postTaskValidator = [
    check('id')
        .not()
        .exists(),
    check('status')
        .exists()
        .isString(),
    check('description')
        .exists()
        .isString(),
    check('label')
        .exists()
        .isString(),
];

export const putTaskValidator = [
    check('id')
        .exists()
        .isString(),
    check('status')
        .exists()
        .isString(),
    check('description')
        .exists()
        .isString(),
    check('label')
        .exists()
        .isString(),
];
