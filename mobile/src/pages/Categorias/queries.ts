import { gql } from '@apollo/client'

export default {
  getCategorias: gql`
        query {
            categorias {
                _id
                name
                icon
            }
        }
    `
}
