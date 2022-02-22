import React from 'react';
import '../styles/components/pages/HomePage.css';
const HomePage = (props) => {
    return (
        <main>

            <div className="portada">
                <p>"Somos una empresa de servicios integrales de ingeniería que desarrolla proyectos en área de acueductos e instalaciones eléctricas industriales y comerciales.

Aportamos soluciones técnicas para el eficiente aprovechamiento de la energía eléctrica y el agua a desarrolladores, industrias e instituciones."</p>

            </div>
            <div className="tarjetas">
                <div className="tarjeta1 anim">
                    <h2>Obras civiles</h2>
                    {/* <a href="">Obras civiles</a> */}
                </div>
                <div className="tarjeta2 anim">
                    <h2>Obras hidráulicas</h2>
                </div>
                <div className="tarjeta3 anim">
                    <h2>Barrios residenciales</h2>
                </div>

            </div>

        </main>

    );
}
export default HomePage;