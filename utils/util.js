let expressdata = require('./express')
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getExpressKeys = () => {
  return Object.keys(expressdata)
}

const getExpressValueByKey = (key) => {
  return expressdata[key]
}

module.exports = {
  formatTime: formatTime,
  getExpressKeys: getExpressKeys,
  getExpressValueByKey: getExpressValueByKey
}
