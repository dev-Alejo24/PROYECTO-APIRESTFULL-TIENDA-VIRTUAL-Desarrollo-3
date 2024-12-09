import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { GetUserProfileSql } from '../infra/getUserProfileByUserId';
import { UpdateUserSql } from '../infra/updateUser';
import { UpdatePeopleSql } from '../infra/updatePeople';

dotenv.config();

export const updateUserProfile = async (
  userId: number,
  updateData: Partial<{
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string;
    typeId: number;
    identificationNumber: string;
    addressId: number;
  }>
): Promise<any> => {
  const user = new GetUserProfileSql();
  const userResponse = await user.getUserProfileSql(userId);
  console.log(userResponse, 'ur');
  if (!userResponse) {
    throw new Error('Usuario no encontrado');
  }

  let passwordFormat = '';
  if (updateData.password) {
    passwordFormat = await bcrypt.hash(updateData.password, 10);
  }

  interface UpdateUser {
    user: {
      id?: number;
      email?: string;
      password?: string;
    };
    people: {
      userId?: number;
      typeId?: number;
      identificationNumber?: string;
      firstName?: string;
      middleName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      addressId?: number;
    };
  }

  const data: UpdateUser = {
    user: {
      email: updateData.email || userResponse.email,
      password: passwordFormat || userResponse.password,
    },
    people: {
      userId,
      typeId: updateData.typeId || userResponse.people.typeId,
      identificationNumber: updateData.identificationNumber || userResponse.people.identificationNumber,
      firstName: updateData.firstName || userResponse.people.firstName,
      middleName: updateData.middleName || userResponse.people.middleName,
      lastName: updateData.lastName || userResponse.people.lastName,
      email: updateData.email || userResponse.people.email,
      phone: updateData.phone || userResponse.people.phone,
      addressId: updateData.addressId || userResponse.people.addressId,
    },
  };

  const updateUserData = new UpdateUserSql();
  const updatePeopleData = new UpdatePeopleSql();
  const updateUser = await updateUserData.updateUserSql(data.user, userId);
  await updatePeopleData.updatePeopleSql(data.people, userId);

  return updateUser;
};
