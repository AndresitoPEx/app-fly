import React from 'react';
import Layout from '../../components/Layout';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Typography, TextField, Button, Grid } from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto p-10 bg-gray-200">
        <Typography variant="h1" className="text-4xl font-bold mb-8 text-center">
          ¡Contáctanos!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className="space-y-4">
              <Typography variant="h2" className="text-2xl font-bold">
                Detalles de contacto
              </Typography>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-2xl text-gray-700" />
                <Typography variant="body1">Dirección: Av. José Olaya #907, Huancayo, Perú</Typography>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-gray-700" />
                <Typography variant="body1">Email: info@alasymoda.com</Typography>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-gray-700" />
                <Typography variant="body1">Teléfono: +51 123 456 789</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography variant="h2" className="text-2xl font-bold mb-4">
                Envíanos un mensaje
              </Typography>
              <form className="space-y-4">
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  size="small"
                  placeholder="Tu nombre"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  type="email"
                  placeholder="Tu email"
                />
                <TextField
                  label="Mensaje"
                  variant="outlined"
                  fullWidth
                  size="small"
                  multiline
                  rows={4}
                  placeholder="Tu mensaje"
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ width: '100%' }}
                  type="submit"
                >
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
};

export default Contact;
