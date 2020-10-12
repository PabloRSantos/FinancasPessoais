import { gql } from '@apollo/client'

export default {
  query: gql`
        query ($filters: Filters, $isNegative: Boolean) {
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

            getFuturasTransacoes (Filters: $filters) {
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

            getTransacoesFinalizadas (Filters: $filters) {
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

            getCategorias {
                    _id,
                    name,
                    icon
            }

            getUser (isNegative: $isNegative){
                saldo
                name,
                email
            }
        }
    `
}
