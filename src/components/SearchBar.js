import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
    /* When using 'this' keyword, find where the function in question is being called, to determine what 'this' is referring to. Find what is to the left of the dot when function is called. Just replace 'this' keyword with what is to the left. That will be what 'this' is referencing.  */
    console.log(this.state.term);
    

    /* To bind 'this' keyword, use arrow function. */
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
             onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
