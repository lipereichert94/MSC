// references https://medium.com/@andrewsouthard1/linked-list-in-javascript-634fc2e0897b 

function LinkedList() {

    head = null;
    length = 0;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.head = function () {
        return head;
    }

    this.length = function () {
        return length;
    }

    this.add = function (element) {
        var newNode = new Node(element);

        if (head === null) {
            head = newNode;
        } else {
            var currentNode = head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        length++;
    }

    this.remove = function (element) {
        if (head === null) {
            return "empty linked list, nothing to remove";
        } else {
            var currentNode = head;
            if (currentNode.element === element) {
                head = currentNode.next;
                length--;
                return head;
            } else {
                while (currentNode.next !== null) {
                    if (currentNode.next.element === element) {
                        currentNode.next = currentNode.next.next;
                        length--;
                        return head;
                    }
                    currentNode = currentNode.next;
                }
            }
        }
    }

    this.find = function (element) {
        currentNode = head;
        position = 1;
        if (head === null) {
            return "empty linked linked list";
        }
        else {
            if (currentNode.element === element) {
                return position;
            } else {
                while (currentNode.element !== element) {
                    currentNode = currentNode.next;
                    position++;
                }
                if (currentNode.element === element) {
                    return position;
                } else {
                    console.log("this hits");
                    return -1;
                }
            }
        }
    }
} function LinkedList() {

    head = null;
    length = 0;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.head = function () {
        return head;
    }

    this.length = function () {
        return length;
    }

    this.add = function (element) {
        var newNode = new Node(element);

        if (head === null) {
            head = newNode;
        } else {
            var currentNode = head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        length++;
    }

    this.remove = function (element) {
        if (head === null) {
            return "empty linked list, nothing to remove";
        } else {
            var currentNode = head;
            if (currentNode.element === element) {
                head = currentNode.next;
                length--;
                return head;
            } else {
                while (currentNode.next !== null) {
                    if (currentNode.next.element === element) {
                        currentNode.next = currentNode.next.next;
                        length--;
                        return head;
                    }
                    currentNode = currentNode.next;
                }
            }
        }
    }

    this.find = function (element) {
        currentNode = head;
        position = 1;
        if (head === null) {
            return "empty linked linked list";
        }
        else {
            if (currentNode.element === element) {
                return position;
            } else {
                while (currentNode.element !== element) {
                    currentNode = currentNode.next;
                    position++;
                }
                if (currentNode.element === element) {
                    return position;
                } else {
                    console.log("this hits");
                    return -1;
                }
            }
        }

    }
    this.printList = function () {
        currentNode = head;
        while (currentNode != null) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
}

let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.printList(); //Expected Result: LinkedList{1,2,3};

//linkedlist.removeElement(2);]
linkedlist.remove(2);

linkedlist.printList(); //Expected Result: LinkedList{1,3};