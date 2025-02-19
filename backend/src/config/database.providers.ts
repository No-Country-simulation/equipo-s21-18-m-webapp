import * as mongoose from 'mongoose'

export const dataProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`'${process.env.DATABASE_STRING}'`),
    },
];