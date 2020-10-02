const synth = window.speechSynthesis // 语音合成
const msg = new SpeechSynthesisUtterance() // 语音合成
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

 function handleStop(e){
     msg.text=e
     msg.lang='zh-CN'
     synth.cancel(msg)
 }

 /**
  *  根据条件判断应该说的话
  */
function sayTo(time){
    switch (time) {
        case '08:00':
          this.handleSpeak('早上好先生，现在是北京时间' + time)
          break
        case '12:00':
          this.handleSpeak('现在该吃饭午饭了，现在是北京时间' + time)
          break
        case '17:16':
          this.handleSpeak('现在该吃晚饭了，现在是北京时间' + time)
          break
        case '14:00':
          this.handleSpeak('也许你该休息了,现在是北京时间' + time)
        case '22:47':
          this.handleSpeak('你该洗澡去了,现在是北京时间' + time)
          break
        case '24:00':
          this.handleSpeak('现在该睡觉了，现在是北京时间' + time)
          break
      }
}

export {handleSpeak,handleStop,sayTo}