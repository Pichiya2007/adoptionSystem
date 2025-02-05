import { Schema, model, version } from 'mongoose';

const PetSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requirded: true
    },
    age: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        uppercase: true,
        required: true
    },
    keeper: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},  {
    timestamps: true,
    versionKey: false
});

export default model('Pet', PetSchema);