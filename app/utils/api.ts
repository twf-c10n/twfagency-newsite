import { useRuntimeConfig } from '#app'

export type ApiResponse<T> = {
  statusCode: number
  message: string | { errors?: Record<string, string[]> }
  data?: T
}

export type Media = {
  name?: string
  type?: string
  value?: string
}

export type PageMeta = {
  name_en?: string
  name_th?: string
  meta_title_en?: string
  meta_title_th?: string
  meta_description_en?: string
  meta_description_th?: string
  meta_keyword_en?: string
  meta_keyword_th?: string
  meta_thumbnail?: Media
}

export type ProjectCard = {
  slug?: string
  name_en?: string
  name_th?: string
  headline_en?: string
  headline_th?: string
  hero_banner?: Media
  thumbnail?: Media
}

export type ProjectService = {
  id?: string
  name_en?: string
  name_th?: string
  description_en?: string
  description_th?: string
  project_ids?: string[]
  projects?: ProjectCard[]
}

export type OurProjectsPage = PageMeta & {
  services?: ProjectService[]
}

export type ContactService = {
  id: string
  name_en?: string | null
  name_th?: string | null
}

export type ContactUsPage = PageMeta & {
  service_ids?: string[]
  services?: ContactService[]
}

export type ProjectDetail = PageMeta & {
  slug?: string
  name_en?: string
  name_th?: string
  headline_en?: string
  headline_th?: string
  template?: string
  hero_banner?: Media
  thumbnail?: Media
  chanllenge_text_en?: string
  chanllenge_text_th?: string
  deliverable_texts?: unknown
  deliverable_attachments?: Media[]
  solution_text_en?: string
  solution_text_th?: string
  showcase_attachment?: Media[]
  showcase_media?: Media
  showcase_url?: string
  showcase_embed?: Media
  showcase_content_en?: string
  showcase_content_th?: string
  result_text_en?: string
  result_text_th?: string
  result_attachment?: Media
  result_url?: string
  measurables?: unknown
  content_en?: string
  content_th?: string
  previous?: ProjectCard | null
  next?: ProjectCard | null
}

export type GlobalConfig = {
  heads?: {
    meta_title_en?: string
    meta_title_th?: string
    meta_description_en?: string
    meta_description_th?: string
    meta_keyword_en?: string
    meta_keyword_th?: string
    meta_thumbnail?: Media
    scripts?: Array<{
      on_head: boolean
      body?: string
      code?: string
    }>
  }
  footers?: Record<
    string,
    {
      type?: string
      name_en?: string
      name_th?: string
      value?: string
    }
  >
}

export type ContactFormPayload = {
  fullname: string
  email: string
  phone: string
  company_name: string
  estimated_budget: {
    min: number
    max: number
  }
  form_type: string
  objectives: string
  has_accepted: boolean
  other_service?: string | null
  services?: string[]
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
}

export type BlogList = {
  blogs: Array<{
    slug: string
    title: string
    content: string
    url: string
    postDate: string
    authorName: string
    imageUrl: string | null
  }>
  countAllBlog: number
}

export class PublicApiError extends Error {
  statusCode?: number
  errors?: Record<string, string[]>
  responseMessage?: ApiResponse<unknown>['message']

  constructor(
    message: string,
    options: {
      statusCode?: number
      errors?: Record<string, string[]>
      responseMessage?: ApiResponse<unknown>['message']
    } = {}
  ) {
    super(message)
    this.name = 'PublicApiError'
    this.statusCode = options.statusCode
    this.errors = options.errors
    this.responseMessage = options.responseMessage
  }
}

