import React from 'react';
import brand from '../../assets/brand.png';
import hellaJ from '../../assets/hella_j.png';
import jimKatt from '../../assets/jim_katt.png';
import mike from '../../assets/mike.png';
import steven from '../../assets/steven.png';
import Button from '../Button';
import Add from '../icons/Add';
import { Avatar, Container, List, Name, Wrapper } from './styles';

const contacts = [
  { name: 'Mike', imgSrc: mike },
  { name: 'Brand', imgSrc: brand },
  { name: 'Jim Katt', imgSrc: jimKatt },
  { name: 'Steven', imgSrc: steven },
  { name: 'Hella J', imgSrc: hellaJ }
];
const Contacts = () => {
  const renderContacts = () => {
    return contacts.map((contact, i) => {
      return (
        <Wrapper key={contact.imgSrc} isDark={i > 2}>
          <Avatar src={contact.imgSrc} />
          <Name>{contact.name}</Name>
        </Wrapper>
      );
    });
  };

  return (
    <Container>
      <Wrapper style={{ marginLeft: '0', flex: '0' }}>
        <Button type="circle" diameter="48px" isTransparent={true}>
          <Add />
        </Button>
        <Name>Add</Name>
      </Wrapper>
      <List>{renderContacts()}</List>
    </Container>
  );
};

export default Contacts;
