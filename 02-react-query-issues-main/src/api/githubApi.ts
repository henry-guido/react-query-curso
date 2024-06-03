
import axios from 'axios'

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  }
})