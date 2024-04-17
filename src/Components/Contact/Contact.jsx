import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container" id="contact-container">
        <div className="row" id="container-contact">
          <div className="col-md-7" id="col1">
            <h2 className="heading4 display-4">Contactanos</h2>
            <p className="fs-5 pe-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              assumenda, velit suscipit autem mollitia accusantium? Amet,
              dolores quasi atque optio delectus aliquid impedit vitae molestiae
              unde a, quam tempora quod.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quas corporis repellendus unde necessitatibus ipsum velit
              assumenda cum, adipisci vitae odio voluptatibus quod saepe
              eligendi tempore? Recusandae rerum quis sunt!
            </p>
            <input
              type="text"
              className="fs-6 form-control"
              placeholder="Nombre"
              aria-label="default input example"
            />
            <br />
            <input
              type="email"
              className="fs-6 form-control"
              placeholder="Email"
              aria-label="default input example"
            />
            <br />
            <textarea 
              className="fs-6 form-control"
              placeholder="Comentario"
              aria-label="default input example"
            />
            <br />
            <button className="btn" id="contact-btn">
              Enviar Mensaje
            </button>
          </div>

          <div className="col-md-5" id="col2">
            <h2 className="heading5 display-4">Informacion</h2>
            <p className="fs-6">
              <i className="fa-regular fa-envelope" id="icons"></i>example@gmail.com
            </p>
            <p className="fs-6">
              <i className="fa-solid fa-phone" id="icons"></i>+573045214315
            </p>
            <p className="fs-6">
              <i className="fa-solid fa-building-columns" id="icons"></i>Colombia
            </p>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              nesciunt quisquam, sunt fuga dolores impedit omnis minus saepe
              voluptatum accusantium ipsum laudantium laborum debitis quae rem
              deleniti dicta nemo sit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
