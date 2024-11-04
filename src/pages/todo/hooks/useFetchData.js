import { onMounted, ref } from 'vue'
import fetchData from '../services/fetchData'

export default function useFetchData() {
  const data = ref(null)
  const isLoading = ref(false)
  const isError = ref(false)

  const fetchPokemon = async count => {
    const promises = []
    for (let i = 1; i <= count; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`
      promises.push(fetchData(url))
    }

    const results = await Promise.all(promises)
    return results.map(result => ({
      name: result.name,
      image: result.sprites['front_default'],
      type: result.types.map(type => type.type.name).join(', '),
      id: result.id,
    }))
  }

  const getData = async () => {
    isLoading.value = true
    isError.value = false

    try {
      data.value = await fetchPokemon(150)
    } catch (error) {
      isError.value = true
      console.error(error.message)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    getData()
  })

  return {
    data,
    isLoading,
    isError,
  }
}
