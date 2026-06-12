/**
 * API composable for communicating with the Laravel backend.
 *
 * Usage:
 * ```ts
 * const api = useApi()
 * const { data } = await api.get('pages/homepage')
 * ```
 *
 * The composable automatically handles:
 * - Base URL via proxy (/api/ → backend)
 * - CSRF token setup (Laravel Sanctum)
 * - Error responses
 */

interface ApiResponse<T = unknown> {
  statusCode: number
  message: string
  data: T
  error?: unknown
}

export function useApi() {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl || '/api'

  /**
   * Get CSRF cookie from Sanctum (required before POST requests).
   */
  async function ensureCsrf(): Promise<void> {
    await $fetch(`${baseUrl}/sanctum/csrf-cookie`, {
      method: 'GET',
      credentials: 'include',
    })
  }

  /**
   * GET request.
   */
  async function get<T = unknown>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await $fetch<ApiResponse<T>>(`${baseUrl}/${endpoint}`, {
        method: 'GET',
        credentials: 'include',
      })
      return response
    } catch (err: any) {
      if (err?.response?._data) {
        return err.response._data as ApiResponse<T>
      }
      return {
        statusCode: 500,
        message: err?.message || 'Network error',
        data: null as unknown as T,
      }
    }
  }

  /**
   * POST request with automatic CSRF token handling.
   */
  async function post<T = unknown>(
    endpoint: string,
    body?: Record<string, unknown>,
  ): Promise<ApiResponse<T>> {
    try {
      await ensureCsrf()
      const response = await $fetch<ApiResponse<T>>(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        body,
        credentials: 'include',
        headers: {
          Accept: 'application/json',
        },
      })
      return response
    } catch (err: any) {
      if (err?.response?._data) {
        return err.response._data as ApiResponse<T>
      }
      return {
        statusCode: 500,
        message: err?.message || 'Network error',
        data: null as unknown as T,
      }
    }
  }

  /**
   * Fetch a CMS page by slug.
   * Returns the `data` field from the API response, or null on error.
   */
  async function fetchPage<T = Record<string, unknown>>(
    slug: string,
  ): Promise<T | null> {
    const response = await get<T>(`pages/${slug}`)
    if (response.statusCode === 200 && response.data) {
      return response.data
    }
    return null
  }

  /**
   * Fetch global config.
   */
  async function fetchGlobalConfig<T = Record<string, unknown>>(): Promise<T | null> {
    const response = await get<T>('global/config')
    if (response.statusCode === 200 && response.data) {
      return response.data
    }
    return null
  }

  /**
   * Fetch projects for a given service slug.
   */
  async function fetchProject<T = Record<string, unknown>>(
    slug: string,
  ): Promise<T | null> {
    const response = await get<T>(`pages/our-project/${slug}`)
    if (response.statusCode === 200 && response.data) {
      return response.data
    }
    return null
  }

  /**
   * Fetch blog posts from WordPress.
   */
  async function fetchBlogs(
    page = 1,
    perPage = 10,
  ): Promise<{ blogs: unknown[]; countAllBlog: number } | null> {
    const response = await get<{ blogs: unknown[]; countAllBlog: number }>(
      `wp/blogs?page=${page}&per-page=${perPage}`,
    )
    if (response.statusCode === 200 && response.data) {
      return response.data
    }
    return null
  }

  /**
   * Fetch a single blog post by slug.
   */
  async function fetchBlogDetail<T = Record<string, unknown>>(
    slug: string,
  ): Promise<T | null> {
    const response = await get<T>(`wp/blog/${slug}`)
    if (response.statusCode === 200 && response.data) {
      return response.data
    }
    return null
  }

  /**
   * Submit a contact form.
   */
  async function submitContactForm(
    formData: Record<string, unknown>,
  ): Promise<ApiResponse<unknown>> {
    return post('pages/contact-us/form', formData)
  }

  return {
    get,
    post,
    ensureCsrf,
    fetchPage,
    fetchGlobalConfig,
    fetchProject,
    fetchBlogs,
    fetchBlogDetail,
    submitContactForm,
  }
}
