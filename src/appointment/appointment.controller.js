import Appointment from './appointment.model.js';
import User from '../users/user.model.js';
import Pet from '../pet/pet.model.js';

export const addAppointment = async (req, res) => {
    try {
        
        const { date, userId, petId, notes } = req.body;

        //Busca el usuario y la mascota por el id
        const user = await User.findById(userId);
        const pet = await Pet.findById(petId);


        //valida si el usuario y la mascota existen
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: 'Usuario no encontrado.'
            })
        }

        if (!pet) {
            return res.status(404).json({
                success: false,
                msg: 'Mascota no encontrado.'
            })
        }

        //crea la cita
        const appointment = new Appointment({
            date,
            user: userId,
            pet: petId,
            notes
        });

        //guarda la cita en la db
        await appointment.save();

        //mensaje de exito
        res.status(201).json({
            success: true,
            msg: 'Cita programada exitosamente.',
            appointment
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Error al programar la cita.',
            error
        })
    }
}