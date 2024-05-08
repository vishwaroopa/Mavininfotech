import React from "react";

const Search = ({ setSearchKeyword }) => {
  return (
    <div className="row"><br/><br/><br/>
    <div className="col-md-4"></div>
    <div className="col-md-4">
    <div className="form-group">
    <div className="main">
    <div className="form-group has-search">
    <span className="form-control-feedback">
    <i className="fa fa-search"></i></span>
    <input type="text" onChange={(e) => setSearchKeyword(e.target.value)}  className="search_input form-control" placeholder="Search by Job Title or Location or Skill Set" />
    </div>
    </div>
    </div><br/>
    </div>
    </div>
    
  );
};

export default Search;
