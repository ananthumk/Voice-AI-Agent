import { Request,Response } from "express"

import { speechToText } from "../../services/speech_to_text/deepgram"
import { detectLanguage } from "../../services/language_detection/detect"
import { detectIntent } from "../../services/ai/openai"
import { routeTool } from "../../agent/toolRouter"
import { textToSpeech } from "../../services/text_to_speech/elevenlabs"

export const handleVoice = async(req:Request,res:Response)=>{

 const audio=req.file?.path!

 const transcript = await speechToText(audio)

 const language = detectLanguage(transcript)

 const rawIntent = await detectIntent(transcript)

 const intent = JSON.parse(rawIntent)

 const result = await routeTool(intent)

 const reply = `Your appointment is confirmed`

 const audioReply = await textToSpeech(reply)

 res.json({

  transcript,
  language,
  intent,
  result,
  reply,
  audioReply

 })

}