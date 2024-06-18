import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'

export const blogRouter  = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET: string;
    }
}>();


blogRouter.use('/*', async(c,next)=>{
   await next();
})


blogRouter.post("/", async(c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

   const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            imageUrl:body.imageUrl,
            authorId:"0137e9bf-15e3-48e7-86af-0e4ba93e668c"
        }
    })

    return c.json({
        id:blog.id
    })
})


blogRouter.put("/",async(c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

    try {
          const updateBlog = await prisma.post.update({
        where:{
            id:body.postid,
        },
        data:{
            title:body.title,
            imageUrl:body.imageUrl,
            content:body.content
        }
    })
    return c.json({
        id:updateBlog.id
    })

    } catch (error) {
        c.status(403)
        return c.json({error:error});
    }
})


blogRouter.get("/bulk", async(c)=>{
     const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const blogs = await prisma.post.findMany({});
    return c.json({posts:blogs});
})