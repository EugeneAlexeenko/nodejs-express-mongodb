import express from 'express';
import citiesController from './controllers/citiesController';

const router = express.Router();

router.get('/cities/fill', citiesController.insertMockCities);
router.get('/cities/random', citiesController.getRandomCity);

export default router;
