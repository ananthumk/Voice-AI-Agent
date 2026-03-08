import { bookAppointment } from "../scheduler/appointmentEngine"

export async function routeTool(intent:any){

 if(intent.intent==="book_appointment"){

  return await bookAppointment(

   "patient1",
   intent.doctor_id,
   intent.date,
   intent.time

  )

 }

}