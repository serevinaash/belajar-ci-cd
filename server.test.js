const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)


it('Call the /youtube endpoint', async done => {
    const res = await request.get('/youtube')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, youtube indonesia!')
    done()
})

it('Call the /twitter endpoint', async done => { // New test for /twitter
    const res = await request.get('/twitter')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Hello, twitter indonesia!')
    done()
})

it('Call the / endpoint', async done => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
    expect(res.text).toBe('This App is running properly!')
    done()
})

it('Call the /ping endpoint', async done => {
    const res = await request.get('/ping')
    expect(res.status).toBe(200)
    expect(res.text).toBe('Pong!')
    done()
})

it('Call the /hello/:name endpoint with Serevina', async done => {
    const res = await request.get('/hello/Serevina')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello Serevina')
    done()
})