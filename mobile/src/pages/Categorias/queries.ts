import { gql } from '@apollo/client'

export default {
  getCategorias: gql`
        query ($page: Int){
            getCategorias (page: $page){
               categorias {
                _id
                name
                icon
               }

               pageDatas {
                   pageAtual,
                   pageTotal
               }

            }
        }
    `
}
