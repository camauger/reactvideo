import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    // prevent page refresh by the browser
    event.preventDefault();
    // todo: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="container py-5">
        <form onSubmit={this.onFormSubmit} className="form">
          <div className="form-group">
            <label><h2>Video Search</h2></label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              className="form-control form-control-lg"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
