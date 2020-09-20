import { gql } from '@apollo/client'

export default {
  createTransacao: gql`
          mutation ($data: createTransacaoInput) {
              createTransacao(transacao: $data){
                  _id
              }
          }
      `
}
