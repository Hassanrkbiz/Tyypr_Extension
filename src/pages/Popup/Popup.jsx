import React from 'react';
import logo from '../../assets/img/logo.svg';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import Content from 'rsuite/Content';
import Footer from 'rsuite/Footer';
import './Popup.css';
import Welcome from './screens/welcome';
import TyyprPage from './screens/tyyprPage';
import OwnerPage from './screens/ownerPage';


const Popup = () => {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
};

export default Popup;
