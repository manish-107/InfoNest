import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use(async (c, next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload:any = await verify(token, c.env.JWT_SECRET);
   
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', payload.id);
	await next()
});


blogRouter.post("/", async(c)=>{
    const userId = c.get('userId');
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    try {
        
   const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            imageUrl:body.imageUrl,
            authorId:userId,
        }
    })
    return c.json({
        id:blog.id
    })
    } catch (error) {
    
       return c.json({error:"enable to create blog"})
    }

})


blogRouter.put("/",async(c)=>{
    const userId = c.get('userId');
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

    try {
          const updateBlog = await prisma.post.update({
        where:{
            id:body.postid,
            authorId: userId
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


blogRouter.get("/post/:id", async(c)=>{
    const id = c.req.param("id");
      const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
        let post = await prisma.post.findUnique({
            where:{
                id:id
            }
          })
          return c.json({post})
})

blogRouter.post('/like', async(c)=>{
    const {postId} = await c.req.json();
    const userId = c.get('userId');
     const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    try {
        const likePost = await prisma.likePost.create({
            data:{
                userId:userId,
                postId:postId
            }
        })
        return c.json(
            likePost,201)
    } catch (error) {
       return c.json({
        error:"enable to like post"
       }) 
    }
})

blogRouter.post('/save', async(c)=>{
    const {postId} = await c.req.json();
    const userId = c.get('userId');
     const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    try {
        const savedPost = await prisma.savedPost.create({
            data:{
                savedUserId:userId,
                postId:postId
            }
        })
        return c.json({savedPost:savedPost})
    } catch (error) {
        c.status(503)
       return c.json({
        error:"enable to save post"
       }) 
    }
})


blogRouter.get('/savedPost', async(c)=>{
    const userId = c.get('userId');
      const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    try {
        const savedPosts = await prisma.savedPost.findMany({
        //     where:{
        //         savedUserId:userId
        //     }
        }) 
        return c.json({savedPosts:savedPosts});
    } catch (error) {
        c.status(503)
        return c.json({error:"unable to save post"})
    }
})