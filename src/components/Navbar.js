import React from 'react'
import { useNavigate } from "react-router-dom"

export const Navbar = ({changeShowSolution, changeThema }) => {
  const navigate = useNavigate()

  const handleOnClickHome = () => {
    navigate("/")
  }

  const handleOnClickTable = () => {
    navigate("/Table")
  }

  return (
    <div className="navbar bg-base-100 pt-4 px-4">
        <div className="flex-1">
          <a onClick={handleOnClickHome} className="btn btn-ghost normal-case text-xl">Klausurvorbereitung</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
            <li><a onClick={handleOnClickTable} className='btn btn-ghost'>zeige alle Fragen/Themen</a></li>
            <li tabIndex="0">
            </li>
            <li><a onClick={changeShowSolution} className='btn btn-ghost'>Lösung</a></li>
            <li tabIndex="0">
            </li>
            <li><a onClick={changeThema} className='btn btn-ghost'>nächstes Thema</a></li>
            </ul>
        </div>
    </div>  
  )
}
