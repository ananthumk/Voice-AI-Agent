import axios from "axios"
import fs from "fs"

export async function speechToText(filePath: string) {
  try {
    const audio = fs.readFileSync(filePath)

    const response = await axios.post(
      "https://api.deepgram.com/v1/listen",
      audio,
      {
        headers: {
          Authorization: `Token ${process.env.DEEPGRAM_API_KEY}`,
          "Content-Type": "audio/wav"
        }
      }
    )

    const transcript =
      response.data.results.channels[0].alternatives[0].transcript

    return transcript || ""

  } catch (error) {
    console.error("Deepgram STT Error:", error)
    return ""
  }
}