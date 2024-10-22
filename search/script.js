$(document).ready(function () {
    // Initial rowsPerPage set to 5
    let currentPage = 1;
    let rowsPerPage = 5;
    let filteredRows = [];
  
    // Sorting functionality
    $('th').click(function () {
      const table = $(this).parents('.table');
      const allRows = $("#myTable tr").toArray(); // Sort the entire dataset, not just the visible rows
      const sortedRows = allRows.sort(comparer($(this).index()));
      this.asc = !this.asc;
      if (!this.asc) {
        sortedRows.reverse();
      }
  
      // Clear table and append sorted rows
      $("#myTable").empty().append(sortedRows);
  
      // Reset filtering and pagination after sorting
      filteredRows = filteredRows.length ? sortedRows.filter(row => $(row).is(":visible")) : [];
      currentPage = 1;
      paginateTable();
    });
  
    function comparer(index) {
      return function (a, b) {
        const valA = getCellValue(a, index);
        const valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
      };
    }
  
    function getCellValue(row, index) {
      return $(row).children('td').eq(index).text();
    }
  
    // Pagination functionality
    function paginateTable() {
      const rows = filteredRows.length ? filteredRows : $("#myTable tr");
      const totalRows = rows.length;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      const start = (currentPage - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      $("#myTable tr").hide();
      rows.slice(start, end).show();
      updatePaginationLinks(totalPages);
    }
  
    function updatePaginationLinks(totalPages) {
      $("#page-numbers").empty();
      for (let i = 1; i <= totalPages; i++) {
        const pageLink = $('<span class="page-link">' + i + '</span>');
        pageLink.on("click", function () {
          currentPage = i;
          paginateTable();
        });
        $("#page-numbers").append(pageLink);
      }
      $("#prevBtn").prop("disabled", currentPage === 1);
      $("#nextBtn").prop("disabled", currentPage === totalPages);
    }
  
    // Adjust rows per page based on user input
    $("#size").change(function () {
      rowsPerPage = parseInt($(this).val());
      currentPage = 1;
      paginateTable();
    });

    $("#prevBtn").click(function () {
      if (currentPage > 1) {
        currentPage--;
        paginateTable();
      }
    });

    $("#nextBtn").click(function () {
      const rows = filteredRows.length ? filteredRows : $("#myTable tr");
      const totalRows = rows.length;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        paginateTable();
      }
    });
  
    // Search function to filter rows
    $("#myInput").on("input", function () {
      const searchTerm = $(this).val().toLowerCase();
      if (searchTerm) {
        filteredRows = $("#myTable tr").filter(function () {
          return $(this).text().toLowerCase().includes(searchTerm);
        });
      } else {
        filteredRows = [];
      }
      currentPage = 1;
      paginateTable();
    });
  
    // Show only the first 5 rows by default on page load
    paginateTable(); // Initial pagination call to display the first 5 rows
  });
  