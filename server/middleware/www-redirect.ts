import { defineEventHandler, getRequestHeader, getRequestURL, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host')

  if (!host?.toLowerCase().startsWith('www.')) {
    return
  }

  const url = getRequestURL(event)
  const protocol = getRequestHeader(event, 'x-forwarded-proto') || url.protocol.replace(':', '')
  const targetHost = host.replace(/^www\./i, '')
  const target = `${protocol}://${targetHost}${url.pathname}${url.search}`

  return sendRedirect(event, target, 301)
})
