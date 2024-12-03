import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { GetLoginSql } from '../infra/loginSql';

dotenv.config();

export const loginUser = async (loginData: { email: string; password: string }) : Promise<any> => {
    const { email, password } = loginData;
    //buscar email de user
    const user = new GetLoginSql();
    const userResponnse = await user.getLoginSql(email);
    console.log(userResponnse, 'userResponse');
    if (!userResponnse) {
        throw new Error('El usuario no exixte');
    }

    // verify password
    const isMatch = await bcrypt.compare(password, userResponnse.password);
    if (!isMatch) {
        throw new Error('Contraseña incorrecta');
    }

    //generar token
    const token = jwt.sign({ id: userResponnse.dataValues.id }, process.env.JWT_SECRET as string, { expiresIn: '1h'});
    return token;
}