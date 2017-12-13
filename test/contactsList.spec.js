const request = require('supertest');
const router = require('../server');


describe('GET /contacts',()=>{
  it('GET ok ststus 200',(done)=>{
    request(router).get('/contacts')
    .expect(200)
    .then((res)=>{
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

  describe('GET /contacts',()=>{
    it('Get id:1 and ok status 200 if ok',(done)=>{
      request(router).get('/contacts/1')
      .expect(200)
      .then((res)=>{
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