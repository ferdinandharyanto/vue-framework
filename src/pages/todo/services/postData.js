import axios from 'axios'

const postData = async (url, payload) => {
  try {
    const response = await axios.post(url, payload)
    return response.data
  } catch (error) {
    throw new Error('Error submitting data: ' + error.message)
  }
}

export default postData
