const url = 'http://localhost:4000/'
const request = require('supertest')(url)

describe('User tests', () => {
  test('get one user', async () => {
    const { body } = await request.post('/graphql')
      .send({ query: '{ user(id: "5f55a9468d694079af67cb93") {_id, name}}' })
      .set('Accept', 'application/json')
      .expect(200)

    expect(body.data.user).toBeTruthy()
  })
})
