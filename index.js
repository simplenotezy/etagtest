addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let originalResponse = await fetch('https://example.com');
  console.log('what', originalResponse.headers.get("etag"));
  return new Response('etag: ' + originalResponse.headers.get("etag"))
}
