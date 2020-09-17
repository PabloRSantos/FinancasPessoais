import seeder from 'mongoose-seed'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const mongoUrl = process.env.MONGO_URL as String

seeder.connect(mongoUrl, function () {
  seeder.loadModels([
    path.resolve(__dirname, '..', 'models', 'categorias')
  ])

  seeder.clearModels(['categorias'], function () {
    seeder.populateModels(data, function () {
      seeder.disconnect()
    })
  })
})

const data = [
  {
    model: 'categorias',
    documents: [
      {
        name: 'Lazer',
        global: true,
        icon: 'icon'
      },

      {
        name: 'Moradia',
        global: true,
        icon: 'icon'
      },

      {
        name: 'Supermercado',
        global: true,
        icon: 'icon'
      },
      {
        name: 'TV',
        global: true,
        icon: 'icon'
      },
      {
        name: 'Internet',
        global: true,
        icon: 'icon'
      },
      {
        name: 'Telefone',
        global: true,
        icon: 'icon'
      },
      {
        name: 'Transporte',
        global: true,
        icon: 'icon'
      },
      {
        name: 'Saúde',
        global: true,
        icon: 'icon'
      },
      {
        name: 'Bares e Restaurantes',
        global: true,
        icon: 'icon'
      },
      {
        name: 'Beleza',
        global: true,
        icon: 'icon'
      }
    ]
  }
]
