import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <div className="card text-bg-dark">
  <img src={props.image1} class="card-img"/>
  <div className="card-img-overlay">
    <p className="card-text"><small>{props.describe}</small></p>
    <span>
    <img src={props.img} className="card-img-top"/>
    <p className="card-text"><small>{props.rating}</small></p>
    </span>
      </div> 
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text1}</p>
    <button type="button" className="btn btn-primary">Discover More</button>
</div>
    );

}