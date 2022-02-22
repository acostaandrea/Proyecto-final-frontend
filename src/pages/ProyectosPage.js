import React from 'react';

import '../styles/components/pages/ProyectosPage.css'
const ProyectosPage = (props) => {
    return (
        <div className="galeria">
            <div className="column">
                <img src="images/galeria/casas1.jpg" alt="casa1" />
                
            </div>
            <div className="column">
                <img src="images/galeria/casas2.jpg" alt="casa2" />
            </div>
            <div className="column">
                <img src="images/galeria/casas3.jpg" alt="casa3" />
            </div>
            <div className="column">
                <img src="images/galeria/caminos2.jpg" alt="casa1" />
            </div>
            <div className="column">
                <img src="images/galeria/dique.jpg" alt="casa2" />
            </div>
            <div className="column">
                <img src="images/galeria/jamar-penny-ZgmGq_eFmUs-unsplash.jpg" alt="casa3" />
            </div>

        </div>

    );
}
export default ProyectosPage;