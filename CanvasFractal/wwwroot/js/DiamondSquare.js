
// roughness is best ranged from 0.01 to 0.1
var roughness = 0.01;

//var length = Math.pow(2, Size) + 1; // this provides a length by width grid size
// the width and length should be 2^n + 1 ni an array, always comes out odd to allow for center points in squares
var topleft, topright, botleft, botright, center;
var topmiddle, middleleft, middleright, botmiddle;// the four initial square points for the square part of the algorithm and four diamond points 

console.log(length);
//var step = Math.pow(2 * Size);

var segments;
// segments have now been pre defined, meaning that 33 65 or 129 are used: 2^n + 1 
// the actual length and width of the plane to be generated 

// this function gets the segment value from the form in index, and also writes to console just to check the segment value
function getSegmentValue() {
    var segOpt = document.getElementById("option_segments_to_be_used");
  var  segmentsstring = segOpt.options[segOpt.selectedIndex].value;
     let segmentsvalue = parseInt(segmentsstring, 10);
    console.log(segments + "segments chosen");
    return segmentsvalue;
}
//listens for click on the form
//document.getElementById("option_segments_to_be_used").addEventListener("click", getSegmentValue);

const arrayTerrain = [];// created one dimensional empty array
// these are all my parameters i'm using for the creation of a 2d grid and to obtain the heightmap to be applied to plane

//segments = 65;
var segmentArray;

function createTwoDArray() {
    for (let i = 0; i < segments; i++) {
        arrayTerrain[i] = [];
        for (let j = 0; j < segments; j++) {
            
            arrayTerrain[i][j] = 0;
        }
    ;
        
    }
  //  console.log(arrayTerrain[0][0]);
   

}// loop fills in the array with an array, since javacript only has one dimensional arrays and fills using size of the plane
var random = Math.random();
function fillInCorners() {
    // always 4 corners, 00, 0 max, max 0 , max max, arrays initialised at 0 so max-1
    //arrayTerrain[0][]
    let normalisedHeight = 0.0;
    arrayTerrain[0][0] = normalisedHeight;
    arrayTerrain[0][segments-1] = normalisedHeight;
    
    arrayTerrain[segments-1][0] = normalisedHeight;
    arrayTerrain[segments - 1][segments-1] = normalisedHeight;
    // this can be used to seed the terrain, but be warned, adding numbers influences the terrain by vast amounts
              
       }

function squareFunction() {

 //   for (let x = 0; x<segments)
    


}

// unused, to check the array values but can use console.table instead
function checkarray() {
    for (let i = 0; i < Size; i++) {
       
        for (let j = 0; j < Size; j++) {

            console.log(arrayTerrain[i][j]);
        }
        

    }
}


