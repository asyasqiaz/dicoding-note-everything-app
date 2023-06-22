import React from "react";
import NoteSearch from "./NoteSearch";

const Header = ({ search, onSearchChange }) => {
  return (
    <div className="note-app__header">
      <h1>Note Everything</h1>
      <NoteSearch search={search} onSearchChange={onSearchChange} />
    </div>
  );
};

export default Header;
