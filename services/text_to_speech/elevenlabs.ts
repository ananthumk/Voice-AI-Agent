import axios from "axios"
import fs from "fs"

export async function textToSpeech(text:string){

 const response = await axios({

  method:"post",

  url:"https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",

  headers:{
   "xi-api-key":process.env.ELEVENLABS_API_KEY,
   "Content-Type":"application/json"
  },

  data:{ text },

  responseType:"arraybuffer"

 })

 const file="response.mp3"

 fs.writeFileSync(file,response.data)

 return file

}