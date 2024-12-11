import React from 'react'
import lcpc from "../assets/images/lcpc.png"

const LCPC2 = () => {
  return (
    <div className='custom-bg-color my-3 mx-3 rounded-3'>

      <div className="px-4 py-3 container  col-xxl-8" style={{ paddingLeft: "100px", paddingRight: "100px" }}>
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={lcpc} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-5">Message From LCPc Sathsara Soysa !</h1>
            <p className="lead fw-bold">
              As a Local Committee President (LCP) in AIESEC, I had the opportunity to lead a dynamic team, drive strategic initiatives, and create meaningful impact in both my personal growth and the development of those around me. The leadership role taught me the importance of effective communication, decision-making, and inspiring others to achieve common goals. It was a transformative experience that not only enhanced my leadership skills but also expanded my global network. If you're passionate about leadership and want to make a difference, I encourage you to explore the opportunities AIESEC offers on our website and apply for a leadership role today!
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LCPC2
