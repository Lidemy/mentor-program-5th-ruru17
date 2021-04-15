## 跟你朋友介紹 Git

* 版本控制可以理解成資料夾，或者是在遊戲中打任務副本的概念，每個人的副本場景設計、劇情、音樂都一致 `git clone`，但看玩家如何玩出自己的一片天。  
* 每次的遊戲進度存檔就是 `git commit` `git push`，下一次登入遊戲時，玩家身分登陸經由遊戲server 驗證身分，將玩家上次的存檔及裝備等等的同步給玩家，可理解成 `git pull`。  
* 任務完成了，將任務成果交給 NPG，讓NPG 發布下個任務或者給提示，同時算酬勞給你，可理解成 `git merge` 然後再度 `git pull` 下一個任務副本。  
* 以下介紹指令：  
`git add .`  
`git commit -m "此次修改內容描述"` 以上兩行可合併寫成 `git commit -am "此次修改內容描述"`  
`git push origin mybranch` 將此次commit資料，同步到雲端〈通常為 github 或 bitbucket，看 repo 放哪裡〉  
`git pull origin mybranch` 將雲端資料同步至本地端  
`git checkout branchname` 切換任務線，比方說穩定版本通常稱為 master 或為 main，業界常分為三大branch，像是測試階段的 stage branch，模擬正式環境的preprod branch，正式環境的production 或 master，或者專給開發使用的 develop branch。從哪個大分支切分支出來，自己可以從本地端操作，可用 `git checkout -b newbranch`  

`git merge newbranch` 當確認此次修 bug 告一段落，或者開發功能完成了，就要合併分支讓下一位用的人可以拿到最新最穩定的副本，此時可以先切換到大分支，人在其位謀其正嘛！在執行 `git checkout stage` 以後，將剛剛自己修改的分支內容〈已經過 commit 且push 到 newbranch 遠端後〉，就可執行 merge: `git merge newbranch`；而在執行 `git merge` 指令以後，可能發生兩種情況，一種是發生衝突 conflict、另一種是提醒你遠端還有檔案，你沒有同步到。  
1. 發生衝突 conflict，同時多人改同一份檔案，衝突發生是指剛好改動同處程式碼，此時需解衝突，判斷提示的地方須保留或刪除，並做一個新的commit，再 `git push origin mybranch` 同步到遠端。  
2. 提醒你遠端還有檔案，你沒有同步到：養成好習慣，checkout 切換分支後，要先下指令 `git pull origin mybranch` 將遠端資料同步到本地端。  

`git log` 可看到歷史紀錄，也可以看到每一次 commit 的 sha 值。  
`git reset sha` 當要回復到前面功能穩定的版本，可以用此指令回復之前狀態，執行後可能會提示兩種情況：untracked 與 被刪除或移動的檔案列表，會顯示紅色，需要處理成沒有紅色的狀況，可用 `git status` 檢視；因為雖然回復到之前的版本，但這段時間有調整的檔案卻仍存在，所以才會出現此種情況。  

可用 git 遊戲來練習  
> 操作說明: https://sealman234.github.io/2019-10-29-learn-git-branching/  
> git 小遊戲: https://learngitbranching.js.org/?locale=zh_TW  
