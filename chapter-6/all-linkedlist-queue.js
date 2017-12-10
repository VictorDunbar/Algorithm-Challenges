class SLStack{
    constructor(){
        this.head = null;
    }

    push(val){
        let temp = this.head;
        let node = new Node(val);
        this.head = node;
        node.next = temp;
        return this;
    }

    pop(){
        let temp = this.head;
        if(temp){
            this.head = temp.next;
        }
        return this;
    }

    top(){
        return (this.head)? this.head.val : this.head;
    }

    contains(val){
        let node = this.head;
        while(node){
            if(node.val == val) return true;
            node = node.next;
        }
        return false;
    }

    isEmpty(){
        return (this.head)? false : true;
    }

    size(){
        let node = this.head;
        let c = 0;
        while(node){
            c++;
            node = node.next;
        }
        return c;
    }
    
    toString(){
        let node = this.head;
        let s = "[ ";
        while(node){
            if(!node.next) break;
            s += node.val + ", ";
            node = node.next;
        }
        if(node){
            s += node.val;
        }
        s += " ]";
        return s;
    }
}

class Node{
    constructor(val){
        this.next = null;
        this.val = val;
    }
}

let linkedStack = new SLStack();
linkedStack.push(1).push(2).push(3).pop();
console.log(linkedStack.toString());
console.log(linkedStack.contains(2), linkedStack.contains(3));
console.log(linkedStack.isEmpty());