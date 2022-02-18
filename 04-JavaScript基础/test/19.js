// Filter
// let arr1=[1,2,6,2,5,6]

// let arr2= arr1.filter((item)=>{
//     if (item>4){
//         return true
//     }
//     return false
// });


// const arr3=[
//     { name: '许嵩', type: '一线' },
//     { name: '周杰伦', type: '过气' },
//     { name: '邓紫棋', type: '一线' },
// ]

// const arr4= arr3.filter((item)=>item.type=='一线')

// console.log(arr1)
// console.log(arr2)
// console.log(arr4)

// Reduce
// const arr =  [2, 0, 1, 9, 6];
// const total = arr.reduce((prev,item) => {
//     return prev+item;
// });

// console.log('total '+total)


// function repeatCount(arr, value){
//     if(!arr || arr.length==0) return 0;

//     return arr.reduce((totalCount,item)=> {
//         totalCount += item ==value ? 1:0;
//         return totalCount;
//     },0);
// }

// let arr5= [1, 2, 6, 5, 6, 1, 6];

// console.log(repeatCount(arr5,6))

// arr_maxValue = arr5.reduce((maxValue, item)=>{
//     maxValue=Math.max(maxValue,item)
//     return maxValue
// },0);
// console.log(arr_maxValue)



var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];

// for (var i = 0; i<arr.length;i++){
//     for (var j =i+1; j<arr.length;j++){
//         if (arr[i]==arr[j]){
//             arr.splice(j,1)
//             j--;
//         }
        
//     }
// }

arr.forEach((item,index)=>{
    item=item+1
})

for (const [index, item] of arr.entries()){
    console.log([index,item])
}

// console.log(arr)
// console.log(arr.reverse())