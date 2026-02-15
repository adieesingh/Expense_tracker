import z from "zod";
export declare const userParse: z.ZodObject<{
    email: z.ZodString;
    name: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const signinParse: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const transcationParse: z.ZodObject<{
    type: z.ZodEnum<{
        expense: "expense";
        income: "income";
    }>;
    amount: z.ZodNumber;
    category: z.ZodString;
    date: z.z.ZodCoercedDate<unknown>;
    description: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=validation.d.ts.map