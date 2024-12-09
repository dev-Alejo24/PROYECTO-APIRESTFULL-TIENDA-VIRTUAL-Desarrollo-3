import bcrypt from 'bcrypt';
import { GetLoginSql } from '../infra/loginSql';
import { CreateUserSql } from '../infra/createUser';
import { CreatePeopleSql } from '../infra/createPeople';

export const registerUser = async (userData: {
    firstName: string,
    middleName:string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
    typeId: number,
    identificationNumber: string,
    addressId: number,
}): Promise<any> => {
    const {
 firstName, middleName, lastName, phone, email, password, typeId, identificationNumber, addressId,
} = userData;

    const userSelect = new GetLoginSql();
    const existingUser = await userSelect.getLoginSql(email);

    if (existingUser) {
        throw new Error('Usuario existente');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    interface CreateUser {
        user: {
            id?: number,
            email: string,
            password: string,
        },
        people: {
            userId?: number,
            typeId: number,
            identificationNumber: string,
            firstName: string,
            middleName: string,
            lastName: string,
            email?: string,
            phone: string,
            addressId: number;
        },
    }

    const createUser = new CreateUserSql();
    const createPeopleSql = new CreatePeopleSql();

    const dataUser : CreateUser = {
        user: {
            email,
            password: hashedPassword,
        },
        people: {
            userId: null,
            typeId,
            identificationNumber,
            firstName,
            middleName,
            lastName,
            email,
            phone,
            addressId,
        },
    };

    const user = await createUser.createUserSql(dataUser.user);

    dataUser.people.userId = user.dataValues.id;

    const people = await createPeopleSql.createPeopleSql(dataUser.people);

    const response = {
        userId: user.dataValues.id,
        peopleId: people.dataValues.id,
    };

    return response;
};
