import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
// import {userRoutes} from 'routes/users.ts'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;
  }
}>()

app.get('/api/v1/getAllUsers', async(c)=>{
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
  try {
    const AllUser = await prisma.user.findMany({})
    return c.json({users:AllUser});
  } catch (error) {
   
    c.status(403);
    return c.json({error:error});
  }
})

app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
        name:body.name,
				password: body.password
			},
      select:{
        id:true,
        name:true,
        email:true
      }
		});
	
		return c.json({data:user})
	} catch(e) {
    c.status(403);
		return c.json({error:e});
	}
})

export default app
