// 方法1：合并后排序 缺点：没有用到原来数组中的顺序
// var merge = function (nums1, m, nums2, n) {
//     nums1.length = m
//     nums2.length = n
//     nums1.push(...nums2)
//     var arr = nums1.sort((a, b) => a - b)
//     return arr
// };

// 方法二：从前往后遍历比较
var merge = function (nums1, m, nums2, n) {
    nums1.length = m
    var arr = []
    var i = 0, j = 0, k = 0;
    while (i < m || j < n) {
        arr[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]
    }
    if (i < m) arr.push(...nums1.slice(m, n))
    else arr.push(...nums2.slice(n, m))
    return arr
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));