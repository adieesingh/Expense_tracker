import z from "zod";

export const userParse = z.object({
  email: z.string().min(1, "This is not valid email").email("Email is not valid"),
  name: z.string().min(4, "This is not valid name"),
  password: z.string().min(8, "Minmum character password should be 8"),
});

export const signinParse = z.object({
  email: z.string().min(4, "This is not email").email("Emails is not valid"),
  password: z.string().min(8, "Min 8 character sshould be there"),
});

export const transcationParse= z.object({
  type:z.string().min(1,"Type required"),
  amount:z.number(),
  category:z.string(),
  date:z.coerce.date(),
  description:z.string()

})