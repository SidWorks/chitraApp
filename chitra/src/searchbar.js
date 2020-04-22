import React from "react";

class SearchBar extends React.Component {
  state = {};

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="post">
          <button type="submit">Image Search</button>

          <input className="field" type="text" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
