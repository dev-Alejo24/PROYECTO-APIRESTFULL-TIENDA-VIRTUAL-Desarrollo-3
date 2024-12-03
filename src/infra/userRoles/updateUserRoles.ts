import UserRole from '../../models/userRolesModel';
import { Transaction } from 'sequelize';
import sequelize from '../../config/database';

export class UpdateUserRolesSql {
  async updateUserRolesSql(userId: number, roleIds: number[]): Promise<number> {
    const transaction: Transaction = await sequelize.transaction();

    try {
      // Eliminar los roles existentes del usuario
      await UserRole.destroy({
        where: { userId },
        transaction,
      });

      // Insertar los nuevos roles del usuario
      const newRoles = roleIds.map((roleId) => ({
        userId,
        roleId,
      }));

      await UserRole.bulkCreate(newRoles, { transaction });

      // Confirmar la transacción
      await transaction.commit();

      return roleIds.length;
    } catch (error) {
      console.error('Error actualizando roles de usuario:', error);
      await transaction.rollback();
      throw new Error('No se pudieron actualizar los roles del usuario.');
    }
  }
}
