function ListNode (x) {

    this.value = x;
    this.next = null;
    // this.head = null;
    // this.length = 0;


  // removeAt(position) {
  //   if (position < 0 || this.length <= position) {
  //     return null;
  //   }

  //   let current = this.head;
  //   if (position === 0) {
  //     this.head = current.next;
  //   } else {
  //     let prev = null;
  //     let index = 0;

  //     while (index < position) {
  //       prev = current;
  //       current = current.next;
  //       index++;
  //     }

  //     prev.next = current.next;
  //   }

  //   this.length--;
  //   return current.value;
  // }

  // remove(element) {
  //   this.removeAt(this.indexOf(element));
  // }

  // indexOf(element) {
  //   let current = this.head;
  //   let index = 0;

  //   while (current) {
  //     if (current.value === element) {
  //       return index;
  //     }

  //     current = current.next;
  //     index++;
  //   }

  //   return -1;
  // }
}



module.exports = ListNode;
