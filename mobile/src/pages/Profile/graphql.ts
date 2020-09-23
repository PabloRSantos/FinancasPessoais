import { gql } from '@apollo/client'

export default {
  query: gql`
        query {
            user {
                name,
                email,
                password
            }
        }
    `
}
