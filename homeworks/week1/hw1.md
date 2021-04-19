## 交作業流程

## HW1：交作業流程

### 第一步：安裝 git for windows
至 git 官網下載，有 Git Bash 可使用。  
> https://git-scm.com/downloads

是在自己環境的想要的路徑先下 `git init` 得到 git 環境檔案。  
該目錄即為你在本地端的 git registry。  

### github repo
順利在github創建帳號以後，會被拉進第五期的所在地可交作業，  
授權選取並加入後，可看到目錄後方有接上自己的使用者名稱，才是正確的。  
我的 github 交作業介面：Lidemy/mentor-program-5th-ruru17  
先將所有作業拉到自己的環境，選取綠色標記處 copy，並在自己的環境，下指令 `git clone 貼上連結`  
![](https://static.coderbridge.com/img/lyongru/003734371b204c0ba2dc13d1ccbd3906.png)  

拿到作業第一件事情，是先新建切換分支，以免干擾到穩定版本，之後寫作業及交作業也都是在該周為名的 branch ，例如：  
`git checkout -b week1`  

### 寫作業
這就要靠自己囉！  

#### 每次寫作業進度存檔

```
21 git add .
22 git commit -m "plus content"
23 git push origin week1
24 git add .
25 git commit -m "v1: draft"
26 git push origin week1
```
* 五份作業確認完成在執行下一步  

### 交作業

* 先在 github上選取 PR 請求後，複製上方的網址 (待會貼上 PR )
![](https://static.coderbridge.com/img/lyongru/03662ee12f094ba490686c6c95ede332.png)

* 交作業地方
![](https://static.coderbridge.com/img/lyongru/14169a32d77040ac8cef7345241771d1.png)

* 交作業前先自我檢測
![](https://static.coderbridge.com/img/lyongru/8933bfa07f4048188f00782306b82ed1.png)

將網址貼到交作業區，branch = week1  
已經交作業的那周 = branch week1 須 `git branch -d branchname` 砍掉 branch  
再以 `git checkout newbranch` 同步遠端拿到作業；此處 newbranch = 你要寫的week第幾周作業資料。  

* 等作業改完並且 merge 以後
切換到 master： `git checkout master`  
把最新的改動拉下來： `git pull origin master`  
刪除已經 merge 的 branch： `git branch -d hw1`  