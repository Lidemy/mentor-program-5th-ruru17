/*練習二 BMI計算*/
function count(high,kg) {
  var HIGH=(high/100)
  var BMI=(kg/(HIGH*HIGH))
  console.log(BMI)
  if (BMI >= 35) {
    console.log('重度肥胖')
  } else if (BMI >= 30) {
      console.log('中度肥胖')
  } else if (BMI >= 27) {
    console.log('輕度肥胖')
  } else if (BMI >= 24) {
    console.log('過重')
  } else if (BMI >= 18.5) {
    console.log('正常範圍')
  } else {
    console.log('體重過輕')
  }
}
count(180,75)
