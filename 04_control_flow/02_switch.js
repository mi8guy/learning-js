// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 1
// Used when there are multiple if else blocks required for a task.

switch (month) {
    case 1: // can use strings as well 
        console.log(`Jan`);
        break;              // if not written, all the below code executes. so keep in mind, except default
    case 2:
        console.log(`Feb`);
        break;          // breaks the control flow
    case 3:
        console.log(`Mar`);
        break;
    default:            // if nothing matches
        console.log(`default case matched`);
        break;
}


