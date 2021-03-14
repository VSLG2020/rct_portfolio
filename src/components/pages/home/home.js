import React from 'react';
import coverImage from "../../../assets/images/backgroundimg2.jpeg";

const home = () => (

    <main>
        <div>
        <h1>
        Homepage
        </h1>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/>
    </div>
    <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
    </main>
);

export default home;


