import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [notes, setNotes] = useState([]);

    const fetchNotes = () => {
        axios.get("http://localhost:3000/api/notes").then((res) => {
            setNotes(res.data.notes);
        });
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, description } = e.target.elements;

        axios
            .post("http://localhost:3000/api/notes", {
                title: title.value,
                description: description.value,
            })
            .then((res) => {
                console.log(res.data);
                fetchNotes();
            });
    };

    const handleDeleteNote = (noteId) => {
        axios
            .delete("http://localhost:3000/api/notes/" + noteId)
            .then((res) => {
                fetchNotes();
            });
    };

    return (
        <>
            <form className="note-create-form" onSubmit={handleSubmit}>
                <input name="title" type="text" placeholder="Enter Title" />
                <input
                    name="description"
                    type="text"
                    placeholder="Enter Description"
                />
                <button>Create Note</button>
            </form>
            <div className="notes">
                {notes.map((elem) => {
                    return (
                        <div className="note">
                            <h1>{elem.title}</h1>
                            <p>{elem.description}</p>
                            <button
                                onClick={() => {
                                    handleDeleteNote(elem._id);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default App;
