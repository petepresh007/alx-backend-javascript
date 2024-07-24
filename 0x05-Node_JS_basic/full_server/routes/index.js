import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();
router.get('/', AppController.getHomepage);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);
router.get('/students', StudentsController.getAllStudents);

export default router;
