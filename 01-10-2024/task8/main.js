// DOM Elements
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const notesContainer = document.getElementById("notes-container");

// Load notes from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadNotes);

// Event listener for adding a new note
addNoteBtn.addEventListener("click", addNote);

// Function to add a note
function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText === "") {
    alert("Please write something before adding a note.");
    return;
  }

  createNoteElement(noteText); // Add note to the UI
  saveNoteInLocalStorage(noteText); // Save the note in localStorage
  noteInput.value = ""; // Clear the input field
}

// Function to create a note element in the UI
function createNoteElement(noteText) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");
  noteDiv.innerText = noteText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    noteDiv.remove();
    deleteNoteFromLocalStorage(noteText);
  });

  noteDiv.appendChild(deleteBtn);
  notesContainer.appendChild(noteDiv);
}

// Function to save note in localStorage
function saveNoteInLocalStorage(noteText) {
  const notes = getNotesFromLocalStorage();
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to get notes from localStorage
function getNotesFromLocalStorage() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

// Function to load notes from localStorage
function loadNotes() {
  const notes = getNotesFromLocalStorage();
  notes.forEach((note) => createNoteElement(note));
}

// Function to delete note from localStorage
function deleteNoteFromLocalStorage(noteText) {
  let notes = getNotesFromLocalStorage();
  notes = notes.filter((note) => note !== noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
}
