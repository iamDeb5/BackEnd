import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [note, setNote] = useState([]);

    const fetchNotes = () => {
        axios
            .get("https://backend-hgwg.onrender.com/api/notes")
            .then((res) => {
                setNote(res.data.notes);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const submiitHandler = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[1].value;

        axios
            .post("https://backend-hgwg.onrender.com/api/notes", {
                title: title,
                description: description,
            })
            .then((res) => {
                console.log(res.data);
                fetchNotes();
            })
            .catch((err) => {
                console.log(err);
            });

        e.target[0].value = "";
        e.target[1].value = "";
    };

    const deleteNotes = (noteId) => {
        axios
            .delete(`https://backend-hgwg.onrender.com/api/notes/${noteId}`)
            .then((res) => {
                fetchNotes();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateNote = (noteId, updatedTitle, updatedDescription) => {
        axios
            .put(`https://backend-hgwg.onrender.com/api/notes/${noteId}`, {
                title: updatedTitle,
                description: updatedDescription,
            })
            .then((res) => {
                fetchNotes();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="note-create-input">
                <form onSubmit={submiitHandler}>
                    <input type="text" placeholder="Enter Title..." />
                    <input type="text" placeholder="Enter Description..." />
                    <button>Create Note</button>
                </form>
            </div>
            <div className="note-list">
                {note.map((item, index) => {
                    return (
                        <>
                            <div className="note-card" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="buttons">
                                    <button
                                        className="delete-btn"
                                        onClick={() => {
                                            deleteNotes(item._id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="edit-btn"
                                        onClick={() => {
                                            updateNote(item._id);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button>View</button>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default App;
