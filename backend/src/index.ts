import { Hono } from 'hono'
// import {userRoutes} from 'routes/users.ts'

const app = new Hono()

// app.route('/user',userRoutes);

app.get('/',(c)=>{
  return c.text('hello');
})



export default app
