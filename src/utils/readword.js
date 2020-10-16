
function voice (content) {
  window.top.location.href = 'http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex=' + content
}

export { voice }