function createDiamondSquare() {
  //  getSegmentValue();
    //getSegmentValue();
    createTwoDArray();// creates the grid based on the segment selection, 3 choices 
    fillInCorners();// fill the topleft, top right, bottom left and bottom right
    
    console.table(arrayTerrain);
    //  for (var widthlength = )
    var segmentarraysize = segments-1;


   
   
    var centreAverage;
 //   console.log(random);
    // x here is basically being used as size of the square which will be reduced as smaller squares are produced to fill in their values, to get the smaller squares we half the sizes which is our step x/2
    for (let x = segmentarraysize; x >= 2; x /= 2) {

        var halfpoint = x / 2;// could also be segments-1 for clarity, doesn't matter
        
        console.log(roughness);
        //we're starting at our seeded position in the top left then working our way through to the midpoint and eventually to smaller squares
        for (let i = 0; i < segmentarraysize; i += x) {
            for (let j = 0; j < segmentarraysize; j += x) {

                //this is the diamond part of the algorithm notice we have 4 different values since topmiddle, middleleft,middleright and bot middle are all points of a diamond
       //this sets the midpoint of the square

                topleft = arrayTerrain[i][j];
                topright = arrayTerrain[i + x][j];
                botleft = arrayTerrain[i][j + x];
                botright = arrayTerrain[i + x][j + x];
                // these are the four corners of the square, no matter the size of the square since we use x which will be halved, the coordinates in the array are used
                let average = topleft + topright + botleft + botright / 4;
                let randomness = Math.random();
                let heightmapArrayValueBeforeAverage = (2 * roughness * randomness) - roughness;
                let heightMapArrayFinal = average + heightmapArrayValueBeforeAverage;// this provides the step up or down on the heightmap value
                arrayTerrain[i + halfpoint][j + halfpoint] = heightMapArrayFinal;
              //  console.log(arrayTerrain[i + halfpoint][j + halfpoint]);


            }

        }



       
        //squarestep sets the value in the middle of the diamond
        // it does this by increasing from the start positions by a half point, this half point again reduces by half after both these loops 
        // but due to the first for loop the half point is reduced and these loops will occur again
        for (let i = 0; i < segmentArray; i += halfpoint) {
            
            for (let j = ((i + halfpoint) % x); j < segmentArray; j += x) {



                topmiddle = arrayTerrain[i][(j + halfpoint) % segments];
                middleleft = arrayTerrain[(i - halfpoint + segments) % segments][j];// we're minusing the half point to get square value, 
                //but then in some cases we actually wouldn't be in the array, so we use a wraparound to stay inside the array
                
               

               // middleleft = arrayTerrain[(i - halfpoint + )][]

                middleright = arrayTerrain[(i + halfpoint) % segments][j];
                botmiddle = arrayTerrain[i][(j - halfpoint + segments) % segments];
                // the naming conventions generally go against intuitivness but this is the squarestep
                let average = topmiddle + middleleft + middleright + botmiddle;
                let randomness = Math.random();
                let heightmapArrayValueBeforeAverage = (2 * roughness * randomness) - roughness;
                let heightMapArrayFinal = average + heightmapArrayValueBeforeAverage;
                arrayTerrain[i][j] = heightMapArrayFinal;

               // wrapValuesArray(i, j, segments, heightMapArrayFinal);
                // these wrap the values in the array but can be replaced to not allow wrapping
                if (i === 0) {
                    arrayTerrain[segmentarraysize][j] = heightMapArrayFinal;
                }
                if (j === 0) {
                    arrayTerrain[i][segmentarraysize] = heightMapArrayFinal;
                }

            }
        }
    }


 // console.table(arrayTerrain);

}

//createDiamondSquare();

// unused
        function wrapValuesArray(pi, pj, psegments, pheightMapArrayFinal) {
            if (pi === 0) arrayTerrain[psegments][pj] = pheightMapArrayFinal;
            if (pj === 0) arrayTerrain[pi][psegments] = pheightMapArrayFinal;
        }




function Return_Plane() {// this whole sections calls the functions to set the arrays, then calls the Diamond square algorithm to set the values inside the arrays
    segments = getSegmentValue();// this function calls another to find which is selected in the drop down box
    segmentArray = segments - 1;// for use in creating the array 
    createDiamondSquare();// this calls the function that actually fills the array with Z values
    var geometry_plane = new THREE.PlaneGeometry(1000, 1000, segments, segments);// height and width 1000,1000 could be changed with a dropdown box, may do that later
    let zarrayvalue = 0;
    for (var i = 0; i <= segmentArray; i++) {

        for (var j = 0; j <= segmentArray; j++) {
            geometry_plane.vertices[zarrayvalue].z = arrayTerrain[i][j];
            
            zarrayvalue++;
        }
    }
    var material_plane = new THREE.MeshBasicMaterial({ color: ("#000000"), wireframe: true, side: THREE.DoubleSide });
    //var material_plane = new THREE.MeshDepthMaterial({ side: THREE.DoubleSide });
    //var material_plane = new THREE.MeshPhongMaterial({ color: 0x44aa88 , side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geometry_plane, material_plane);
    //we're using a mesh here to be able to see the terrain against the background 
    //scene.add(plane);


    //to do , apply a shader to the plane

    let return_values = [geometry_plane, material_plane, plane]
    return return_values;
}


