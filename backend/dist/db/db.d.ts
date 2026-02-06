import mongoose from "mongoose";
export declare const Transacation: mongoose.Model<{
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        type: "income" | "expense";
        amount: number;
        category: "Food" | "Rent" | "Salary";
        date: NativeDate;
        description: string;
        userId: mongoose.Types.ObjectId;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        type: "income" | "expense";
        amount: number;
        category: "Food" | "Rent" | "Salary";
        date: NativeDate;
        description: string;
        userId: mongoose.Types.ObjectId;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "income" | "expense";
    amount: number;
    category: "Food" | "Rent" | "Salary";
    date: NativeDate;
    description: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const User: mongoose.Model<{
    email: string;
    name: string;
    password: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    name: string;
    password: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    email: string;
    name: string;
    password: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    name: string;
    password: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    email: string;
    name: string;
    password: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    email: string;
    name: string;
    password: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        email: string;
        name: string;
        password: string;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        email: string;
        name: string;
        password: string;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    name: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    name: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map