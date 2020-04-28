import React from "react";
import SearchBar from "./searchbar";
import unsplash from "../src/api/unsplash";
import ImageList from "../src/components/imagelist";
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (type) => {
    const response = await unsplash.get("search/photos", {
      params: { query: type },
    });
    console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
