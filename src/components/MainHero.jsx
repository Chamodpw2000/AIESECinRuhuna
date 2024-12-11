import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const MainHero = () => {
    const navigate = useNavigate();
    return (
      <div >
          
          <div className="container-fluid col-xxl-12  p-5 hero ">
      <div className="row flex-lg-row-reverse align-items-center g-8 ">
       
      <div className="container1 ">
      <div className="content py-5">
          <h1 className='text-center'><span> Welcome to AIESEC in Ruhuna Leadership Body Applications - Term 25.26 Summer</span></h1>
          <div className="d-flex flex-column
           align-items-center my-4">
            
             <p className='text-center fw-bold'>Unlock your leadership potential with AIESEC in Ruhuna! </p>
                
                <p className='text-center'> 🌟 Applications for the 25.26 Summer Leadership Body are now open. Step up, challenge yourself, and be part of something bigger. Your journey to growth starts here! 🚀</p>
          </div>

          <div className='d-flex justify-content-center'>
          <button 
  type="button" 
  className="btn btn-primary btn-lg custom-hover ms-3 p-3 px-5" onClick={() => navigate('/apply')}
>
  Apply Now !
</button>


          </div>


      </div>
  </div>
      </div>
    </div>
  
  
  
      </div>
    )
  }
  
  export default MainHero