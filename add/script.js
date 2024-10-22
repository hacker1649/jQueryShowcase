$(document).ready(function () {
  function updateTableData() {
    var current_cell_number = 1;
    $('#main-table tr').each(function () {
      $(this).find('td').each(function () {
        $(this).text(current_cell_number);
        current_cell_number++;
      });
    });
  }

  $('#btn-add-row').click(function () {
    var lastRow = $('#main-table tr:last');
    var number_of_cols = lastRow.find('td').length;
    var newRow = '<tr>';
    for (var i = 0; i < number_of_cols; i++) {
      newRow += '<td></td>';
    }
    newRow += '</tr>';
    $('#main-table').append(newRow);
    updateTableData();
  });

  $('#btn-remove-row').click(function () {
    var row_count = $('#main-table tr').length;
    if (row_count > 1) {
      $('#main-table tr:last').remove();
      updateTableData();
    } else {
      alert('Cannot remove the last row...');
    }
  });

  $('#btn-add-column').click(function () {
    $('#main-table tr').each(function () {
      $(this).append('<td></td>');
    });
    updateTableData();
  });

  $('#btn-remove-column').click(function () {
    var col_count = $('#main-table tr:first td').length;
    if (col_count > 1) {
      $('#main-table tr').each(function () {
        $(this).find('td:last').remove();
      });
      updateTableData();
    } else {
      alert('Cannot remove the last column...');
    }
  });
});
