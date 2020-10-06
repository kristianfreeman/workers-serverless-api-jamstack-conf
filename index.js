addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const body = { name: 'Kristian', twitter: 'https://twitter.com/signalnerve' }
  return new Response(JSON.stringify(body), {
    headers: {
      'content-type': 'application/json',
      'X-Hello': 'Hello Jamstack Conf!',
    },
  })
}
