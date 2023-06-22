import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveUnarchiveButton from "./ArchiveUnarchiveButton";
import NoteItemContent from "./NoteItemContent";
import { showFormattedDate } from "../utils/index";

const NoteItem = ({
  id,
  title,
  createdAt,
  body,
  onDelete,
  onArchive,
  isArchive,
}) => {
  return (
    <div className="note-item">
      <NoteItemContent
        title={title}
        date={showFormattedDate(createdAt)}
        body={body}
      />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveUnarchiveButton
          id={id}
          onArchive={onArchive}
          isArchive={isArchive}
        />
      </div>
    </div>
  );
};

export default NoteItem;
