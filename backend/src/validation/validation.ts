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
  type:z.enum(["expense","income"]),
  amount:z.number().positive("Postive Value required"),
  category:z.string().min(1,"Categoary required"),
  date:z.coerce.date("Invalid Date"),
  description:z.string().min(1,"Description required")

})