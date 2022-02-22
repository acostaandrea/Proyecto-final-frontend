// import React from "react";
import "../styles/components/pages/ContactoPage.css";
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  }
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value //forma dinamica
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (

    <main >
      <div className="sucursales">
        <div className="sucursal">
          <h4>Sucursal Buenos Aires</h4>
          <ul className="sucursaluni">
            <li>
              <i className="fas fa-map-marker-alt icono"></i>
              <span>Dirección:</span>Libertador 1500 sur
            </li>
            <li>
              <i className="fas fa-phone icono"></i>
              <span>Teléfono:</span>(11)056841848
            </li>
            <li>
              <i className="far fa-envelope icono"></i>
              <span>Mail:</span>sucbsas@transporte.com
            </li>
            <li>
              <i className="far fa-clock icono"></i>
              <span>Horario:</span>09:00 hs a 17:00 hs
            </li>
          </ul>
          <iframe
            className="mapa"
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.111388715944!2d-68.56364318553734!3d-31.521100481369327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968141a539a68763%3A0x414295dbe6cbab8e!2sSgto%20Cabral%20Oeste%202180%2C%20Rivadavia%2C%20San%20Juan!5e0!3m2!1ses!2sar!4v1635530674299!5m2!1ses!2sar"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="sucursal">
          <h4>Sucursal Rosario</h4>
          <ul className="sucursaluni">
            <li>
              <i className="fas fa-map-marker-alt icono"></i>
              <span>Dirección:</span>Libertador 1500 sur
            </li>
            <li>
              <i className="fas fa-phone icono"></i>
              <span>Teléfono:</span>(11)056841848
            </li>
            <li>
              <i className="far fa-envelope icono"></i>
              <span>Mail:</span>sucbsas@transporte.com
            </li>
            <li>
              <i className="far fa-clock icono"></i>
              <span>Horario:</span>09:00 hs a 17:00 hs
            </li>
          </ul>
          <iframe
            className="mapa"
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.111388715944!2d-68.56364318553734!3d-31.521100481369327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968141a539a68763%3A0x414295dbe6cbab8e!2sSgto%20Cabral%20Oeste%202180%2C%20Rivadavia%2C%20San%20Juan!5e0!3m2!1ses!2sar!4v1635530674299!5m2!1ses!2sar"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="sucursal">
          <h4>Contacto rápido</h4>
          <div className="formularios">
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
              <p>
                <label for="">Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
              </p>
              <p>
                <label for="">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
              </p>
              <p>
                <label for="">Telefono</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
              </p>
              <p>
                <label for="comentario">Comentario</label>
                <textarea id="comentario" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
              </p>
              <p className="acciones">
                <input type="submit" value="Enviar" />
              </p>
            </form>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactoPage;
