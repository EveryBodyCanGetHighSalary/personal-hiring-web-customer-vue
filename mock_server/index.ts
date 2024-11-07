import express from 'express';
import AuthController, { verification } from './auth/auth';
const app: express.Express = express();
const port = 3001;

// 用于解析JSON格式的请求体
app.use(express.json());
app.use(verification);
// app.get('/', (req: express.Request, res: express.Response) => {
//     res.send('Hello World!');
// });

AuthController(app);

app.listen(port, () => {
    console.log(`Local Mock Server listening on port ${port}`);
});
