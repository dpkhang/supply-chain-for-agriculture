import { DataTypes, Model, Sequelize } from 'sequelize';

class BaseEntity {
    created_at = {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    };

    updated_at = {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    };
}

export {
    BaseEntity
}