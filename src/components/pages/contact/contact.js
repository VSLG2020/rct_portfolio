import React from "react";
import '../contact/contact.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function contactForm() {
  //const //Card 
  return (
    <section>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Interest Card</Card.Title>
          <Card.Text>
            <form>
              <label htmlFor="name">Name:</label>
               <input type="text" name="name" />
               <div>
               <label htmlFor="email">Email address:</label>
               <input type="email" name="email" />
               </div>
               <div>
               <label htmlFor="message">Message:</label>
               <textarea name="message" rows="5" />
               </div>
              </form>
          </Card.Text>
          <Button variant="submit">Submit</Button>
        </Card.Body>
      </Card >
      {/* </section> */}
  
      


       <h2>Contact Me</h2>
        <div>
          <ul>
            <li>
              <a href="#phone">555-555-5555</a>
            </li>
            <li>
              <a href="#email">someone@something.com</a>
            </li>
           </ul>
        </div>
    </section> 

  )}

  

export default contactForm;



