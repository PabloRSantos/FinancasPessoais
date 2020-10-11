import { gql } from '@apollo/client'

export default {
  query: gql`
        query {
            getUser {
                name,
                email,
                saldo
            }
        }
    `
}
