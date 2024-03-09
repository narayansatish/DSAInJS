//https://leetcode.com/problems/sort-colors/description/


var sortColors = function(nums){
    let l=0 , curr=0, r=nums.length-1;
    for(;curr<=r;){
        if(nums[curr]==0){
            swap(nums, l , curr);
            l++;
            curr++;
        }
        else if( nums[curr]==1){
            curr++;
        } else if(nums[curr]==2){
            swap(nums, r , curr);
            r--;
            
        }

    }
}
function swap(nums , ind1,ind2){
    let temp=nums[ind1];
    nums[ind1]=nums[ind2];
    nums[ind2]=temp;
}
