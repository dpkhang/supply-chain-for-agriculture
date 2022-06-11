import { DataTypes, Sequelize } from 'sequelize';
class AutoInCrement {
    id = {
        type: DataTypes.INTEGER,
        autoInCrement: true
    }
} 

class BaseEntity extends AutoInCrement {
    createdAt = {
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