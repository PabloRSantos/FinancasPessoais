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
        icon: '1zXeqnvgl_dWhMiAL2FpAciZi8mz8L3h4'
      },

      {
        name: 'Moradia',
        global: true,
        icon: '1uaVVIui6Cey5z39lowSnp3h17-C_XZQQ'
      },

      {
        name: 'Supermercado',
        global: true,
        icon: '1gmk7iU4shG0LpVcb7HLcSXsmSmo0htqS'
      },
      {
        name: 'TV',
        global: true,
        icon: '1CoH_W8ZZxJP9gTfp0TPnWib9iJGEad0o'
      },
      {
        name: 'Internet',
        global: true,
        icon: '10oy5w1HlP9lXeFrmKO4PWR13Z3jFAjg_'
      },
      {
        name: 'Telefone',
        global: true,
        icon: '1mTtLSPolg5BaK4CO2DkZ_fqA1jeqVBNt'
      },
      {
        name: 'Transporte',
        global: true,
        icon: '1UWL2wDHBJkPtQ3FVYggb50cdMaOFOIta'
      },
      {
        name: 'Saúde',
        global: true,
        icon: '1c0gUdvIJvzM7SMEI0lynbr6boo4AXSD7'
      },
      {
        name: 'Bares e Restaurantes',
        global: true,
        icon: '1Ld6PDcsP2fRoL_6kboZ8o5cRjYZdujU-'
      },
      {
        name: 'Beleza',
        global: true,
        icon: '10oy5w1HlP9lXeFrmKO4PWR13Z3jFAjg_'
      }
    ]
  }
]
