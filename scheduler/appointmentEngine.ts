import Appointment from "../backend/models/Appointment"
import DoctorSchedule from "../backend/models/DoctorSchedule"

export async function bookAppointment(
 patient_id:string,
 doctor_id:string,
 date:string,
 time:string
){

 const doctor = await DoctorSchedule.findOne({doctor_id,date})

 if(!doctor) throw new Error("Doctor not available")

 if(!doctor.available_slots.includes(time))
  throw new Error("Slot unavailable")

 const appointment = await Appointment.create({

  patient_id,
  doctor_id,
  date,
  time,
  status:"booked"

 })

 return appointment

}