import React from 'react';
import coverImage from "../../../assets/images/backgroundimg2.jpeg";

const home = () => (

    <div>
        <h1>
        Homepage
        </h1>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
    </div>
);

export default home;