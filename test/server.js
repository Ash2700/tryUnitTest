const assert = require('assert')
const request = require('request')

describe('Color code converter API', () => {
  describe('RGB to Hex conversion', () =>{
    const url = 'http://localhost:3000/rgbToHex?red=255&green=255&blue=255'
    it('returns status 200', () => {
      request(url, (error, response, body) => {
        assert.equal(response.statusCode, 200)
        done()
      })
    })
    it('returns the color in hex', () => {
    request(url, (error, response, body) => {
      assert.equal(body, 'ffffff')
      done()
    })
    })
  })

  describe('Hex to RGB conversion', () => {
    const url = "http://localhost:3000/hexToRgb?hex=00ff00"
    it('returns status 200', () => {
      request(url, (error, response, body) => {
        assert.equal(response.statusCode, 200)
        done()
      }) 
    })
    it('returns the color in RGB', () => {
    request(url, (error, response, body) => {
      assert.equal(body, '[0,255,0]')
      done()
    })
    })
  })
}) 