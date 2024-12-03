import detonv from 'dotenv';
import app from './app';
import sequelize from './config/database';

detonv.config();

const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
    // Sincronizar modelos si usas ORM como Sequelize
    sequelize.sync()
      .then(() => {
        console.log('Modelos sincronizados.');
        // Iniciar el servidor
        app.listen(PORT, () => {
          console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
        });
      })
      .catch((err: Error) => {
        console.error('Error sincronizando los modelos:', err);
      });
  })
  .catch((err: Error) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });