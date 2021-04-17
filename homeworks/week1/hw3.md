## 教你朋友 CLI

### 什麼是 command line

有別於用滑鼠操作 win 10 桌面的 GUI 圖形化介面，command line 完全以指令方式讓電腦執行任務。  
除了也是與電腦溝通的方式之一，對於電腦來說，指令介面較圖形化介面節省資源，若指令熟悉，完全可以比圖形化介面操作來的快。當然最重要的一點是，私以為工程師使用指令介面，飛速的敲指令感覺挺專業的，不是嗎？

#### 使用者與電腦溝通的介面

我們一般使用的圖形化介面像是 Windows 10，簡單說來是可以用滑鼠點選就可以操作。  
然因為圖形化介面需要比較多的電腦資源，且像是客戶端操作時有各種圖形化介面，一個個去學操作方式是很累的，如許多軟體都會有圖形化介面可操作，像是 redhat旗下的眾多服務、git 圖形化介面操作等等，不如就直接使用 command line 可以通盤使用。  

承上所說，也就是我們的 command line 指令介面。

![](https://static.coderbridge.com/img/lyongru/0a0d577a498848788fc5918d8fb85c0c.png)
> https://lidemy.com

### 怎麼用 command line

![](https://static.coderbridge.com/img/lyongru/326a5eb86ee44618970fc389a8e17a4b.png)

以 windows 10 的話，在搜尋欄搜尋 cmd ，並以管理者執行，便可使用。
若是 linux ，我一般常用 vmware workstation 虛擬機 安裝 centos 7 , 使用 command line

在此連結有許多指令可操作，均可與電腦溝通，讓電腦執行我們要他做的工作。
> http://linux.vbird.org/linux_basic/redhat6.1/linux_06command.php

若指令不確定如何使用，也可使用 `man` 加上要查詢的指令，便可得知用法。

### 如何達到預期效果？
需求： 用 command line 建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。

`mkdir wifi` 建立目錄 wifi
`cd wifi` 進入資料夾 wifi
`touch afu.js` 建立檔案
`cd ..` `ls` 驗證目前目錄及檔案是否順利創建