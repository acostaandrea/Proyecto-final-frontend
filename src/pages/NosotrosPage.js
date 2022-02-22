import React from 'react';
import '../styles/components/pages/NosotrosPage.css'
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2 style={{ "fontSize": "1.4em" }}>Historia</h2>
                <hr/>
                <p style={{ "fontSize": "1em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio autem, eaque saepe cumque ipsam natus, culpa voluptatum ex, cum obcaecati! Quo, assumenda. Veniam doloribus cumque magnam ad, inventore itaque?</p>
                <p style={{ "fontSize": "1em" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, dicta. Culpa eligendi voluptas, laboriosam magni saepe aliquam aut hic libero, eveniet porro quae dolorum minus aspernatur architecto excepturi. Magnam, pariatur.</p>
            </div>
            <h1>Nuestro staff</h1>
            <hr/>
            
            <div className="fila">
                <div className="columna">
                    <div className="card">
                        <img src="images/nosotros/nosotros1.jpg" alt="Juan Gomez" style={{ "width": "100%" }} />
                        <div className="container">
                            <h2>Juan Gomez</h2>
                            <p className="title">Gerente</p>
                            <p className="descripcion">Descripcion lorem ipsum ipsum lorem.</p>
                            {/* <p>ejemplo@example.com</p>
                            <p><button className="button">Contacto</button></p> */}
                        </div>
                    </div>
                </div>

                <div className="columna">
                    <div className="card">
                        <img src="images/nosotros/nosotros2.jpg" alt="Juan Gomez" style={{ "width": "100%" }} />
                        <div className="container">
                            <h2>Maria Castro</h2>
                            <p className="title">Sub Gerente</p>
                            <p className="descripcion">Descripcion lorem ipsum ipsum lorem.</p>
                            
                        </div>
                    </div>
                </div>

                <div className="columna">
                    <div className="card">
                        <img src="images/nosotros/nosotros3.jpg" alt="Juan Gomez" style={{ "width": "100%" }} />
                        <div className="container">
                            <h2>José Garcia</h2>
                            <p className="title">Secretario</p>
                            <p className="descripcion">Descripcion lorem ipsum ipsum lorem.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="columna">
                    <div className="card">
                        <img src="images/nosotros/nosotros4.jpg" alt="Juan Gomez" style={{ "width": "100%" }} />
                        <div className="container">
                            <h2>Juana Rodriguez</h2>
                            <p className="title">Contadora</p>
                            <p className="descripcion">Descripcion lorem ipsum ipsum lorem.</p>
                            
                        </div>
                    </div>
                </div>
            </div>




            {/* <div className="staff">
                <h2>Staff</h2>
                <div className="persona primero">
                    <img src="images/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, dicta impedit suscipit, eum harum id sapiente porro, accusantium reiciendis laudantium distinctio earum atque quo cupiditate similique iste placeat doloremque? Qui!</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros2.jpg" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, dicta impedit suscipit, eum harum id sapiente porro, accusantium reiciendis laudantium distinctio earum atque quo cupiditate similique iste placeat doloremque? Qui!</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros3.jpg" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, dicta impedit suscipit, eum harum id sapiente porro, accusantium reiciendis laudantium distinctio earum atque quo cupiditate similique iste placeat doloremque? Qui!</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros4.jpg" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, dicta impedit suscipit, eum harum id sapiente porro, accusantium reiciendis laudantium distinctio earum atque quo cupiditate similique iste placeat doloremque? Qui!</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros5.jpg" alt="Juan Gomez" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, dicta impedit suscipit, eum harum id sapiente porro, accusantium reiciendis laudantium distinctio earum atque quo cupiditate similique iste placeat doloremque? Qui!</p>
                </div>
            </div> */}

        </main>

    );
}
export default NosotrosPage;