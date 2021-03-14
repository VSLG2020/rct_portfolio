import React from "react";

function contactForm() {
  return (
    <section>
      <h1>Interest Card</h1>
      <form id="Interest Card-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Contact Me</h2>
      <p>
        <div>
          <ul>
            <li>
              <a href="#phone">555-555-5555</a>
            </li>
            <li>
              <a href="#email">someone@something.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vanessa-g-b119951b8/" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/VSLG2020" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </p>
    </section>

  );
}
export default contactForm;
