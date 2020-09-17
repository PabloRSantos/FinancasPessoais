import { gql } from '@apollo/client'

export default {
  SignUp: gql`
    mutation ($name: String, $email: String, $password: String){
      cadastro(user: {name:$name, email:$email, password:$password}){
        token
      }
    }
    `,

  SignIn: gql`
  mutation ($email: String, $password: String){
    login(email: $email, password: $password){
        token
    }
  }
  `,
  GetUser: gql`
      query User {
        user {
          name
        }
      }
    `
}

// const RegisterMutation = gql`
//     mutation Cadastro($user: registerData){
//         cadastro(user: $user){
//             token
//         }
//     }
// `
