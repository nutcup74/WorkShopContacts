const request = require('supertest');
const router = require('../server');


describe('GET /contacts', () => {
    it('GET ok ststus 200', (done) => {
        request(router).get('/contacts')
            .expect(200)
            .then((res) => {
                let contacts = res.body
                let contact = contacts[0]
                expect(contacts instanceof Array).toBeTruthy()
                expect(contact.id).toBeDefined()
                expect(contact.name).toBeDefined()
                expect(contact.phone).toBeDefined()
                expect(contact.email).toBeDefined()
                expect(contact.url).toBeDefined()
                expect(contact.notes).toBeDefined()
                done()
            })
    })
})

describe('GET /contacts', () => {
    it('Get id:1 and ok status 200 if ok', (done) => {
        request(router).get('/contacts/1')
            .expect(200)
            .then((res) => {
                let contact = res.body
                expect(contact.id).toBeDefined()
                expect(contact.name).toBeDefined()
                expect(contact.email).toBeDefined()
                expect(contact.phone).toBeDefined()
                expect(contact.url).toBeDefined()
                expect(contact.notes).toBeDefined()
                done()
            })
    })
})

describe('POST /contacts', () => {
    it('Post id:12 and status 201 if ok ', (done) => {
        request(router).post('/contacts')
            .send([
                { id: 12, name: 'Nattapong', email: '58160388@go.buu.ac.th', phone: '087-483-6561', url: 'www.gojav.com', notes: 'i love you' },

            ])
            .expect(201)
            .then((res) => {
                let contact = res.body
                let contacts = contact[0]
                expect(contact).toBeDefined()
                expect(contacts.id).toBe(12)
                expect(contacts.name).toBe('Nattapong')
                expect(contacts.email).toBe('58160388@go.buu.ac.th')
                expect(contacts.phone).toBe('087-483-6561')
                expect(contacts.url).toBe('www.gojav.com')
                expect(contacts.notes).toBe('i love you')
                done()
            })
    })
})

describe('PUT /contacts', () => {
    it('Put id:12 go id:1 if ok status 200', (done) => {
        request(router).put('/contacts/1')
            .send({ id: 12, name: "Don'tShootME", email: '58160388@go.buu.ac.th', phone: '087-483-6561', url: 'www.gojav.com', notes: 'i love you 2' })
            .expect(200)
            .then((res) => {
                request(router).get('/contacts/1')
                    .then((res) => {
                        let contact = res.body
                        expect(contact).toBeDefined()
                        expect(contact.id).toBe(12)
                        expect(contact.name).toBe("Don'tShootME")
                        expect(contact.email).toBe('58160388@go.buu.ac.th')
                        expect(contact.phone).toBe('087-483-6561')
                        expect(contact.url).toBe('www.gojav.com')
                        expect(contact.notes).toBe('i love you 2')
                    })
                done()
            })
    })
})

describe('DELETE /contacts',()=>{
    it('Delete id:1 if ok status 204',(done)=>{
    request(router).delete('/contacts/1')
    .expect(204)
    .then((res)=>{
    request(router).get('/contacts/1')
    .then((res)=>{
      let contact = res.body
      expect(contact).toBeDefined()
      expect(contact.id).not.toBe(1)
    })
      done()
    })
  })
})