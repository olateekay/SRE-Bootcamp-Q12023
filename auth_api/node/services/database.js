import Sequelize from 'sequelize';
import { dbConfig } from '../config/config';

const sequelize = new Sequelize(dbConfig);

export default sequelize;