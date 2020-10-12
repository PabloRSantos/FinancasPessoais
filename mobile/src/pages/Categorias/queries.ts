import { gql } from '@apollo/client'

export default {
  getCategorias: gql`
        query {
            getCategorias {
                _id
                name
                icon
            }
        }
    `
}
