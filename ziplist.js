const testList1 = [1, 2, 3];
const testList2 = ['a', 'b', 'c'];
function zipList(list1, list2) {
  const zList = [];
  for (let i = 0; i < list1.length; i++) {
    zList.push(list1[i], list2[i]);
  }
  return zList;
}
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  let zList = _.zip(list1, list2);
  zList = _.flatten(zList);
  return zList;
}

console.log(zipListTheSimpleWay(testList1, testList2));
