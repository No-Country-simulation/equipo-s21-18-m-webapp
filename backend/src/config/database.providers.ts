import * as mongoose from 'mongoose'

export const dataProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb+srv://juanmapimientae:nocountrysonlomax123@fitloverdatabase.6eswm.mongodb.net/?retryWrites=true&w=majority&appName=FitLoverDatabase'),
    },
];