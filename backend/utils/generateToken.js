import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'DamianLis@2021', {
    expiresIn: '30d',
  })
}

export default generateToken
