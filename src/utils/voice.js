const synth = window.speechSynthesis  // 语音合成
const msg = new SpeechSynthesisUtterance() // 语音合成
data = [{
  time: "08:00:00",
  note: "早上好",
  check: "2"
}]
var data
localStorage.getItem("hou") == null ? localStorage.setItem("hou", JSON.stringify(data)) : data = JSON.parse(localStorage.hou);

/**
 * 
 * @param {text}} text 
 */
function handleSpeak(text) {
  msg.text = text // 文字内容: 小朋友，你是否有很多问号
  msg.lang = 'zh-CN' // 使用的语言:中文
  msg.volume = 1 // 声音音量：1
  msg.rate = 1 // 语速：1
  msg.pitch = 1 // 音高：1
  synth.speak(msg) // 播放
}
/**
 * 停止语音
 */

function handleStop(e) {
  msg.text = e
  msg.lang = 'zh-CN'
  synth.cancel(msg)
}

/**
 *  根据条件判断应该说的话
 */
function sayTo(time) {
  data.forEach((item) => {

    [item.check] == 1 ? [item.time] == time ? handleSpeak('现在是' + time) : '' : ''
  })
}

function Waketime(time) {
  sayTo(time)
}
export {
  handleSpeak,
  handleStop,
  sayTo
}
