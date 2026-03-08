import mongoose from "mongoose"

const DoctorScheduleSchema = new mongoose.Schema({

 doctor_id: String,
 date: String,
 available_slots: [String]

})

export default mongoose.model("DoctorSchedule", DoctorScheduleSchema)