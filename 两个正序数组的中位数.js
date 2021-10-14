var findMedianSortedArrays = function (nums1, nums2) {
    var res = null;
    nums1 = [...nums1, ...nums2].sort((a, b) => {
        return a - b
    })
    console.log(nums1);
    var zhong = parseInt(nums1.length / 2)
    if (nums1.length % 2 === 0) res = (nums1[zhong - 1] + nums1[zhong]) / 2
    else
        res = nums1[zhong]
    console.log(zhong);
    return res
};

console.log(findMedianSortedArrays([1, 3], [2]));