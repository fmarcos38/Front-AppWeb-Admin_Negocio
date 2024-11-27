import React, {useContext} from 'react';
import { AppContexto } from '../../Contexto';
import BotonWhatsApp from '../../Componentes/BotonWhastApp';
import './estilos.css';


function Home() {

    const contexto = useContext(AppContexto);

    return (
        <div className='cont-home'>
            <div className='cont-msj-home'>
                <h1 className='texto-home'>Bienvenidos a Especiera del Sol</h1>
                <h2 className='texto-home'>Especias + Frutas Secas</h2>
            </div>
            {
                !contexto.isAuthenticated && 
                <div className='whatsapp-button '>
                    <BotonWhatsApp />
                </div>
            }
        </div>
    )
}

export default Home