import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio.']
    },
    correo: {
        type: String,
        require: [true, 'El correo es obligatorio.'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria.']
    },
    img: {
        type: String
    },
    phone: {
        type: String,
        minLength: 8,
        maxLength: 8,
        require: true
    },
    role: {
        type: String,
        require: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function() {
    const {__v, password, _id, ...usuario} = this.toObject();
    usuario.uid = _id;
    return usuario;
}

export default mongoose.model('User', UserSchema);