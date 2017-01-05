$(document).ready(() => {
  const player1 = { marker: 'X', value: 1 };
  const player2 = { marker: 'O', value: -1 };
  const score = { row1: 0, row2: 0, row3: 0, col1: 0, col2: 0, col3: 0, diag1: 0, diag2: 0 };
  let currentPlayer = player1;
  let moves = 0;
  let winner = undefined;

  // Hover highlighting
  $('.square').hover(function() {
    $(this).toggleClass('hover');
  });

  // Keep score
  $('#top-left').on('click', function() {
    score.row1 += currentPlayer.value;
    score.col1 += currentPlayer.value;
    score.diag1 += currentPlayer.value;
    $(this).off('click');
  })

  $('#top-middle').on('click', function() {
    score.row1 += currentPlayer.value;
    score.col2 += currentPlayer.value;
    $(this).off('click');
  })

  $('#top-right').on('click', function() {
    score.row1 += currentPlayer.value;
    score.col3 += currentPlayer.value;
    score.diag2 += currentPlayer.value;
    $(this).off('click');
  })

  $('#center-left').on('click', function() {
    score.row2 += currentPlayer.value;
    score.col1 += currentPlayer.value;
    $(this).off('click');
  })

  $('#center-middle').on('click', function() {
    score.row2 += currentPlayer.value;
    score.col2 += currentPlayer.value;
    score.diag1 += currentPlayer.value;
    score.diag2 += currentPlayer.value;
    $(this).off('click');
  })

  $('#center-right').on('click', function() {
    score.row2 += currentPlayer.value;
    score.col3 += currentPlayer.value;
    $(this).off('click');
  })

  $('#bottom-left').on('click', function() {
    score.row3 += currentPlayer.value;
    score.col1 += currentPlayer.value;
    score.diag2 += currentPlayer.value;
    $(this).off('click');
  })

  $('#bottom-middle').on('click', function() {
    score.row3 += currentPlayer.value;
    score.col2 += currentPlayer.value;
    $(this).off('click');
  })

  $('#bottom-right').on('click', function() {
    score.row3 += currentPlayer.value;
    score.col3 += currentPlayer.value;
    score.diag1 += currentPlayer.value;
    $(this).off('click');
  })


  // Player makes a move
  $('.square').on('click', function() {
    $(this).text(currentPlayer.marker);
    $(this).off('click');
    moves++

    // Check for a winner
    Object.values(score).forEach(score => {
      if (score === 3 && !winner) {
        winner = player1;
        window.alert('X wins.');
        $('.square').off('click');
      }
      if (score === -3 && !winner) {
        winner = player2;
        window.alert('O wins.')
        $('.square').off('click');
      }
    });

    if (moves === 9 && !winner) {
      window.alert('Draw game');
    }

    // Next player's turn
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  });

  // Reload the game
  $('#reset').click(function() {
    location.reload();
  });

});
