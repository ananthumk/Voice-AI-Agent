import mongoose from "mongoose"

const AppointmentSchema = new mongoose.Schema({

 patient_id: String,
 doctor_id: String,
 date: String,
 time: String,
 status: String

})

export default mongoose.model("Appointment", AppointmentSchema)