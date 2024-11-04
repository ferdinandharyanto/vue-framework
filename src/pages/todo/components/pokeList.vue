<script setup>
import useFetchData from '../hooks/useFetchData'

const { data, isLoading, isError } = useFetchData()
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <div
      class="p-10 bg-white shadow-lg rounded-lg w-full h-full overflow-y-scroll"
    >
      <h1 class="text-2xl font-bold text-center mb-6">Pokémon List</h1>

      <div class="flex items-center pb-2 mb-4">
        <input
          type="text"
          placeholder="Enter your text"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div v-if="isLoading" class="text-center">Loading...</div>
      <div v-if="isError" class="text-red-600 text-center">
        Error loading Pokémon data.
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(pokemon, index) in data"
          :key="index"
          class="bg-gray-200 p-4 rounded-lg"
        >
          <h2 class="font-bold text-lg text-center capitalize">
            {{ pokemon.name }}
          </h2>
          <img :src="pokemon.image" alt="Pokémon image" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>
