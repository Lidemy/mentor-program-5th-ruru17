/*練習一 判斷是否及格*/
function passornot(score) {
  if (score == 100) {
    console.log('you are no1!')
  } else if (score >= 60) {
      console.log('pass')
    } else {
    console.log('fail')
  }
}

passornot(59)
