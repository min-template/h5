function a() {
  $('body').append('<h1>a</h1>')
}

function b() {
  $('body').append('<h1>b</h1>')
}

function getUrlPara() {
  return location.href.split('#')[0]
}

export {
  a,
  b,
  getUrlPara
}
