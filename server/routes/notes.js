const express = require("express");
const Note = require('../models/notes');
const router = express.Router();

router
    .post('/newNote', async (req, res) => {
        try {
            await Note.addNewNotes(req.body.id, req.body.NotesDetail);
            res.send({ Success: `Notes Added Successfully.` });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .get('/getNotes', async (req, res) => {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).send({ message: 'User ID is required' });
        }
        try {
            const notes = await Note.getUserNotes(userId);
            res.send(notes);
        } catch (error) {
            res.status(401).send({ message: 'Error retrieving notes: ' + error.message });
        }
    })
    .put('/update', async (req, res) => {
        try {
            const notes = await Note.updateaNote(req.body.id, req.body.NotesDetail);
            res.send({ message: `Notes Added Successfully!!` });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/delete', async (req, res) => {
        try {
            await Note.deleteaNote(req.body.id);
            res.send({ success: "Note deleted Successfully!!" });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })
module.exports = router;