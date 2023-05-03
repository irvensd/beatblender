import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import "./Contact.css"


const Contact = () => {
  return (
    <>
    
    <div class="main">
    <Navbar/>
    <div class="card">
      <div class="ups">
        <div class="screw1">+</div>
        <div class="screw2">+</div>
      </div>
      <div class="card1">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="yl">
          <div class="roll">
            <div class="s_wheel"></div>
            <div class="tape"></div>
            <div class="e_wheel"></div>
          </div>
          <p class="num">90</p>
        </div>
        <div class="or">
          <p class="time">2×30min</p>
        </div>
      </div>
      <div class="card2_main">
        <div class="card2">
          <div class="c1"></div>
          <div class="t1"></div>
          <div class="screw5">+</div>
          <div class="t2"></div>
          <div class="c2"></div>
        </div>
      </div>
      <div class="downs">
        <div class="screw3">+</div>
        <div class="screw4">+</div>
      </div>
    </div>
  </div>

  <div class="card_info">
  <span class="title">Leave a Comment</span>
  <form class="form_info">
    <div class="group">
    <input placeholder="‎" type="text" required=""/>
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder="‎" type="email" id="email" name="email" required=""/>
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="‎" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Contact us </label>
</div>
    <button type="submit">Submit</button>
  </form>
</div>

    
    </>

  )
}

export default Contact