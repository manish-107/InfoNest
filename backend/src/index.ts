import { Hono } from 'hono'
import { userRouter } from './routes/users';
import { blogRouter } from './routes/blogs';

const app = new Hono();

app.route("api/v1/blog",blogRouter)
app.route("api/v1/user",userRouter)



export default app
