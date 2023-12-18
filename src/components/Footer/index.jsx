import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container maxWidth="lg">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <img
              className="w-full lg:w-1/4"
              src="../logo1ok.png"
              alt="Fly Alone"
            />
            <p className="mt-2"></p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Alas y Moda.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
