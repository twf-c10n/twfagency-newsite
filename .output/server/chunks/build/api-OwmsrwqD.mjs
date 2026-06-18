globalThis.__timing__.logStart('Load chunks/build/api-OwmsrwqD');import { k as useRuntimeConfig } from './server.mjs';

const leadBudgetOptions = [
  "1,000,000 - 3,000,000",
  "3,000,000 - 5,000,000",
  "> 5,000,000"
];
class PublicApiError extends Error {
  statusCode;
  errors;
  responseMessage;
  constructor(message, options = {}) {
    super(message);
    this.name = "PublicApiError";
    this.statusCode = options.statusCode;
    this.errors = options.errors;
    this.responseMessage = options.responseMessage;
  }
}
const isRecord = (value) => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};
const isApiResponse = (value) => {
  return isRecord(value) && typeof value.statusCode === "number" && "message" in value;
};
const isJsonBody = (value) => {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (typeof FormData !== "undefined" && value instanceof FormData || typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams || typeof Blob !== "undefined" && value instanceof Blob || typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
    return false;
  }
  return true;
};
const getConfiguredApiBaseUrl = (apiBaseUrl) => {
  if (apiBaseUrl !== void 0) {
    return String(apiBaseUrl || "").replace(/\/+$/, "");
  }
  const config = useRuntimeConfig();
  return String(config.public.apiBaseUrl || "").replace(/\/+$/, "");
};
const getConfiguredApiOrigin = (apiBaseUrl) => {
  const baseUrl = getConfiguredApiBaseUrl(apiBaseUrl);
  if (!baseUrl) {
    return "";
  }
  try {
    return new URL(baseUrl).origin;
  } catch {
    return "";
  }
};
const shouldUseApiOriginForLocalMedia = (mediaUrl, apiOrigin) => {
  if (!apiOrigin) {
    return false;
  }
  try {
    const apiUrl = new URL(apiOrigin);
    const isLocalMediaHost = ["localhost", "127.0.0.1"].includes(mediaUrl.hostname);
    const isLocalApiHost = ["localhost", "127.0.0.1"].includes(apiUrl.hostname);
    return isLocalMediaHost && isLocalApiHost && mediaUrl.origin !== apiUrl.origin;
  } catch {
    return false;
  }
};
const normalizeMediaUrl = (value, apiBaseUrl) => {
  const apiOrigin = getConfiguredApiOrigin(apiBaseUrl);
  try {
    const mediaUrl = new URL(value);
    if (shouldUseApiOriginForLocalMedia(mediaUrl, apiOrigin)) {
      return `${apiOrigin}${mediaUrl.pathname}${mediaUrl.search}${mediaUrl.hash}`;
    }
  } catch {
    return value;
  }
  return value;
};
const buildApiUrl = (path, query) => {
  const isAbsolute = /^https?:\/\//i.test(path);
  const baseUrl = getConfiguredApiBaseUrl();
  if (!isAbsolute && !baseUrl) {
    throw new PublicApiError("API base URL is not configured.", {
      statusCode: 500
    });
  }
  const url = new URL(
    isAbsolute ? path : `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`
  );
  Object.entries(query ?? {}).forEach(([key, value]) => {
    if (value !== null && value !== void 0) {
      url.searchParams.set(key, String(value));
    }
  });
  return url.toString();
};
const parseResponseBody = async (response) => {
  const text = await response.text();
  if (!text) {
    return void 0;
  }
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};
const getErrorsFromMessage = (message) => {
  if (typeof message === "string") {
    return void 0;
  }
  return message.errors;
};
const getReadableMessage = (message, fallback) => {
  if (!message) {
    return fallback;
  }
  if (typeof message === "string") {
    if (message === "EMAIL_NOT_SEND") {
      return "Unable to send email right now. Please try again or email us at mailus@twfagency.com.";
    }
    return message;
  }
  const firstError = Object.values(message.errors ?? {}).flat()[0];
  return firstError || fallback;
};
const throwApiError = (payload, fallbackStatusCode, fallbackMessage = "API request failed.") => {
  if (isApiResponse(payload)) {
    throw new PublicApiError(getReadableMessage(payload.message, fallbackMessage), {
      statusCode: payload.statusCode || fallbackStatusCode,
      errors: getErrorsFromMessage(payload.message),
      responseMessage: payload.message
    });
  }
  if (isRecord(payload) && "message" in payload) {
    const message = payload.message;
    const readableMessage = typeof message === "string" ? message : fallbackMessage;
    throw new PublicApiError(readableMessage, {
      statusCode: fallbackStatusCode
    });
  }
  throw new PublicApiError(fallbackMessage, {
    statusCode: fallbackStatusCode
  });
};
const apiFetch = async (path, options = {}) => {
  const { body: rawBody, headers: rawHeaders, query, ...fetchOptions } = options;
  const headers = new Headers(rawHeaders);
  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }
  let body = rawBody;
  if (isJsonBody(rawBody)) {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
    body = JSON.stringify(rawBody);
  }
  const response = await fetch(buildApiUrl(path, query), {
    ...fetchOptions,
    headers,
    body
  });
  const payload = await parseResponseBody(response);
  if (!response.ok) {
    throwApiError(payload, response.status);
  }
  if (isApiResponse(payload)) {
    if (payload.statusCode < 200 || payload.statusCode >= 300) {
      throwApiError(payload, payload.statusCode);
    }
    return "data" in payload ? payload.data : void 0;
  }
  return payload;
};
const getMediaUrl = (media, fallback = "", apiBaseUrl) => {
  const value = media?.value?.trim();
  if (!value) {
    return fallback;
  }
  if (/^(https?:)?\/\//i.test(value) || value.startsWith("data:") || value.startsWith("/assets/")) {
    return normalizeMediaUrl(value, apiBaseUrl);
  }
  if (value.startsWith("/")) {
    const origin = getConfiguredApiOrigin(apiBaseUrl);
    return origin ? `${origin}${value}` : value;
  }
  return value;
};
const pickLocalizedText = (source, field, fallback = "", locale = "en") => {
  const preferred = source?.[`${field}_${locale}`];
  const secondary = source?.[`${field}_${locale === "en" ? "th" : "en"}`];
  if (typeof preferred === "string" && preferred.trim()) {
    return preferred;
  }
  if (typeof secondary === "string" && secondary.trim()) {
    return secondary;
  }
  return fallback;
};
const getPageBySlug = (slug) => {
  return apiFetch(`/pages/${encodeURIComponent(slug)}`);
};
const getOurProjectsPage = () => getPageBySlug("our-projects");
const getContactUsPage = () => getPageBySlug("contact-us");
const getProjectDetail = (slug) => {
  return apiFetch(`/pages/our-project/${encodeURIComponent(slug)}`);
};

export { getMediaUrl as a, getOurProjectsPage as b, getProjectDetail as c, getContactUsPage as g, leadBudgetOptions as l, pickLocalizedText as p };;globalThis.__timing__.logEnd('Load chunks/build/api-OwmsrwqD');
//# sourceMappingURL=api-OwmsrwqD.mjs.map
