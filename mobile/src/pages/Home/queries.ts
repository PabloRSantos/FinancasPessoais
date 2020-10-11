import { gql } from '@apollo/client'

export default {
  query: gql`
        query ($filters: Filters, $categoriasPage: Int, $isNegative: Boolean) {
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

            getCategorias (page: $categoriasPage){
                categorias {
                    _id,
                    name,
                    icon
                }
            }

            getUser (isNegative: $isNegative){
                saldo
                name,
                email
            }
        }
    `
}
