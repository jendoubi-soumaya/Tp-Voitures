const express = require('express');
const voitRouter = express.Router();

// Pour parser les corps de requêtes en JSON

let voitures = [
    { id: 1, name: "MASERATI" },
    { id: 2, name: "Bentley" },
    { id: 3, name: "rolls royce" }
];

// Ajouter
voitRouter.post('/new', (req, res) => {
    const voiture = req.body;
    voitures.push({ ...voiture, id: voitures.length + 1 });
    res.status(201).send(voiture);
});

// Lister toutes
voitRouter.get('/all', (req, res) => {
    res.status(200).send(voitures);
});

// Lister By ID
voitRouter.get('/voiture/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const voiture = voitures.find(v => v.id === id);
    if (!voiture) {
        return res.status(404).send('Not found');
    }
    res.status(200).send(voiture); //res.json(v);
});

//Modifier
voitRouter.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    if (index === -1) {
        return res.status(404).send('Not found');
    }
    const updatedVoiture = { ...voitures[index], ...req.body };
    voitures[index] = updatedVoiture;
    res.status(200).send(updatedVoiture);
});

//Supprimer
voitRouter.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === id);
    if (index === -1) {
        return res.status(404).send('Not found');
    }
    voitures = voitures.filter(v => v.id !== id);
    res.status(200).send({ message: `Voiture avec l'ID ${id} supprimée.` });
});

module.exports = voitRouter

