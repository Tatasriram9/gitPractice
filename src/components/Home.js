import React from "react";
import image from  "../assits/images/background.png";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <img src={image} alt=""></img>
                </div>
                <div>
                    <h1>we are frontend developers </h1>
                    <p>there is nobody to stop us</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home


