var barcode = require('./barcode');


function convert_length(length) {
  return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
}

function barc(id, code, width, height,res) {
  barcode.code128(wx.createCanvasContext(id), code, convert_length(width), convert_length(height),res)
}

function qrc(id, code, width, height) {
  qrcode.api.draw(code, {
    ctx: wx.createCanvasContext(id),
    width: convert_length(width),
    height: convert_length(height)
  })
}

module.exports = {
  barcode: barc,
  qrcode: qrc
}