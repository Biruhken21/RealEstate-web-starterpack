import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
      <section className="f-wrapper">
          <div className="paddings innerWidth flexCenter f-container">
              {/*    the left side */}
              <div className="flexColStart f-left">
                  <img src="./logo2.png" alt="" width={120} />

                  <span className='secondaryText'>
                      Our Vision Is to make all people <br />
                      the best place to live for them
                  </span>
              </div>

              {/*    the right side */}
              
              <div className="flexColStart f-right">
                  <span className='primaryText'>Information</span>
                  <span className='secondaryText'>145, Adiss Ababa, Bemnet building, Ethiopia</span>

                  <div className="flexCenter f-menu">
                      <span>property</span>
                      <span>Sevices</span>
                      <span>Products</span>
                      <span>Abot Us</span>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Footer
