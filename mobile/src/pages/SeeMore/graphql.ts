import { gql } from '@apollo/client'

export default {
  TransacoesQuery: gql`
        query ($filters: Filters) {
            getTotalTransacoes (Filters: $filters) {
                transacoes {
                    valor,
                    title,
                    categoria {
                        _id,
                        name,
                        icon
                    },
                    isNegative,
                    date,
                    _id,
                }
                pageDatas {
                    pageAtual,
                    pageTotal
                }
                
            }
        }
    `
}
