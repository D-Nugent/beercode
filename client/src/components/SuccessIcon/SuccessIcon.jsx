import React from 'react';
import './SuccessIcon.scss'

function SuccessIcon() {
  return (
    <>
    <svg
       xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 30 30"
      className="success-icon"
    >
      <ellipse
       opacity="0.998"
       fill="#ffffff"
       stroke="#008080"
       strokeWidth="4.23333333"
       strokeLinecap="round"
       strokeLinejoin="bevel"
       strokeMiterlimit="4"
       paintOrder="stroke fill markers"
       cx="12.7"
       cy="12.700002"
       rx="8.8809309"
       ry="8.8809319" 
       className="success-icon__circle"
       />
      <path
       fill="none"
       stroke="#008080"
       strokeWidth="1.84627"
       strokeLinecap="butt"
       strokeLinejoin="bevel"
       strokeMiterlimit="4"
       strokeOpacity="1"
       d="m 7.3751212,14.307203 c 2.100896,1.951399 1.560703,2.049362 2.8419718,3.347037 0.974163,-1.14643 2.526596,-3.945566 7.826349,-8.6758742"
       className="success-icon__tick"
      />
      <text
        fill="#008080"
        className="success-icon__text"
        x="-2"
        y="30"
        textLength="100%"
      >
        Email Sent
      </text>
    </svg>
    </>
  )
}

export default SuccessIcon
