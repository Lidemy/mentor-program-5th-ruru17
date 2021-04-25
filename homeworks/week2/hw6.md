``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. var i = 0 ; i < 6 ; i從第0個數開始到第5個數 共六個數 (此處源自於下方isValid[3,5,8,13,22,35]); 此處 i < 6 也就是 3.5.8.13.22.35 共 length-1 , 從第0個到第5個數字
2. 如果 arr的第i個位置的數字小於等於0, 就回傳 'invalid'
3. 迴圈將六個數字一個個放入, 判斷有無小於等於0, 若無, 無任何return.
4. 第二個判斷是對於數列的值來說, 前面兩個數之和是否相等第三個數字
5. var i = 2 ; i < 6 ; 待會迴圈範圍會從第2個數也就是8開始到最後第五位數也就是35
6. 如果 第二個數 8 不等於 第0個數加第1個數之和 (此處是3+5) , 則回傳 'invalid'
7. 若等於數列前兩個數相加, 則回傳 'valid'