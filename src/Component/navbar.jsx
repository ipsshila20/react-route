import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
      <div className='nav'>
          <ul >
              <NavLink to={'/'} className={'link'}>
                  <li>Home</li>
          </NavLink>
              <NavLink to={'/student'} className={'link'}>
                  <li>Student</li>
          </NavLink>
              <NavLink to={'/contact'} className={'link'}>
                  <li>
                      Contact
                  </li>
          </NavLink>
          </ul>
    </div>
  )
}

export default Navbar