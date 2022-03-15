/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
 let resultStart=0, resultLength=0;

    function expandRange(str, begin, end){
        while(begin >= 0 && end<str.length && str[begin]==str[end]){
            begin--;
            end++;
        }
        if(resultLength < end - begin-1 ){
            resultStart = begin + 1;
            resultLength = end- begin - 1;
        }
    }
    
    if(s.length < 2 ) return s;
    for( let start = 0 ; start < s.length-1; start++){
        expandRange(s, start, start);
        expandRange(s, start, start+1);
    }
    return s.slice(resultStart, resultStart + resultLength);
};