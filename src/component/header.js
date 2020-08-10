import React from "react"
import Rating from './Rating'
import Filter from './Filter'
import AddMovie from './AddModal'


function header(props) {
    return(
      <div>
          <div className="headerc">
          <Filter getFilter={(x) => props.getFilter(x) } className="filter"/>
          <Rating getRating={(y) => props.getRating(y)}  className="rating"/>
          <AddMovie className="addmovie" updateFormData={(e) => props.updateFormData(e)}/>
          
          </div>
      </div>
    );
}
export default header;