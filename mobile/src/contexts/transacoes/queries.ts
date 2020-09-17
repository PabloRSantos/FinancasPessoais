import { gql } from '@apollo/client'

export default {
  createTransacao: gql`
        mutation ($valor: String, $title: String, $isCompleted: Boolean, $categoriaId: String, $isNegative: Boolean) {
            createTransacao(transacao: {
                valor: $valor,
                title: $title,
                isCompleted: $isCompleted,
                isNegative: $isNegative
                categoriaId: $categoriaId
             }){
                _id
            }
        }
    `
}
