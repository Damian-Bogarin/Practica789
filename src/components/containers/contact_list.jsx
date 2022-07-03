import React from 'react';
//import PropTypes from 'prop-types';
import ContacComponent from '../pure/contac';
import { Contact } from '../../models/contac_class';


const ContactList = () => {

    const defaultContact = new Contact("Dami", "Bogarin", "damianboga@Gmail.com", true)
    return (
        <div>
            <ContacComponent contact={defaultContact} >

            </ContacComponent>
        </div>
    );
};





export default ContactList;
