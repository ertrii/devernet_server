import { DataTypes } from 'sequelize'

const { STRING, BOOLEAN, BIGINT } = DataTypes

export const ID = {
    type: BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
}

export const UNIQUE_NAME = {
    type: STRING(50),
    allowNull: false,
    unique: true
}

export const DELETED = {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
}

export const IMAGE_URL = {
    type: STRING(255),
    allowNull: false
}

export const EMAIL = {
    type: STRING(255),
    unique: true,
    validate: {
        isEmail: {
            msg: 'No es una dirección de corre electrónico'
        }
    },
    allowNull: true
}

export const ADDRESS = {
    type: STRING,
    allowNull: false
}

export const PHONE_NUMBER = {
    type: STRING(15),
    allowNull: false
}

export const PASSWORD = {
    type: STRING,
    allowNull: false
}

export const FOREIGN_KEY = {
    type: BIGINT,
    allowNull: false
}
