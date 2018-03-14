var canvas = document.getElementById( "canvas" );
var CTX = canvas.getContext( '2d' );

var CANVAS_W = canvas.width;
var CANVAS_H = canvas.height;
var CELL_SIZE = 10;

var maxX = Math.floor( CANVAS_W / CELL_SIZE );
var maxY = Math.floor( CANVAS_H / CELL_SIZE );

// generate the grid
function makeGrid( maxX, maxY, zeroOnly )
{
  var grid = [];
  for ( var y = 0; y < maxY; ++y )
  {
    var line = [];
    for ( var x = 0; x < maxX; ++x )
    {
      line.push( zeroOnly ? 0 : Math.random() * 10 > 8 ? 1 : 0 );
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

function aliveNb( grid, cellY, cellX ) {
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
    // console.log( y, x,nb );
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
var currentHistoryIndex = 0;
// should update the grid
function update( ctx, grid )
{
  gridhistory.push( grid );
  currentHistoryIndex = gridhistory.length - 1;
  _grid = updateGridState( grid );
  render( ctx, _grid );
  
  console.log( "update" )
}

var _grid = makeGrid( maxX, maxY );

function setGrid( sx, sy, grid ) {
  _grid = makeGrid( maxX, maxY, true );

  for ( var y = 0; y < grid.length; ++y )
  {
    for ( var x = 0; x < grid[ y ].length; ++x )
    {
      _grid[ sy + y ][ sx + x ] = grid[ y ][ x ];
    }
  }

  render( CTX, _grid );
}

// test: setGrid( 7, 7, [[1,1,1,1,1]])

var interval = undefined;
var PLAY_RATE = 100;
function play()
{
  render( CTX, _grid );
  interval = setInterval( function()
  {
    update( CTX, _grid );
  }, PLAY_RATE /* 500 ms */ );
}
function pause()
{
  clearInterval( interval );
  interval = undefined;
}
function next() {
  update( CTX, _grid );
}
function goTo( historyIndex ) {
  if ( !gridhistory[ historyIndex ] ) {
    return;
  }
  currentHistoryIndex = historyIndex;
  render( CTX, gridhistory[ historyIndex ] );
}

function generator1()
{
  PLAY_RATE = 100;
  var custom = [
    [0, 1, 1]
    ,[1, 1, 0]
    ,[0, 1, 0]
  ];
  setGrid( maxX / 2 - 1 >> 0, maxY / 2 - 1 >> 0, custom );
}

function generator2()
{
  PLAY_RATE = 250;
  var custom = [
    [ 1, 0, 1, 0, 1 ]
    ,[ 1, 0, 0, 0, 1 ]
    ,[ 1, 0, 0, 0, 1 ]
    ,[ 1, 0, 0, 0, 1 ]
    ,[ 1, 0, 1, 0, 1 ]
  ];
  setGrid( maxX / 2 - 3 >> 0, maxY / 2 - 3 >> 0, custom );
}


document.getElementById( "pause" ).addEventListener( "click", function(){ pause(); } );
document.getElementById( "play" ).addEventListener( "click", function(){ play(); } );
document.getElementById( "prev" ).addEventListener( "click", function()
{
  goTo( currentHistoryIndex - 1 );
} );
document.getElementById( "next" ).addEventListener( "click", function()
{
  goTo( currentHistoryIndex + 1 );
} );

function generator3()
{
  PLAY_RATE = 100;
  var custom = [
    [ 0, 1, 1, 1, 1, 1, 1 ]
    ,[ 1, 0, 0, 0, 0, 0, 1 ]
    ,[ 0, 0, 0, 0, 0, 0, 1 ]
    ,[ 1, 0, 0, 0, 0, 1, 0 ]
    ,[ 0, 0, 1, 1, 0, 0, 0 ]
    ,[ 0, 0, 0, 0, 0, 0, 0 ]
    ,[ 0, 0, 0, 0, 0, 0, 0 ]
    ,[ 0, 0, 0, 0, 0, 0, 0 ]
    ,[ 0, 0, 1, 1, 1, 1, 1 ]
    ,[ 0, 1, 0, 0, 0, 0, 1 ]
    ,[ 0, 0, 0, 0, 0, 0, 1 ]
    ,[ 0, 1, 0, 0, 0, 1, 0 ]
    ,[ 0, 0, 0, 1, 0, 0, 0 ]
    ,[ 0, 0, 0, 0, 0, 0, 0 ]
    ,[ 0, 0, 0, 0, 0, 0, 0 ]
    ,[ 0, 0, 0, 0, 0, 0, 0 ]
    ,[ 0, 0, 0, 1, 1, 1, 1 ]
    ,[ 0, 0, 1, 0, 0, 0, 1 ]
    ,[ 0, 0, 0, 0, 0, 0, 1 ]
    ,[ 0, 0, 1, 0, 0, 1, 0 ]
  ];
  setGrid( 1, 1, custom );
}