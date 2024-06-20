import  z  from "zod";

export const signupinput = z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string()
})

export const signininput = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const createbloginput = z.object({
    title:z.string(),
    content:z.string(),
    imageUrl:z.string(),
})


export const updateBlogInput = z.object({
    title:z.string().optional(),
    imageUrl:z.string().optional(),
    content:z.string().optional(),
    id:z.string()
})

export type CreateBlogInput = z.infer<typeof createbloginput>
export type SigninInput = z.infer<typeof signininput>
export type SignupInput = z.infer<typeof signininput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>