import { gql } from '@apollo/client'

export default {
  mutation: gql`
        mutation ($TransacaoId: String) {
            deleteTransacao(TransacaoId: $TransacaoId) {
                title
             }
        }
    `
}
