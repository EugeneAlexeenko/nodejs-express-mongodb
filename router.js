import express from 'express';
import citiesController from './controllers/citiesController';
import usersController from './controllers/usersController';
import productsController from './controllers/productsController';

const router = express.Router();

router.post('/api/cities/seed', citiesController.insertMockCities);
router.post('/api/cities', citiesController.createCity);
router.get('/api/cities', citiesController.getAllCities);
router.get('/api/cities/random', citiesController.getRandomCity);
router.put('/api/cities/:id', citiesController.updateCity);
router.delete('/api/cities/:id', citiesController.deleteCity);

router.post('/api/users/seed', usersController.insertMockUsers);
router.post('/api/users', usersController.createUser);
router.get('/api/users', usersController.getAllUsers);
router.get('/api/users/:id', usersController.getUser);
router.delete('/api/users/:id', usersController.deleteUser);

router.post('/api/products/seed', productsController.insertMockProducts);
router.post('/api/products', productsController.createProduct);
router.get('/api/products', productsController.getAllProducts);
router.get('/api/products/:id', productsController.getProduct);
router.delete('/api/products/:id', productsController.deleteProduct);

export default router;
