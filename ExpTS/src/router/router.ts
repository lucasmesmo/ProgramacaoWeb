import mainController from "../controllers/main"
import express, { Router } from 'express';
import majorController from "../controllers/major"

const router = Router();

//Major controle
router.get('/major', majorController.index)
router.get('/major/read/:id', majorController.read)
router.get('/major/create', majorController.create)
router.post('/major/create', majorController.create)
router.get('/major/update/:id', majorController.update)
router.post('/major/update/:id', majorController.update)
router.post('/major/remove/:id', majorController.remove)


//Main controller
router.get('/', mainController.principal);
router.get('/sobre', mainController.sobre);
//Exercicio 4
router.get("/lorem/:paragraphs", mainController.lorenIp);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
// Exercicio 6
router.get('/hb4', mainController.hb4);

export default router;