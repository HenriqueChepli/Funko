import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import imageFunko1 from '../assets/img/images.jpeg'

export const useFunkotore = defineStore('funko', () => {
  const funkos = ref([
    {
      id: 1,
      name: 'Funko Pop! Harry Potter - Harry Potter',
      price: 10.99,
      image: imageFunko1,
      description: 'Harry Potter with glasses and a wand.',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Funko Pop! Harry Potter - Hermione Granger',
      price: 10.99,
      image: imageFunko1,
      description: 'Hermione Granger with a book.',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Funko Pop! Harry Potter - Ron Weasley',
      price: 10.99,
      image: imageFunko1,
      description: 'Ron Weasley with a wand.',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Funko Pop! Harry Potter - Albus Dumbledore',
      price: 10.99,
      image: imageFunko1,
      description: 'Albus Dumbledore with a wand.',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Funko Pop! Harry Potter - Severus Snape',
      price: 10.99,
      image: imageFunko1,
      description: 'Severus Snape with a potion.',
      quantity: 1,
    },
  ])

  return { funkos }
})
