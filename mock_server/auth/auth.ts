import { Express, Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { readFileSync } from 'fs';
import path from 'path';
import { APIResponse } from '../api.types';
const secretKey = readFileSync(
    path.resolve(__dirname, './secretKey.txt'),
).toString();

/**
 * token颁发
 *
 * @param {string} userName
 * @param {string} email
 * @param {RoleType} roleType
 * @return {*}
 */
function generateJWT(userName: string, email: string, roleType: RoleType) {
    const token = jwt.sign(
        {
            email,
            userName,
            role: roleType,
        },
        secretKey,
        {
            expiresIn: 300,
        },
    );

    return token;
}

export function verification(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    if (request.originalUrl === '/auth') {
        next();
        return;
    }
    const token = request.headers.authorization;
    if (token) {
        try {
            jwt.verify(token.split(' ')[1], secretKey);
            next();
        } catch (error: unknown) {
            if (error instanceof TokenExpiredError) {
                response.status(401).send({
                    code: 401,
                    message: '当前会话已过期，请重新登录',
                });
            } else if (error instanceof JsonWebTokenError) {
                response.status(401).send({
                    code: 401,
                    message: '认证失败，请勿手动修改登录配置。即将重新登录',
                });
            }
        }
    } else {
        response.status(400).send({
            code: 400,
            message: '您当前尚未登录，请登录后重试',
        });
    }
}

const authCallback = (request: Request, response: Response) => {
    if (request.headers.authorization) {
        try {
            const token = request.headers.authorization.split(' ')[1];
            jwt.verify(token, secretKey);
            response.send({
                token,
            });
        } catch (error: unknown) {
            response.status(401).send({
                code: 401,
                message: '当前身份认证已过期，请重新登录',
            });
        }
    } else {
        const { password, email } = request.body;
        if (email === 'customer@qq.com' && password === 'customer123') {
            const userName = 'customer1';
            const token = generateJWT(userName, email, 'customer');
            response.send(<
                APIResponse<{
                    token: string;
                    userName: string;
                    roleType: RoleType;
                }>
            >{
                data: { token, userName, roleType: 'customer' },
                code: 200,
            });
        } else {
            response.status(400).send({
                code: 400,
                message: '该用户不存在！',
            });
        }
    }
};

const AuthController = (app: Express) => app.post('/auth', authCallback);

type RoleType = 'customer' | 'company' | 'admin';
export default AuthController;
