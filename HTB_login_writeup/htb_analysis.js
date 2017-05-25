var _0xa89d = ["\x50\x4F\x53\x54", "\x6A\x73\x6F\x6E", "\x2F\x61\x70\x69\x2F\x69\x6E\x76\x69\x74\x65\x2F\x76\x65\x72\x69\x66\x79", "\x6C\x6F\x67", "\x61\x6A\x61\x78", "\x2F\x61\x70\x69\x2F\x69\x6E\x76\x69\x74\x65\x2F\x67\x65\x6E\x65\x72\x61\x74\x65"];

function verifyCode(_0x5b71x2) {
  var _0x5b71x3 = {
    "\x63\x6F\x64\x65": _0x5b71x2
  };
  $[_0xa89d[4]]({
    type: _0xa89d[0],
    dataType: _0xa89d[1],
    data: _0x5b71x3,
    url: _0xa89d[2],
    success: function(_0x5b71x4) {
      console[_0xa89d[3]](_0x5b71x4)
    },
    error: function(_0x5b71x4) {
      console[_0xa89d[3]](_0x5b71x4)
    }
  })
}

function makeCode() { //check this function
  $[_0xa89d[4]]({
    type: _0xa89d[0],
    dataType: _0xa89d[1],
    url: _0xa89d[5],
    success: function(_0x5b71x4) {
      console[_0xa89d[3]](_0x5b71x4)
    },
    error: function(_0x5b71x4) {
      console[_0xa89d[3]](_0x5b71x4)
    }
  })
}
