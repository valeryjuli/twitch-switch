import React, { ChangeEvent, FormEvent } from "react";

require("./searchBar.css");

/**
 * Class component allowing user input on search form.
 */
export class SearchBar extends React.Component {

  state = {queryWord: ''};

  onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ queryWord: e.target.value });
  }

  onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar-container ui search">
          <form  className="search-bar-input-wrap ui icon input" onSubmit={this.onSubmitForm}>
            <input 
              placeholder="Enter your search word..." 
              type="text" 
              className="prompt search-bar-input"
              value={this.state.queryWord}
              onChange={this.onChangeInput}
            />
          <i className="search icon"></i>
          </form>
      </div>
    )
  }
}