//$(function () {
//  var mediumPromise = new Promise(function (resolve) {
//  var $content = $('#jsonContent');
//  var data = {
//      rss: 'https://medium.com/feed/@sabesan96'
//  };
//  $.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hndreca', data, function (response) {
//      if (response.status == 'ok') {
//          $("#logo").append(`<img src="${response.feed["image"]}" class="rounded mx-auto d-block">`)
//          var display = '';
//          $.each(response.items, function (k, item) {
//              display += `<div class="card mb-3 mx-auto mr-5 " style="width: 20rem;">`;
//              var src = item["thumbnail"]; // use thumbnail url
//              display += `<img src="${src}" class="card-img-top" alt="Cover image">`;
//              display += `<div class="card-body">`;
//              display += `<h5 class="card-title"><a href="${item.link}">${item.title}</a></h5>`;
//              var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
//              yourString = yourString.replace('h4', 'p');
//              yourString = yourString.replace('h3', 'p');
//              var maxLength = 400; // maximum number of characters to extract
//              //trim the string to the maximum length
//              var trimmedString = yourString.substr(0, maxLength);
//              //re-trim if we are in the middle of a word
//              trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))

//              var itemId = item.guid.slice(-12);

//              display += `<div id=${"rl"+itemId}><p id=${"lt"+itemId} class="card-text">${trimmedString}...</p> <p id=${itemId+"m"} class="btn-outline-success btn" >Read More</p></div>`;

//              $(document).on('click', "#"+itemId+"m", function() {
//                trimmedString = yourString;

//                $("#"+"rl"+itemId).toggleClass("hidden");
//                $("#"+"rm"+itemId).toggleClass("hidden");
//              });

//              display += `<div id=${"rm"+itemId} class="hidden"><p id=${"mt"+itemId} class="card-text">${yourString}</p> <p id=${itemId+'l'} class="btn-outline-success btn" >Read Less</p> </div>`;

//              $(document).on('click', "#"+itemId+"l", function() {
//                trimmedString = yourString;

//                $("#"+"rl"+itemId).toggleClass("hidden");
//                $("#"+"rm"+itemId).toggleClass("hidden");
//              });

//              display += '</div></div>';

//              return k < 10;
//          });

//          resolve($content.html(display));
//      }
//  });
//  });

//mediumPromise.then(function()
//  {
//      //Pagination
//      pageSize = 4;

//      var pageCount = $(".card").length / pageSize;

//      for (var i = 0; i < pageCount; i++) {
//          $("#pagin").append(`<li class="page-item"><a class="page-link" href="#">${(i + 1)}</a></li> `);
//      }
//      $("#pagin li:nth-child(1)").addClass("active");
//      showPage = function (page) {
//          $(".card").hide();
//          $(".card").each(function (n) {
//              if (n >= pageSize * (page - 1) && n < pageSize * page)
//                  $(this).show();
//          });
//      }

//      showPage(1);

//      $("#pagin li").click(function () {
//          $("#pagin li").removeClass("active");
//          $(this).addClass("active");
//          showPage(parseInt($(this).text()))
//          return false;
//      });
//  });
//});