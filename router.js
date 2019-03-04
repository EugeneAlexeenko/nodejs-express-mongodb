import express from 'express';
import citiesController from './controllers/citiesController';

const router = express.Router();

router.post('/api/cities/seed', citiesController.insertMockCities);
router.post('/api/cities', citiesController.createCity);
router.get('/api/cities', citiesController.getAllCities);
router.get('/api/cities/random', citiesController.getRandomCity);
// router.put('/api/cities/:id', citiesController.updateCity);
// router.delete('/api/cities/:id', citiesController.deleteCity);

export default router;
