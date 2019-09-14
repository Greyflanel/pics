import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
    
}

  render() {
      /* Controlled components handle data changes within react components using setState. Uncontrolled components update data changes inside the DOM. 
      Controlled components allow us to know the value of the user input at any time.*/ 
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
             type="text" 
             value={this.state.term} 
             onChange={e => this.setState({ term: e.target.value.toUpperCase() })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
