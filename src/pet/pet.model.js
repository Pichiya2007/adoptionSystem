import { Schema, model } from 'mongoose';

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

PetSchema.methods.toJSON = function(){
    const { _id, ...pet } = this.toObject();
    pet.id = _id;
    return pet;
}

export default model('Pet', PetSchema);