var StreamChecker = function(words) {
    const root = new TrieNode();
    for (const word of words) {
        let cur = root;
        for (let i = 0; i < word.length; i++) {
            const index = word[i].charCodeAt() - 'a'.charCodeAt();
            if (cur.getChild(index) === 0) {
                cur.setChild(index, new TrieNode());
            }
            cur = cur.getChild(index);
        }
        cur.setIsEnd(true);
    }
    root.setFail(root);
    const q = [];
    for (let i = 0; i < 26; i++) {
        if(root.getChild(i) != 0) {
            root.getChild(i).setFail(root);
            q.push(root.getChild(i));
        } else {
            root.setChild(i, root);
        }
    }
    while (q.length) {
        const node = q.shift();
        node.setIsEnd(node.getIsEnd() || node.getFail().getIsEnd());
        for (let i = 0; i < 26; i++) {
            if(node.getChild(i) != 0) {
                node.getChild(i).setFail(node.getFail().getChild(i));
                q.push(node.getChild(i));
            } else {
                node.setChild(i, node.getFail().getChild(i));
            }
        }
    }

    this.temp = root;
};

StreamChecker.prototype.query = function(letter) {
    this.temp = this.temp.getChild(letter.charCodeAt() - 'a'.charCodeAt());
    return this.temp.getIsEnd();
};

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(0);
        this.isEnd = false;
        this.fail;
    }

    getChild(index) {
        return this.children[index];
    }

    setChild(index, node) {
        this.children[index] = node;
    }

    getIsEnd() {
        return this.isEnd;
    }

    setIsEnd(b) {
        this.isEnd = b;
    }

    getFail() {
        return this.fail;
    }

    setFail(node) {
        this.fail = node;
    }
}