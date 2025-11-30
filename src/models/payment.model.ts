import { Schema, model } from "mongoose"

interface Payment {
    amount: number;
    currency: string;
    email: string;
    reference: string;
    status: string;
    paymentMethod: string;
    paidAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    metadata?: Record<string, any>;
}

const paymentModelSchema = new Schema<Payment>({
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paidAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    metadata: {
        type: Map,
        of: Schema.Types.Mixed
    }
})

const PaymentModel = model<Payment>('Payment', paymentModelSchema);

export default PaymentModel;