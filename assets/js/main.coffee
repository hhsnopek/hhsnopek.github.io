do ->
  urlPath = document.URL.split('/').slice(3)

  if urlPath[0] is ""
    document.title = "hhsnopek"
  else if urlPath.length > 1
    document.title =
      document.querySelectorAll('#blog-post')[0].firstChild.innerText
  else
    document.title =
      urlPath.toString().charAt(0).toUpperCase() + urlPath.toString().slice(1)
