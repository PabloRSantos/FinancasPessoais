import jwt from 'jsonwebtoken'

export default function authUser (authHeader: String) {
  const auth = process.env.JWT_AUTH as string

  if (!authHeader) { return { error: 'Token não informado' } }

  const parts = authHeader.split(' ')

  if (parts.length !== 2) { return { error: 'Token inválido' } }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) { return { message: 'Erro no token' } }

  return jwt.verify(token, auth, (err, decoded) => {
    if (err) return { message: 'Token inválido' }

    const userId = decoded

    return userId as String
  })
}
