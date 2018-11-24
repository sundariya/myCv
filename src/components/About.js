import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-9/13173808_1692639467660891_6503086680868910500_n.jpg?_nc_cat=102&_nc_ht=scontent.fdel1-4.fna&oh=3647fb0cd62deff1548b5639bad07d77&oe=5C7DA670" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						   <span>
                     {resumeData.contactNumber}<br />
                     {resumeData.emailAddress} <br />
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}