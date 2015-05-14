title = document.title
url = document.URL
path = '/' + url.split('/').slice(3).join('/')
referrer = document.referrer

analytics.page(
  name: document.title
  title: document.title
  url: document.URL
  path: '/' + url.split('/').slice(3).join('/')
  referrer: document.referrer
)

for a in document.querySelectorAll('a')
  referrer = document.referrer.split('/').slice(3).join('/').toString()

  if a.text is ""
    analytics.trackLink(a, "Clicked home", {category: referrer})
  else
    analytics.trackLink(a, "Clicked #{a.text}", {category: referrer})
