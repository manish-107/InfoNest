import { Hono } from 'hono';
import { userRouter } from './routes/users';
import { blogRouter } from './routes/blogs';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS for all routes
app.use(cors({
  origin: '*', // Allow all origins
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  allowHeaders: ['Content-Type', 'Authorization'], // Allow these headers
}));

// Define routes
app.route('/api/v1/blog', blogRouter);
app.route('/api/v1/user', userRouter);

export default app;
