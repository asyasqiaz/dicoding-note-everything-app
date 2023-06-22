import React from "react";

function ArchiveUnarchiveButton({ id, onArchive, isArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchive ? "Unarchive" : "Archive"}
    </button>
  );
}

export default ArchiveUnarchiveButton;
