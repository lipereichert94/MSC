class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class Linkedlist {

    constructor() {
        this.head = null;
    }

    add(element) {

        let node = new Node(element);
        let current;
        current = this.head;

        if (current == null) {
            console.log("First");
            this.head = node;
        }
        else if (current.next == null) {
            console.log("second")
            current.next = node;
        }
        else {
            console.log("3 or +");
            current = this.head;
            while (current.next != null) {
                current = current.next;
                if (current.next == null) {
                    current.next = node;
                    break;
                }
                console.log(current);
            }
        }
    }

    remove(element) {
        let current;
        current = this.head;

        if (current.element == element) {
            console.log("first");
            this.head = current.next;
        }
        else if (current.next.element == element) {
            console.log("Second");
            current.next = current.next.next;
        }
        while (current.next != null) {
            //current = current.next;

            if (current.next.element == element) {
                current.next = current.next.next;
               // break;
            }
            current = current.next;

        }
    }

    print() {
        let current;
        current = this.head;
        while (current != null) {
            console.log(current.element);
            current = current.next
        }
    }
}



let linkedlist = new Linkedlist();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.add(5);
linkedlist.add(6);
linkedlist.add(7);

linkedlist.print();

linkedlist.remove(5);
linkedlist.print();