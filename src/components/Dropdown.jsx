import React from 'react'

function Dropdown() {
  return (
    <>
    <div>
        <h2><span className="badge text-bg-secondary">Sort by:</span></h2>
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
    </div>
    </>
  )
}

export default Dropdown
