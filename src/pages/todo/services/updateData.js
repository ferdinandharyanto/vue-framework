import axios from 'axios'

const updateData = async (url, payload) => {
  try {
    const response = await axios.put(url, payload)
    return response.data
  } catch (error) {
    throw new Error('Error updating data: ' + error.message)
  }
}

export default updateData
