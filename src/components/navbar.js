import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div>
        <ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item">
								<a className="nav-link" href="#home">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#header">about</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#feature">feature</a>
							</li>
							{/* code below is for screenshot 'Ryan' */}
							{/* <li className="nav-item">
								<a className="nav-link" href="#screenshot">screenshot</a>
							</li> */}
							<li className="nav-item">
								<a className="nav-link" href="#team">team</a>
							</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;