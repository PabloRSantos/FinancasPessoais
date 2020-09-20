import { gql } from '@apollo/client'

export default {
  query: gql`
        query ($filters: Filters) {
            transacoes (Filters: $filters) {
                valor,
                title,
                isNegative,
                date,
                _id,
                categoriaId
            }

            user {
                saldo
            }
        }
    `
}
