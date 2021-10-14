var longestPalindrome = function (s) {
    // 使用中心扩散法
    var res = ''
    for (var i = 0; i < s.length; i++) {
        test(i, i)
        test(i, i + 1)
    }
    function test(m, n) {
        while (m >= 0 && n < s.length && s[m] === s[n]) {
            m--; n++;
        }
        if (n - m - 1 > res.length) {
            res = s.slice(m + 1, n)
        }
    }
    return res
};
console.log(longestPalindrome('asdabccbadd'));