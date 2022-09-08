// task 1 

function checkinteration(obj) {
    if (obj.isItarable) {
        for (let i = 0; i < obj.sampleArray.length; i++ ) {
            console.log(obj.sampleArray[i]);
        }    
    }   else {
            console.log("provided array isn't itarable");
    }
    
}

const sampleobject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
};


checkinteration(sampleobject); 

// task 2 

function pythagorasmultiply (a,b,c) {
    return a*a == b*b + c*c;
}


function checkpythagoras (x,y,z) {

    return (
        pythagorasmultiply (x, y, z) ||
        pythagorasmultiply (y, x, z) ||
        pythagorasmultiply (z, x, y)
    );
}

let test = checkpythagoras(6, 8 , 10);

let test2 = checkpythagoras(4, 3, 5);

let test3 = checkpythagoras(8, 3, 5);


console.log(test, test2, test3);


// task 3 

let arr = [2,14,25,75,11,6];

function minmax(testarray) {
    let minval = testarray[0];
    let maxval = testarray[0];

 for ( let i=0; i < testarray.length; i++ ) {
    if ( testarray[i] <= minval) {
        minval = testarray[i];
    }
    if  ( testarray[i] > maxval) {
        maxval = testarray[i];
    }
 }

  console.log(maxval, minval);
}
minmax(arr);

// task 4 

let deg = 100;

switch (true) {
    case deg > 0 && deg < 90:
        console.log("acute angle");
        break;
    case deg == 90:
        console.log('right angle');
        break;
    case deg > 90 && deg < 180:
         console.log('obtuse');
        break;
    default:
        console.log("straight");
    
}





   

















