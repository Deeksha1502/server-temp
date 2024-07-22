const express = require('express');
const router = express.Router();

const subjectController = require('../controllers/subjectController');

router.get('/', subjectController.getAllSubjects);
router.get('/:id', subjectController.getSubjectById);

router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);
router.post('/', subjectController.postSubject);

module.exports = router;
