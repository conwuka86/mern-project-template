const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

// All paths start with '/api/projects'

// POST /api/projects
router.post('/', projectsCtrl.create);
// GET /api/projects
router.get('/', projectsCtrl.index);

// PUT /api/projects/:id
router.put('/:id', projectsCtrl.update);

// DELETE /api/projects/:id
router.delete('/:id', projectsCtrl.delete);


module.exports = router;