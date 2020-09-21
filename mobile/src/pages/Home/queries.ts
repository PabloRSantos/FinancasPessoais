import { gql } from '@apollo/client'

export default {
  query: gql`
        query ($filters: Filters) {
            transacoes (Filters: $filters) {
                valor,
                title,
                categoria {
                    _id,
                },
                isNegative,
                date,
                _id,
            }

            categorias {
                _id,
                name,
                icon
            }

            user {
                saldo
            }
        }
    `
}
