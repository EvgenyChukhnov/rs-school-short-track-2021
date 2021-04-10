const ListNode = require('../extensions/list-node');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

// const k = 3;

// const l = {
//   value: 3,
//   next: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: {
//             value: 5,
//             next: null,
//           },
//         },
//       },
//     },
//   },
// };

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.length = 0;
//   }

//   removeAt(position) {
//     if (position < 0 || this.length <= position) {
//       return null;
//     }

//     let current = this.head;
//     if (position === 0) {
//       this.head = current.next;
//     } else {
//       let prev = null;
//       let index = 0;

//       while (index < position) {
//         prev = current;
//         current = current.next;
//         index++;
//       }

//       prev.next = current.next;
//     }

//     this.length--;
//     return current.value;
//   }

//   remove(element) {
//     this.removeAt(this.indexOf(element));
//   }

//   indexOf(element) {
//     let current = this.head;
//     let index = 0;

//     while (current) {
//       if (current.value === element) {
//         return index;
//       }

//       current = current.next;
//       index++;
//     }

//     return -1;
//   }
// }

function removeKFromList(l, k) {
  let tmp = l;
  const arr = [];

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  return arr.filter((el) => el !== k).reverse()
    .reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }

      return new ListNode(cur);
    }, null);
}

module.exports = removeKFromList;
// removeKFromList(l, k);
