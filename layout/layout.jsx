import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

const layout = ({children}) => {
  return (
    <React.Fragment>
        <Header/>
        {children}
        <Footer/>
    </React.Fragment>
  )
}

export default layout