import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );

    this.setState({ notes });
  }

  onNoteSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            createdAt: showFormattedDate(new Date()),
            title,
            body,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const active = notes.filter((note) => note.archived === false);
    const archived = notes.filter((note) => note.archived === true);

    return (
      <div>
        <Header
          search={this.state.search}
          onSearchChange={this.onNoteSearchHandler}
        />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Active</h2>
          {active.length > 0 ? (
            <NoteList
              notes={active}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <p className="notes-list__empty-message">
              There is not any notes currently.
            </p>
          )}

          <h2>Archived</h2>
          {archived.length > 0 ? (
            <NoteList
              notes={archived}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <p className="notes-list__empty-message">
              There is not any notes currently.
            </p>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default NoteApp;
