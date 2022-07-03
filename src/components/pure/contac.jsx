import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contac_class';


const ContacComponent = ({ contact, conexion, remove }) => {


    function ContactIconConexion(){
        if(contact.conexion){
            return(<i onClick={() => {conexion(contact)}} className='bi-toggle-on task-action' style={{color: 'green', fontWeight : 'bold' }}></i>)

        }else{
            return(<i onClick={() => {conexion(contact)}} className='bi-toggle-off task-action' style={{color: 'grey', fontSize : '20px'}}></i>)

        }
    }
    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>
                    {contact.name}
                </span>
            </th>
            <td className='align-middle'>
                <span>
                    {contact.lastName}
                </span>
            </td>

            <td className='aling-middle'>
                {/* ejecucion de la funcion tasklevelbage */}
                <span>
                    {contact.email}
                </span>
            </td>

            <td className='align-middle'>
                {/* ejecution to funtcion to return  icon on dependig on completion */}
                {ContactIconConexion()}

                <i className='bi-trash task-action' onClick={() => { remove(contact) }} style={{ color: 'tomato', fontSize: '20px' }}></i>
            </td>

        </tr>




    );
};


ContacComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    conexion: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContacComponent;
