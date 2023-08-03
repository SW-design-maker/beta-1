import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import '../Not found/Not_found.scss'

const Not_found = () => {
  return (
    <>
      <Nav />
      <div className='not_found'>
        <div className="container">
          <div className="found">
            <h1>
              PAGE NOT FOUND 404
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Not_found