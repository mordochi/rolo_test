import React from 'react';
import brand from '../../assets/brand.png';
import hellaJ from '../../assets/hella_j.png';
import jimKatt from '../../assets/jim_katt.png';
import mike from '../../assets/mike.png';
import steven from '../../assets/steven.png';
import Button from '../Button';
import Add from '../icons/Add';
import { Avatar, Container, ContactWrapper, Name } from './styles';

const contacts = [
  { name: 'Mike', imgSrc: mike },
  { name: 'Brand', imgSrc: brand },
  { name: 'Jim Katt', imgSrc: jimKatt },
  { name: 'Steven', imgSrc: steven },
  { name: 'Hella J', imgSrc: hellaJ }
];
const Contacts = () => {
  const renderContacts = () => {
    return contacts.map(contact => {
      return (
        <ContactWrapper key={contact.imgSrc}>
          <Avatar src={contact.imgSrc} />
          <Name>{contact.name}</Name>
        </ContactWrapper>
      );
    });
  };
  return (
    <Container>
      <ContactWrapper>
        <Button type="circle" diameter="48px">
          <Add />
        </Button>
        <Name>Add</Name>
      </ContactWrapper>
      {renderContacts()}
    </Container>
  );
};

export default Contacts;
