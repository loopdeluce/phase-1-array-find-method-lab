// // code your solution here
// function superbowlWin(record){
//     let theElement = record.find(isWin);
//     //console.log(theElement.year);
//     if (!!theElement === true) {
//         return theElement.year;
//     }
//     else {
//         return undefined;
//     }
// };

// function isWin(element, index, array) {
//     return (element.result === "W");
// };

// other solution 

const superbowlWin = (record) => {
    const result = record.find(record => record.result === 'W')
    return !!result ? result.year : undefined;
};


   
const superbowlWin2 = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  };