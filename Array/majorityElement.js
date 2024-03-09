// https://leetcode.com/problems/majority-element/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums){
    let count=0;
    let majEl;
    nums.forEach(el => {
        if(count==0){
            majEl=el;
            count++;
        }
        else {
            if(majEl==el){
                count++;
            }
            else{
                count--;
            }
        }
    });
    return majEl;
}
