import express from 'express'
import cors from 'cors'
import { generateText } from './src/ai/index.js'

const PORT = process.env.PORT || 3005

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/story', generateText)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ...`)
})
