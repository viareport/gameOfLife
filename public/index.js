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
      line.push( Math.random() * 10 > 8 ? 1 : 0 );
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

function aliveNb( grid, cellX, cellY ) {
  let nb = 0;

  for ( var y = cellY - 1; y <= cellY + 1; ++y )
  {
    if ( y < 0 || y >= grid.length ) {
      continue;
    }

    for ( var x = cellX - 1; x <= cellX + 1; ++x )
    {
      if ( ( x == cellX && y == cellY )
        || x < 0 || x >= grid[ 0 ].length ) {
        continue;
      }

      if ( grid[ y ][ x ] ) {
        ++nb;
      }
    }
  }

  return nb;
}

function updateCellState( grid, y, x )
{
  var nb = aliveNb( grid, y, x );
  var currentState = grid[ y ][ x ];
  if ( currentState == 1 ) {
    if ( nb >= 2 && nb <= 3 ) {
      return 1;
    }
    else {
      return 0;
    }
  }
  else {
    return nb == 3 ? 1 : 0;
  }
}

function updateGridState( grid )
{
  var newGrid = [];
  for ( var y = 0; y < grid.length; ++y )
  {
    newGrid[ y ] = [];
    for ( var x = 0; x < grid[ y ].length; ++x )
    {
      newGrid[ y ][ x ] = updateCellState( grid, y, x );
    }
  }

  return newGrid;
}

var gridhistory = [];
// should update the grid
function update( ctx, grid )
{
  gridhistory.push( grid );
  render( ctx, grid );
  _grid = updateGridState( grid );
  
  console.log( "update" )
}

var _grid = generateGrid( maxX, maxY );
setInterval( function()
{
  update( CTX, _grid );
}, 1000 /* 500 ms */ );