import { GoogleGenerativeAI } from '@google/generative-ai'
import { AI_STUDIO_API_KEY } from '../../secrets.js'

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(AI_STUDIO_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-pro"})

export async function generateText(req, res) {
    const prompt = req.body.prompt || "Write a story about a magic backpack."
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    res.send({ text })
}
