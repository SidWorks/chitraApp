import React from "react";

class SearchBar extends React.Component {
  state = { type: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.type);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="post">
          <label htmlFor="">
            <b>Image Search</b>
          </label>

          <input
            value={this.state.type}
            className="field"
            type="text"
            onChange={(e) =>
              this.setState({
                type: e.target.value.toUpperCase(),
              })
            }
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
