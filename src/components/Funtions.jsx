import React from 'react';
import { useNavigate } from 'react-router-dom';

const Functions = () => {
  const navigate = useNavigate();

  // Inline style for equal button size
  const buttonStyle = {
    width: '200px',
    height: '60px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding: '10px',
    fontSize: '16px',
  };

  return (
    <div className="mb-3">
      <h1 className="text-center display-5 fw-bold my-3">
        Select the Function that you want to Apply
      </h1>

      <h2 className="text-center font-weight-bold my-5">Front Office</h2>

      <div className="container">
        {/* Row 1 */}
        <div className="row">
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/igvb2bnvd')}
            >
              iGV B2B & VD
            </button>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/igvmnir')}
            >
              iGV M & IR
            </button>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/igtb2bnvd')}
            >
              iGT B2B & VD
            </button>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/igtmnir')}
            >
              iGT M & IR
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/ogvb2c')}
            >
              oGV B2C
            </button>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/ogvps')}
            >
              OGV PS
            </button>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/ogtb2c')}
            >
              OGT B2C
            </button>
          </div>
          <div className="col-sm-6 col-md-3 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/ogtps')}
            >
              OGT PS
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center font-weight-bold my-5">Back Office</h2>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/mkt')}
            >
              MKT
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/pm')}
            >
              TM
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/bd')}
            >
              BD
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/fnl')}
            >
              F&L
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/pr')}
            >
              PR
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary btn-lg custom-hover"
              style={buttonStyle}
              onClick={() => navigate('/em')}
            >
              EM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
