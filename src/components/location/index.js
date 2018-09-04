import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8308288652115!2d139.76486291525876!3d35.68116728019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd8a12697%3A0xd2005b335be1da6e!2z5p2x5Lqs44K544OG44O844K344On44Oz44Ob44OG44Or!5e0!3m2!1sja!2sjp!4v1536027287912" 
      width="100%" 
      height="500px" 
      frameborder="0" 
      allowFullScreen />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
}

export default Location
