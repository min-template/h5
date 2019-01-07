module.exports = function ajax(code = 0, data = null, msg = 'success') {
  return {
    code,
    data,
    msg
  }
}