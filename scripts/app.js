$(document).on("ready", function(){

  $.ajax({
    method:'GET',
    url:"http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
    data:$('form').serialize(),
    //success: onSuccess
    success: findUrl
    //error: onError

  });

  // function onSuccess(json){
  //   console.log($("form").serialize());
  //   console.log(json);
  //   console.log(json.data[0].bitly_gif_url);

    //$("div").append("<img src="+json.data[0].images.fixed_height.url+">");
    //json.Object.data[0].bitly_gif_url
  //}

  function findUrl(json){
    for(i=0; i<json.data.length; i++){
    //for(i=0; i<25; i++){
    //console.log(i);
      $(".gif-gallery").append("<img src="+json.data[i].images.fixed_height.url+">");
    }
  }

  $('.btn-primary').on('click', function search(event){
    event.preventDefault();
    $(".gif-gallery").empty();

    $.ajax({
      method:'GET',
      url:"http://api.giphy.com/v1/gifs/search?q="+$("input[name=q]").val()+"&api_key=dc6zaTOxFJmzC",
      data:$('form').serialize(),
      //success: onSuccess
      success: findUrl
    })
    console.log("help")

  })

  // $('.btn-default').on('click', function loadMore(event){
  //   $(".gif-gallery").append("<img src="+json.data[i].images.fixed_height.url+">");
  // });

});
