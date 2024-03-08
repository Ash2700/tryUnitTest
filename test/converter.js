const assert = require('assert')
const converter = require('../app/converter')

describe('Color Code Converter', () => {
  describe('RGB to Hex conversion', () => {
    it('converts ths basic colors' , () =>{
      const redHex = converter.rgbToHex(255, 0 , 0)
      const greenHex = converter.rgbToHex(0, 255, 0)
      const blueHex = converter.rgbToHex(0, 0, 255) 

      assert.equal(redHex,'ff0000')
      assert.equal(greenHex, '00ff00')
      assert.equal(blueHex, '0000ff')
    })
  })

  describe('Hex to RGB conversion', () => {
    it('converts the basic colors', () => {
      const red = converter.hexToRgb('ff0000')
      const green = converter.hexToRgb('00ff00')
      const blue = converter.hexToRgb('0000ff')

      assert.deepEqual(red,[255, 0, 0])
      assert.deepEqual(green, [0, 255, 0])
      assert.deepEqual(blue, [0, 0, 255])
    })
  })
}) 