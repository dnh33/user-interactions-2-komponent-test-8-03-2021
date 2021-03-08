import React from 'react'
import { Link } from '@reach/router'
import './Navbar.scss'

export default function Navbar() {
  return (
    <section className="header">
      <h1 className="header__title">Title</h1>
      <Link to="/" className="component__one">1</Link>
      <Link to="/component_2" className="component__one">2</Link>
    </section>
  )
}
