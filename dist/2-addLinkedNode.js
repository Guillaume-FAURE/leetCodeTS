"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoListNodes(l1, l2) {
    var _a, _b;
    const res = new ListNode();
    let l1Head = l1;
    let l2Head = l2;
    let resHead = res;
    let carry = 0;
    while (l1Head || l2Head || carry !== 0) {
        const x = (_a = l1Head === null || l1Head === void 0 ? void 0 : l1Head.val) !== null && _a !== void 0 ? _a : 0;
        const y = (_b = l2Head === null || l2Head === void 0 ? void 0 : l2Head.val) !== null && _b !== void 0 ? _b : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum / 10);
        resHead.next = new ListNode(sum % 10);
        l1Head = l1Head === null || l1Head === void 0 ? void 0 : l1Head.next;
        l2Head = l2Head === null || l2Head === void 0 ? void 0 : l2Head.next;
        resHead = resHead.next;
    }
    return res.next;
}
function main2() {
    const l1 = new ListNode();
    const l2 = new ListNode();
    addTwoListNodes(l1, l2);
}
main2();
