import { DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';

export const User = sequelize.define('users', {
    idUser : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        validate : {
            notEmpty : true ,
            allowNull : true
        }
    },
    userName : {
        type: DataTypes.STRING 
    },
    userLastName : {
        type: DataTypes.STRING 
    },
    userEmail : {
        type: DataTypes.STRING,
        validate : {
            isEmail : true
        }
    },
    userPassword : {
        type: DataTypes.STRING 
    },
    userAddress : {
        type: DataTypes.STRING 
    },
    userPhoneNumber : {
        type: DataTypes.STRING 
    },
    userStatus : {
        type: DataTypes.BOOLEAN,
        defaultValue : true
    }
})