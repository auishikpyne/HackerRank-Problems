from typing_extensions import Self


class Node:
    def __init__(self, item):
        self.data  = item
        self.next = None
    
    def __str__(self):
        return str(self.data)

class LinkedList:

    def __init__(self):
        self.head = None

    def add(self, new_item):
        node = Node(new_item)
        node.next = self.head
        self.head = node
        return self.head


llsit = LinkedList()
