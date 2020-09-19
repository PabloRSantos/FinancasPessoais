import { gql } from '@apollo/client'

export default {
  createTransacao: gql`
        mutation ($valor: String, $title: String, $date: Date, $categoriaId: any, $isNegative: Boolean) {
            createTransacao(transacao: {
                valor: $valor,
                title: $title,
                isNegative: $isNegative,
                categoriaId: $categoriaId,
                date: $date
             }){
                _id
            }
        }
    `
}
