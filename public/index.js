var canvas = document.getElementById( "canvas" );
var CTX = canvas.getContext( '2d' );

var CANVAS_W = canvas.width;
var CANVAS_H = canvas.height;
var CELL_SIZE = 10;

var maxX = Math.floor( CANVAS_W / CELL_SIZE );
var maxY = Math.floor( CANVAS_H / CELL_SIZE );

// generate the grid
function generateGrid( maxX, maxY )
{
  var grid = [];
  for ( var y = 0; y < maxY; ++y )
  {
    var line = [];
    for ( var x = 0; x < maxX; ++x )
    {
      line.push( Math.random() * 10 > 7 ? 1 : 0 );
    }
    grid.push( line );
  }

  return grid;
}

// draw a cell
function drawCell( ctx, x, y )
{
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.rect( x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE );
  ctx.fill();
}

// render the grid
function render( ctx, grid )
{
  ctx.clearRect( 0, 0, 400, 400 );

  for ( var y = 0; y < grid.length; ++y )
  {
    for ( var x = 0; x < grid[ y ].length; ++x )
    {
      if ( grid[ y ][ x ] ) {
        drawCell( ctx, x, y );
      }
    }
  }
}

// should update the grid
function update( ctx, grid )
{
  // do update

    // on verifie à l'arrache que ça calcule pas trop mal...
    console.log(getVoisinsVivants(maxX -1,maxY-1,grid));
  
  render( ctx, grid );
}

function getVoisinsVivants(x, y, grid) {
    let nbVoisinsVivants = 0;

    for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, maxX - 1); i++) {
        for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, maxY - 1); j++) {
            if (i !== x || j !== y) {
                nbVoisinsVivants += grid[i][j];
            }
        }
    }

    return nbVoisinsVivants;
}

var _grid = generateGrid( maxX, maxY );
setInterval( function()
{
  update( CTX, _grid );
}, 500 /* 500 ms */ );