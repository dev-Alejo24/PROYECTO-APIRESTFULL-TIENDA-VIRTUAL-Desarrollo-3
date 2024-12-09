import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import YAML from 'yamljs'; // Asegúrate de tener esta importación
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middlewares/errorHandler';
import userRoutes from './routes/userRoutes';
import rolesRoutes from './routes/rolesRoutes';
import userRolesRoute from './routes/userRolesRoutes';
import orderStatusRoutes from './routes/orderStatusRoutes';
import productCategoriesRoutes from './routes/productCategoriesRoutes';
import productsRoutes from './routes/productsRoutes';
import purcharseOrdersRoutes from './routes/purchareOrdesRoutes';
import orderDetailsRoutes from './routes/orderDetailsRoutes';
import addressRoutes from './routes/addressesRoutes';
import identificationTypeRoutes from './routes/identificationTypeRoutes';

const app: Application = express();

// Middlewares globales
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Rutas
app.use(userRoutes);
app.use(rolesRoutes);
app.use(userRolesRoute); // userRoles
app.use(orderStatusRoutes);// orderStatus
app.use(productCategoriesRoutes);// productCategories
app.use(productsRoutes);// products
app.use(purcharseOrdersRoutes);// purcharseOrders
app.use(orderDetailsRoutes);// orderDetails
app.use(addressRoutes);// address
app.use(identificationTypeRoutes);// identificationType

// swagger
const swaggerDocument = YAML.load('./docs/swagger.yaml'); // Asegúrate de que la ruta sea correcta
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Middleware para servir la documentación

// Middleware de manejo de errores
app.use(errorHandler);
app.get('/', (_req, res) => {
  res.send('Api Tienda Virtual Grupo 3');
});

export default app;
