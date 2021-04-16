## HW4：跟你朋友介紹 Git
### GIT 概念說明
* 版本控制可以理解成資料夾，或者是在遊戲中打任務副本的概念，每個人的副本場景設計、劇情、音樂都一致 `git clone`，但看玩家如何玩出自己的一片天。
* 每次的遊戲進度存檔就是 `git commit` `git push`，下一次登入遊戲時，玩家身分登陸經由遊戲server 驗證身分，將玩家上次的存檔及裝備等等的同步給玩家，可理解成 `git pull`。
* 任務完成了，將任務成果交給 NPG，讓NPG 發布下個任務或者給提示，同時算酬勞給你，可理解成 `git merge` 然後再度 `git pull` 下一個任務副本。
### 介紹 GIT 指令：
`git add .` 將此次異動檔案全部加入此次要 commit 的範圍，就是加入版本控制的意思。  
`git commit -m "此次修改內容描述"` 以上兩行可合併寫成 `git commit -am "此次修改內容描述"`  
`git push origin mybranch` 將此次commit資料，同步到雲端〈通常為 github 或 bitbucket，看 repo 放哪裡〉  
`git pull origin mybranch` 將雲端資料同步至本地端  
`git checkout branchname` 切換任務線，比方說穩定版本通常稱為 master 或為 main，業界常分為三大branch，像是測試階段的 stage branch，模擬正式環境的preprod branch，正式環境的production 或 master，或者專給開發使用的 develop branch。從哪個大分支切分支出來，自己可以從本地端操作，可用 `git checkout -b newbranch`  

`git merge newbranch` 當確認此次修 bug 告一段落，或者開發功能完成了，就要合併分支讓下一位用的人可以拿到最新最穩定的副本，此時可以先切換到大分支，人在其位謀其政嘛！  
在執行`git checkout commit-sha值` 可於 `git log` 查到你欲回復到某個版本的狀態 `commit`，而此亂數sha值就可用於 `checkout`；而另一種 checkout 的用法是切換分支。  
`git checkout stage` 以後，將剛剛自己修改的分支內容〈已經過 commit 且 push 到 newbranch 遠端後〉，就可執行 merge: `git merge newbranch`；而在執行 `git merge` 指令以後，可能發生兩種情況，一種是發生衝突 conflict、另一種是提醒你遠端還有檔案，你沒有同步到。  
1. 發生衝突 conflict，同時多人改同一份檔案，衝突發生是指剛好改動同處程式碼，此時需解衝突，判斷提示的地方須保留或刪除，並做一個新的commit，再 `git push origin mybranch` 同步到遠端。
2. 提醒你遠端還有檔案，你沒有同步到：養成好習慣，checkout 切換分支後，要先下指令 `git pull origin mybranch` 將遠端資料同步到本地端。

`git log` 可看到歷史紀錄，也可以看到每一次 commit 的 sha 值；可將每次 commit 視為一個個資料夾，每一次資料夾透過 `git pull` 進行同步，會保有舊有的進度並且是最新版本。  
`git log -oneline` 可以看簡短的紀錄。  
`git reset sha` 當要回復到前面功能穩定的版本，可以用此指令回復之前狀態，執行後可能會提示兩種情況：untracked 與 被刪除或移動的檔案列表，會顯示紅色，需要處理成沒有紅色的狀況，可用 `git status` 檢視；因為雖然回復到之前的版本，但這段時間有調整的檔案卻仍存在，所以才會出現此種情況。  

### GIT 概念：branch 
以上介紹是單兵作業，若同時多工作業，要能好好協作且不衝突掣肘，就可善用 branch，例如當在開發新功能尚未完成時，此時某處需要修bug，不需要等待對方可各自同時進行作業且不干擾對方，可用不同資料夾理解，資料夾 A = branch A 負責開發新功能，資料夾 B = branch B 負責修 bug，這兩個資料夾的檔案均從已經穩定確認功能還可使用的branch (資料夾) 複製一份出來使用，所以不會對前面穩定版造成影響，且若 bug 怎樣都修不好，或者是部門對於開發的這個功能想要放棄不想保留，避免影響目前運行時，可用倒版方式回到之前可用的版本。舉例：  
`git branch` 看到目前所在的 branch 為 master  
`git branch A` 從穩定版 master 新建分支 A  
`git branch B` 從穩定版 master 新建分支 B  
`git checkout -b branch-name` 從所在分支新建分支 newbranch 且切換分支到 newbranch
可理解成一個個資料夾複製原本那一份改資料夾名稱，就保有原本的檔案且修改時又不會汙染穩定版的檔案唷。  
* 若以資料夾來理解，闡述 branch, commit, file 的關係，可看成是一層層：
這個 branch 資料夾在 4/16 的版本、在 2 天前的版本狀態 (commit)，而每次狀態的檔案 file 可讓使用者修改。更深一點的概念是，branch 是在每個commit 標上一個 branch tag，所以去除 tag 的時候，這些 commit 都還在，只是沒有標示他是哪個branch。〈此處 tag 只是記號的感覺，與軟體版本的tag 又不一樣，不要搞混〉
* 有些檔案不需要加入版本控制，持續忽略即可的檔案的話，可將檔案名或指定格式加入 `.gitignore` 檔案中。

### GIT 好用指令：
改過檔案後，可輸入 `git diff` 看到異動情況。  
`git branch -v` 可看到目前本地端所有 branch  
`git branch -d branch-name` 刪除指定 branch，會有本地端及遠端的差異。  
`fork` 可於github上操作，一般用於無權限取得資料時，可用 fork 方式回自己的 github 使用，可理解成用叉子叉一個蛋糕回自己盤子的概念，但在github上對方是不會受到影響的，不會像蛋糕一樣少一塊。  

### GIT 補充
* 可用 git 遊戲來練習
> 操作說明: https://sealman234.github.io/2019-10-29-learn-git-branching/
> git 小遊戲: https://learngitbranching.js.org/?locale=zh_TW