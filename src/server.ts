import app from './app';
import {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = parseInt(process.env.PORT || "10000", 10 );

interface AppError extends Error {
    status?: number;
}

app.get('/', (_req: Request, res: Response) => {
    res.send('Payment, Payout, and Refund integration');
    console.log('Payment, Payout, and Refund integration')
});

app.use((err: AppError, _req: Request, res: Response, _next: NextFunction)=>{
    console.error(err);
    res.status(err.status || 500)
    res.json({
        error: err.message || 'Internal Server Error'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});