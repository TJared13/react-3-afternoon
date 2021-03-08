import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(){
    super();
    this.state ={
      search: ''
    }
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  };

  render() {
    const {searchPosts} = this.state;
    const {postMapped} = this.props;
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" value={this.state.search} onChange={this.handleChange} />

          <SearchIcon id="Search__icon"/>
        </div>
        
      </section>
    )
  }
}