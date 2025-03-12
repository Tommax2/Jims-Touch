import React from 'react'
import './NewLetter.css'

export const NewLetter = () => {
  return (
   <div className="newletter">
    <h1>Subscribe to our Newsletter</h1>
    <p>Sign up for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
  <div>
    <input type="email" placeholder='your email id' />
    <button>Subscribe</button>
  </div>
   </div>
  )
}

