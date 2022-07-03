import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contac_class';


const ContacComponent = ({contact}) => {
    return (
        <div>
            <h1>
                Name: {contact.name}
            </h1>
            <h1>
                LastName: {contact.lastName}
            </h1>

            <h1>Conexion: {contact.conect ? 'Contacto en linea' : 'Contacto no disponible'}  </h1>
        </div>
    );
};


ContacComponent.propTypes = {
 contact : PropTypes.instanceOf(Contact)
};


export default ContacComponent;
