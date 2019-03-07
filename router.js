import express from 'express';
import citiesController from './controllers/citiesController';

const router = express.Router();

router.post('/cities/seed', citiesController.insertMockCities);
router.get('/cities/random', citiesController.getRandomCity);

export default router;
