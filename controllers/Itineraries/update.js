import Itinerary from "../../models/Itinerary.js";

const updatePhoto = async (req, res, next) => {
    try {
        await Itinerary.updateOne(
            { _id: req.params.id },
            { photo: req.body.photo }
        )
        return res.status(200).json({
            response: 'Updated'
        })
    } catch (error) {
        next(error)
    }
}


// const updateAndFindOne = async (req, res, next) => {
//     try {
//         let upd = await Itinerary.findOneAndUpdate(
//             { _id: req.params.id },
//             req.body,
//             { new: true }
//         )
//         if (upd) {
//             return res.status(200).json({
//                 response: upd
//             })
//         } else {
//             return res.status(404).json({
//                 response: 'Not Found'
//             })
//         }
//     } catch (error) {
//         next(error)
//     }
// }
const addActivityToItinerary = async (req, res, next) => {
    try {
        // Actualiza el itinerario, añadiendo el nuevo ID de actividad al array
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.id, // ID del itinerario
            { $push: { activities: req.body.activityId } }, // Añade el ID de la actividad al array
            { new: true } // Devuelve el documento actualizado
        ).populate('activities', ""); // Carga las actividades referenciadas

        if (updatedItinerary) {
            return res.status(200).json({
                response: updatedItinerary
            });
        } else {
            return res.status(404).json({
                response: 'Itinerario no encontrado'
            });
        }
    } catch (error) {
        next(error);
    }
};

export { updatePhoto, addActivityToItinerary }