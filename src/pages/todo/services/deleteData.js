import axios from 'axios'

const deleteData = async url => {
  try {
    const response = await axios.delete(url)
    return response.data
  } catch (error) {
    throw new Error('Error deleting data: ' + error.message)
  }
}

export default deleteData
