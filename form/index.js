$(document).ready(function () {
  $("#dataForm").submit(function (e) {
    e.preventDefault();

    var first_name = $("#firstName").val();
    var last_name = $("#lastName").val();
    var age = $("#age").val();
    var url = $("#website").val();
    var gender = $('input[name="gender"]:checked').val();
    var subject = $('input[name="subject"]:checked').val();
    var city = $("#city").val();
    var country = $("#country").val();

    var newRow = `
    <tr>
      <td>${first_name}</td>
      <td>${last_name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${subject}</td>
      <td>${city}</td>
      <td>${country}</td>
      <td><a href="#" target="_blank" class="btn btn-primary url-btn">Website</a></td>
      <td><button class="btn btn-danger delete-btn">Delete</button></td>
    </tr>`;

    $("#dataTable").append(newRow);

    $("#dataTable tr:last .url-btn").attr("href", url);

    showAlert("Record added successfully!", "success");

    $("#firstName").val("");
    $("#lastName").val("");
    $("#age").val("");
    $("#website").val("");
    $('input[name="gender"]:checked').prop("checked", false);
    $('input[name="subject"]:checked').prop("checked", false);
    $("#city").val("");
    $("#country").val("");
  });

  $(document).on("click", ".delete-btn", function () {
    $(this).closest("tr").remove(); // Remove the row from the table
    showAlert("Record deleted successfully!", "success");
  });

  function showAlert(message, type) {
    var alertBox = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    $("#alert-container").html(alertBox);

    setTimeout(function () {
      $(".alert").alert("close");
    }, 3000);
  }

  var respectiveCities = {
    "Pakistan": ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    "India": ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
    "United States of America": ["New York", "Los Angeles", "Chicago", "Houston"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth"],
  };

  $("#country").change(function () {
    var pickedCountry = $(this).val();

    $("#city").empty();
    $('#loader2').css('display', 'inline-block'); 

    setTimeout(function () {
      $('#loader2').css('display', 'none'); 
      if (pickedCountry) {
        $('#city').append('<option selected>Select your city</option>');
        respectiveCities[pickedCountry].forEach(function (city) {
          $('#city').append('<option value="' + city + '">' + city + '</option>');
        });
      } else {
        $('#city').append('<option selected>Select your city</option>');
      }
    }, 2000); 
  });

  $('input[name="subject"]').change(function () {
    var selectedRadioButton = $(this).val();

    if (selectedRadioButton == "Other") {
      $('#loader1').css('display', 'inline-block');
      setTimeout(function () {
        $('#loader1').css('display', 'none');
        $('#php').parent().removeClass("hide");
        $('#laravel').parent().removeClass("hide");
      }, 2000);
    } else if (selectedRadioButton == "PHP" || selectedRadioButton == "Laravel") {
      $('#php').parent().removeClass("hide");
      $('#laravel').parent().removeClass("hide");
    } else {
      $('#loader1').css('display', 'none');
      $('#php').parent().addClass("hide");
      $('#laravel').parent().addClass("hide");
    }
  });
});