type ApiFetchOptions = Omit<RequestInit, 'body'> & {
  body?: BodyInit | object | null
  query?: Record<string, string | number | boolean | null | undefined>
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const isApiResponse = <T>(value: unknown): value is ApiResponse<T> => {
  return isRecord(value) && typeof value.statusCode === 'number' && 'message' in value
}

const isJsonBody = (value: unknown) => {
  if (!value || typeof value !== 'object') {
    return false
  }

  if (
    (typeof FormData !== 'undefined' && value instanceof FormData) ||
    (typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer)
  ) {
    return false
  }

  return true
}

const getConfiguredApiBaseUrl = (apiBaseUrl?: string) => {
  if (apiBaseUrl !== undefined) {
    return String(apiBaseUrl || '').replace(/\/+$/, '')
  }

  const config = useRuntimeConfig()

  return String(config.public.apiBaseUrl || '').replace(/\/+$/, '')
}

const getConfiguredApiOrigin = (apiBaseUrl?: string) => {
  const baseUrl = getConfiguredApiBaseUrl(apiBaseUrl)

  if (!baseUrl) {
    return ''
  }

  try {
    return new URL(baseUrl).origin
  } catch {
    return ''
  }
}

const shouldUseApiOriginForLocalMedia = (mediaUrl: URL, apiOrigin: string) => {
  if (!apiOrigin) {
    return false
  }

  try {
    const apiUrl = new URL(apiOrigin)
    const isLocalMediaHost = ['localhost', '127.0.0.1'].includes(mediaUrl.hostname)
    const isLocalApiHost = ['localhost', '127.0.0.1'].includes(apiUrl.hostname)

    return isLocalMediaHost && isLocalApiHost && mediaUrl.origin !== apiUrl.origin
  } catch {
    return false
  }
}

const normalizeMediaUrl = (value: string, apiBaseUrl?: string) => {
  const apiOrigin = getConfiguredApiOrigin(apiBaseUrl)

  try {
    const mediaUrl = new URL(value)

    if (shouldUseApiOriginForLocalMedia(mediaUrl, apiOrigin)) {
      return `${apiOrigin}${mediaUrl.pathname}${mediaUrl.search}${mediaUrl.hash}`
    }
  } catch {
    return value
  }

  return value
}

const buildApiUrl = (
  path: string,
  query?: ApiFetchOptions['query']
) => {
  const isAbsolute = /^https?:\/\//i.test(path)
  const baseUrl = getConfiguredApiBaseUrl()

  if (!isAbsolute && !baseUrl) {
    throw new PublicApiError('API base URL is not configured.', {
      statusCode: 500
    })
  }

  const url = new URL(
    isAbsolute ? path : `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
  )

  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.set(key, String(value))
    }
  })

  return url.toString()
}

const parseResponseBody = async (response: Response) => {
  const text = await response.text()

  if (!text) {
    return undefined
  }

  try {
    return JSON.parse(text) as unknown
  } catch {
    return text
  }
}

const getErrorsFromMessage = (message: ApiResponse<unknown>['message']) => {
  if (typeof message === 'string') {
    return undefined
  }

  return message.errors
}

const getReadableMessage = (
  message: ApiResponse<unknown>['message'] | undefined,
  fallback: string
) => {
  if (!message) {
    return fallback
  }

  if (typeof message === 'string') {
    return message
  }

  const firstError = Object.values(message.errors ?? {}).flat()[0]

  return firstError || fallback
}

const throwApiError = (
  payload: unknown,
  fallbackStatusCode: number,
  fallbackMessage = 'API request failed.'
) => {
  if (isApiResponse<unknown>(payload)) {
    throw new PublicApiError(getReadableMessage(payload.message, fallbackMessage), {
      statusCode: payload.statusCode || fallbackStatusCode,
      errors: getErrorsFromMessage(payload.message),
      responseMessage: payload.message
    })
  }

  if (isRecord(payload) && 'message' in payload) {
    const message = payload.message
    const readableMessage = typeof message === 'string' ? message : fallbackMessage

    throw new PublicApiError(readableMessage, {
      statusCode: fallbackStatusCode
    })
  }

  throw new PublicApiError(fallbackMessage, {
    statusCode: fallbackStatusCode
  })
}

export const apiFetch = async <T>(
  path: string,
  options: ApiFetchOptions = {}
): Promise<T> => {
  const { body: rawBody, headers: rawHeaders, query, ...fetchOptions } = options
  const headers = new Headers(rawHeaders)

  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json')
  }

  let body = rawBody as BodyInit | null | undefined

  if (isJsonBody(rawBody)) {
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json')
    }

    body = JSON.stringify(rawBody)
  }

  const response = await fetch(buildApiUrl(path, query), {
    ...fetchOptions,
    headers,
    body
  })
  const payload = await parseResponseBody(response)

  if (!response.ok) {
    throwApiError(payload, response.status)
  }

  if (isApiResponse<T>(payload)) {
    if (payload.statusCode < 200 || payload.statusCode >= 300) {
      throwApiError(payload, payload.statusCode)
    }

    return ('data' in payload ? payload.data : undefined) as T
  }

  return payload as T
}

export const getMediaUrl = (media?: Media | null, fallback = '', apiBaseUrl?: string) => {
  const value = media?.value?.trim()

  if (!value) {
    return fallback
  }

  if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('/assets/')) {
    return normalizeMediaUrl(value, apiBaseUrl)
  }

  if (value.startsWith('/')) {
    const origin = getConfiguredApiOrigin(apiBaseUrl)

    return origin ? `${origin}${value}` : value
  }

  return value
}

export const pickLocalizedText = (
  source: Record<string, unknown> | null | undefined,
  field: string,
  fallback = '',
  locale: 'en' | 'th' = 'en'
) => {
  const preferred = source?.[`${field}_${locale}`]
  const secondary = source?.[`${field}_${locale === 'en' ? 'th' : 'en'}`]

  if (typeof preferred === 'string' && preferred.trim()) {
    return preferred
  }

  if (typeof secondary === 'string' && secondary.trim()) {
    return secondary
  }

  return fallback
}

export const getGlobalConfig = () => apiFetch<GlobalConfig>('/global/config')

export const getPageBySlug = <T extends PageMeta = PageMeta>(slug: string) => {
  return apiFetch<T>(`/pages/${encodeURIComponent(slug)}`)
}

export const getHomepage = () => getPageBySlug('homepage')

export const getServicesPage = () => getPageBySlug('services')

export const getOurProjectsPage = () => getPageBySlug<OurProjectsPage>('our-projects')

export const getContactUsPage = () => getPageBySlug<ContactUsPage>('contact-us')

export const getAboutUsPage = () => getPageBySlug('about-us')

export const getProjectDetail = (slug: string) => {
  return apiFetch<ProjectDetail>(`/pages/our-project/${encodeURIComponent(slug)}`)
}

export const submitContactForm = (payload: ContactFormPayload) => {
  return apiFetch<void>('/pages/contact-us/form', {
    method: 'POST',
    body: payload
  })
}

export const getBlogs = (params: { page: number, perPage: number }) => {
  return apiFetch<BlogList>('/wp/blogs', {
    query: {
      page: params.page,
      'per-page': Math.min(params.perPage, 10)
    }
  })
}

export const getBlogDetail = (slug: string) => {
  return apiFetch<BlogList['blogs'][number]>(`/wp/blog/${encodeURIComponent(slug)}`)
}
