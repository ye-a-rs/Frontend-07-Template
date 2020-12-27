### 学习笔记

---

#### 字典树

- 字典树 trie

  - 适用于大数量的字符串中查询出现次数

  - ```
    class Trie {
      constructor() {
        this.root = Object.create(null)
      }
      insert(word) {
        let node = this.root
        for (let c of word) {
          if (!node[c])
            node[c] = Object.create(null)
          node = node[c]
        }
        if (!($ in node))
          node[$] = 0

        node[$] ++
      }
      most() {
        let max = 0
        let maxWord = null
        let visit = (node, word) => {
          if (node[$] && node[$] > max) {
            max = node[$]
            maxWord = word
          }
          for (let p in node) {
            visit(node[p], word + p)
          }
        }
        visit(this.root, "")
        console.log(maxWord, max)
      }
    }
  ```
- KMP 字符串匹配
  - 适用于查找长字符串中是否匹配短字符串
  - ```
    function kmp(source, pattern) {
      // 计算table
      let table = new Array(pattern.length).fill(0)
      {
        let i = 1, j = 0

        while (i < pattern.length) {
          if (pattern[i] === pattern[j]) {
            ++j, ++i
            table[i] = j
          } else {
            if (j > 0)
              j = table[j];
            else {
              ++i;
            }
          }
        }
      }

      {
        let i = 0, j = 0;
        while(i < source.length) {
          if(pattern[j] === source[i]) {
            ++i, ++j;
          } else {
            if (j > 0)
              j = table[j]
            else
              ++i;
          }
          if (j === pattern.length)
            return true;
        }
        return false
      }
    }
    ```
- WildCard 带通配符匹配
  - 适用于给定带有 * 和 ？的字符串，查找是否匹配该字符串
  - ```
    function find(source, pattern) {
        let startCount = 0;
        for (let i = 0; i < pattern.length; i++) {
          if (pattern[i] === "*")
            startCount++;
        }
        if (startCount === 0) {
          for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== source[i] && pattern[i] !== "?") {
              return false
            }
          }
          return;
        }

        let i = 0;
        let lastIndex = 0;

        for (i = 0; pattern[i] !== "*"; i++) {
          if (pattern[i] !== source[i] && pattern[i] !== "?")
            return false
        }

        lastIndex = i

        for (let p = 0; p < startCount.length; p++) {
          i++;
          let subPattern = ""
          while (pattern[i] !== "*") {
            subPattern += pattern[i]
            i++;
          }

          let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\s]"), "g");
          reg.lastIndex = lastIndex;

          console.log(reg.exec(source));

          lastIndex = reg.lastIndex
        }
        for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] !== "*"; j++) {
          if (pattern[pattern.length - j] !== source[source.length - j] && pattern[pattern.length - j] !== "?") {
            return false
          }
        }
        return true
      }
    ```
