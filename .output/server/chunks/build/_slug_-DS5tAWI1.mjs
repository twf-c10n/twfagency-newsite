globalThis.__timing__.logStart('Load chunks/build/_slug_-DS5tAWI1');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-_96boU3P.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData, d as getProjectDetail, p as pickLocalizedText, b as getMediaUrl } from './api-Ij6cH-3E.mjs';
import { d as useRoute, h as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './composables-CXt4RJfp.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@vue/shared';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const aboutAssetPath = "/assets/about-figma";
const fallbackProjectMedia = "/assets/Abstract_grain.jpg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const rawSlug = route.params.slug;
    const slug = Array.isArray(rawSlug) ? rawSlug[0] : String(rawSlug ?? "");
    const runtimeConfig = useRuntimeConfig();
    const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || "");
    const { data: project, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `project-detail:${slug}`,
      () => getProjectDetail(slug)
    )), __temp = await __temp, __restore(), __temp);
    const asRecord = (source) => source;
    const toTextList = (value) => {
      if (!value) {
        return [];
      }
      if (typeof value === "string") {
        return value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
      }
      if (Array.isArray(value)) {
        return value.flatMap(toTextList);
      }
      if (typeof value === "object") {
        return Object.values(value).flatMap(toTextList);
      }
      return [String(value)];
    };
    const mapMediaList = (items) => {
      return (items ?? []).map((media) => ({
        src: getMediaUrl(media, "", apiBaseUrl),
        alt: media.name || "Project media"
      })).filter((media) => media.src);
    };
    const title = computed(() => {
      return pickLocalizedText(asRecord(project.value), "name", "Project");
    });
    const headline = computed(() => {
      return pickLocalizedText(asRecord(project.value), "headline");
    });
    const heroImage = computed(() => {
      return getMediaUrl(
        project.value?.hero_banner ?? project.value?.thumbnail ?? project.value?.meta_thumbnail,
        fallbackProjectMedia,
        apiBaseUrl
      );
    });
    const sections = computed(() => {
      const source = asRecord(project.value);
      return [
        {
          id: "overview",
          title: "Overview",
          body: pickLocalizedText(source, "content")
        },
        {
          id: "challenge",
          title: "Challenge",
          body: pickLocalizedText(source, "chanllenge_text")
        },
        {
          id: "solution",
          title: "Solution",
          body: pickLocalizedText(source, "solution_text")
        },
        {
          id: "showcase",
          title: "Showcase",
          body: pickLocalizedText(source, "showcase_content")
        },
        {
          id: "result",
          title: "Result",
          body: pickLocalizedText(source, "result_text")
        }
      ].filter((section) => section.body.trim());
    });
    const deliverables = computed(() => toTextList(project.value?.deliverable_texts));
    const measurables = computed(() => toTextList(project.value?.measurables));
    const deliverableImages = computed(() => mapMediaList(project.value?.deliverable_attachments));
    const showcaseImages = computed(() => mapMediaList(project.value?.showcase_attachment));
    const showcaseMainMedia = computed(() => {
      const media = getMediaUrl(project.value?.showcase_media, "", apiBaseUrl);
      return media ? {
        src: media,
        alt: project.value?.showcase_media?.name || title.value
      } : null;
    });
    const resultImage = computed(() => {
      const media = getMediaUrl(project.value?.result_attachment, "", apiBaseUrl);
      return media ? {
        src: media,
        alt: project.value?.result_attachment?.name || title.value
      } : null;
    });
    const getProjectLink = (card) => {
      return card?.slug ? `/project/${card.slug}` : "";
    };
    const getProjectName = (card, fallback = "Project") => {
      return pickLocalizedText(asRecord(card), "name", fallback);
    };
    useHead(() => {
      const seoTitle = pickLocalizedText(asRecord(project.value), "meta_title", `${title.value} | TWF Agency`);
      const description = pickLocalizedText(asRecord(project.value), "meta_description", headline.value || seoTitle);
      const keywords = pickLocalizedText(asRecord(project.value), "meta_keyword");
      const thumbnail = getMediaUrl(project.value?.meta_thumbnail ?? project.value?.thumbnail, "", apiBaseUrl);
      const meta = [
        { name: "description", content: description },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: description }
      ];
      if (keywords) {
        meta.push({ name: "keywords", content: keywords });
      }
      if (thumbnail) {
        meta.push({ property: "og:image", content: thumbnail });
      }
      return {
        title: seoTitle,
        meta
      };
    });
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page project-page project-detail-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/project" }, null, _parent));
      _push(`<main><section class="project-detail-hero"><div class="project-detail-hero-copy">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "project-detail-back",
        to: "/project"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1>${ssrInterpolate(unref(title))}</h1>`);
      if (unref(headline)) {
        _push(`<p>${ssrInterpolate(unref(headline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="project-detail-hero-media"><img${ssrRenderAttr("src", unref(heroImage))}${ssrRenderAttr("alt", unref(title))}></div></section>`);
      if (unref(pending)) {
        _push(`<section class="project-detail-status" role="status"> Loading project... </section>`);
      } else if (unref(error)) {
        _push(`<section class="project-detail-status" role="status"> Project could not be loaded. </section>`);
      } else if (unref(project)) {
        _push(`<!--[-->`);
        if (unref(sections).length) {
          _push(`<section class="project-detail-sections"><!--[-->`);
          ssrRenderList(unref(sections), (section) => {
            _push(`<article class="project-detail-section"><h2>${ssrInterpolate(section.title)}</h2><p>${ssrInterpolate(section.body)}</p></article>`);
          });
          _push(`<!--]--></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(deliverables).length || unref(deliverableImages).length) {
          _push(`<section class="project-detail-feature"><div><h2>Deliverables</h2>`);
          if (unref(deliverables).length) {
            _push(`<ul><!--[-->`);
            ssrRenderList(unref(deliverables), (item) => {
              _push(`<li>${ssrInterpolate(item)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (unref(deliverableImages).length) {
            _push(`<div class="project-detail-media-grid"><!--[-->`);
            ssrRenderList(unref(deliverableImages), (media) => {
              _push(`<img${ssrRenderAttr("src", media.src)}${ssrRenderAttr("alt", media.alt)} loading="lazy">`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(showcaseMainMedia) || unref(showcaseImages).length || unref(project).showcase_url) {
          _push(`<section class="project-detail-showcase"><h2>Showcase</h2>`);
          if (unref(showcaseMainMedia)) {
            _push(`<div class="project-detail-wide-media"><img${ssrRenderAttr("src", unref(showcaseMainMedia).src)}${ssrRenderAttr("alt", unref(showcaseMainMedia).alt)} loading="lazy"></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(showcaseImages).length) {
            _push(`<div class="project-detail-media-grid"><!--[-->`);
            ssrRenderList(unref(showcaseImages), (media) => {
              _push(`<img${ssrRenderAttr("src", media.src)}${ssrRenderAttr("alt", media.alt)} loading="lazy">`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(project).showcase_url) {
            _push(`<a class="project-detail-link"${ssrRenderAttr("href", unref(project).showcase_url)} target="_blank" rel="noreferrer"> Open showcase </a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(measurables).length || unref(resultImage) || unref(project).result_url) {
          _push(`<section class="project-detail-feature"><div><h2>Measurables</h2>`);
          if (unref(measurables).length) {
            _push(`<ul><!--[-->`);
            ssrRenderList(unref(measurables), (item) => {
              _push(`<li>${ssrInterpolate(item)}</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(project).result_url) {
            _push(`<a class="project-detail-link"${ssrRenderAttr("href", unref(project).result_url)} target="_blank" rel="noreferrer"> Open result </a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (unref(resultImage)) {
            _push(`<div class="project-detail-wide-media"><img${ssrRenderAttr("src", unref(resultImage).src)}${ssrRenderAttr("alt", unref(resultImage).alt)} loading="lazy"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        if (getProjectLink(unref(project).previous) || getProjectLink(unref(project).next)) {
          _push(`<nav class="project-detail-nav" aria-label="Project navigation">`);
          if (getProjectLink(unref(project).previous)) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: getProjectLink(unref(project).previous)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>Previous</span> ${ssrInterpolate(getProjectName(unref(project).previous, "Previous project"))}`);
                } else {
                  return [
                    createVNode("span", null, "Previous"),
                    createTextVNode(" " + toDisplayString(getProjectName(unref(project).previous, "Previous project")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (getProjectLink(unref(project).next)) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: getProjectLink(unref(project).next)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>Next</span> ${ssrInterpolate(getProjectName(unref(project).next, "Next project"))}`);
                } else {
                  return [
                    createVNode("span", null, "Next"),
                    createTextVNode(" " + toDisplayString(getProjectName(unref(project).next, "Next project")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main><footer class="about-figma-footer project-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.label)}><img${ssrRenderAttr("src", social.src)} alt=""></a>`);
      });
      _push(`<!--]--></div></div><p class="about-copyright">Copyright ©2022 DIGITAL MARKETING CONSULTANCY</p></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/_slug_-DS5tAWI1');
//# sourceMappingURL=_slug_-DS5tAWI1.mjs.map
