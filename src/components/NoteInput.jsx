import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (this.state.maxChar >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          maxChar: 50 - event.target.value.length,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        maxChar: 50,
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Characters left: {this.state.maxChar}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Enter note title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Enter note detail"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
