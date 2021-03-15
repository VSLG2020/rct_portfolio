import React from 'react';
import '../footer/footer.css';


function footer() {

  
     return (
       <section className="footer">
       <div className="linkedin">
     <a className="btn btn-default icon" href="javascript:void(0)" onClick="window.open( 'https://www.linkedin.com/in/vanessa-g-b119951b8/');return false;" title="Linkedin"><span class="character">Linkedin</span></a>
        </div>
     <div className="github">
         <a className="btn btn-default icon" href="https://github.com/VSLG2020" target="_blank">Github</a>
      </div>
      </section>
    );
     
    }

  
  
  
  export default footer;