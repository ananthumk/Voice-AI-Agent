import OpenAI from "openai"
import dotenv from "dotenv"
dotenv.config()

const openai = new OpenAI({
 apiKey:process.env.OPENAI_API_KEY
})

export async function detectIntent(text:string){

 const response = await openai.responses.create({

  model:"gpt-4.1-mini",

  input:`
Extract appointment intent.

Message: ${text}

Return JSON only.

{
 "intent":"",
 "doctor_id":"",
 "date":"",
 "time":""
}
`
 })

 return response.output_text

}