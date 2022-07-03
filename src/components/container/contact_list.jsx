import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import ContacComponent from '../pure/contac';
import { Contact } from '../../models/contac_class';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {

    const defaultContact1 = new Contact("Damian", "Bogarin", "damianboga@gmail.com", true)
    const defaultContact2 = new Contact("Ana", "Goch", "ana@gmail.com", true)
    const defaultContact3 = new Contact("Juan", "Lopez", "juan@gmail.com", true)

    const [contacts, setContact] = useState([defaultContact1, defaultContact2, defaultContact3]);

    useEffect(() => {
        console.log('Contac estate has been changed')
        return () => {
            console.log("Contact list has been eliminated")
        };
    }, [contacts]);


    function conexionContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].conexion = !tempContact[index].conexion 

        setContact(tempContact)

    }

    function removedContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index, 1)

        setContact(tempContact)
    }

    function addContact(contact) {
        
        const tempContact = [...contacts]; //me traig todas las tareas 
        tempContact.push(contact);
        setContact(tempContact)
    }

    return (
        <div>
            <div className='col-12'>

                <div className='card'>
                    {/* Card header */}
                    <div className='card-header'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    {/* Card body */}

                    <div className='card-body' data-mbd-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>

                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>

                                    <th scope='col'>Last Name</th>

                                    <th scope='col'>Email</th>

                                    <th scope='col'>Conexion</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* Iterar sobre una lista de contactos */}
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContacComponent key={index} contact={contact} conexion={conexionContact} remove={removedContact}></ContacComponent>
                                    )
                                })}
                                

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>
             <h1> Añadir contacto</h1>                   
            <ContactForm add={addContact} ></ContactForm>
        </div>
    );
};





export default ContactList;
