const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema({
    User_id: { type: String, required: true },
    NotesDetail: { type: String, required: true },
}, {
    timestamps: true
});
const Notes = mongoose.model("Notes", noteSchema);
async function addNewNotes(id, NotesDetail) {
    const newNotes = await Notes.create({
        User_id: id,
        NotesDetail: NotesDetail
    });
    return newNotes._doc;
}

async function getNote(id) {
    try {
        return await Notes.find({ User_id: id }).sort({ createdAt: -1 });;
    } catch (error) {
        throw new Error('Error retrieving notes: ' + error.message);
    }
};
async function updateaNote(id, NotesDetail) {
    const user = await Notes.updateOne({ "_id": id }, { $set: { NotesDetail: NotesDetail } });
    return user._doc;
}
async function deleteaNote(id) {
    await Notes.deleteOne({ "_id": id });
};
module.exports = {
    addNewNotes, getNote, updateaNote, deleteaNote
};