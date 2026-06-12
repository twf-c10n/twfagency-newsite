import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-_96boU3P.mjs';
import { defineComponent, ref, withAsyncContext, computed, watch, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAsyncData, c as getOurProjectsPage, p as pickLocalizedText, b as getMediaUrl } from './api-Ij6cH-3E.mjs';
import { h as useRuntimeConfig } from './server.mjs';
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
const fallbackSeoTitle = "Projects | TWF Agency";
const fallbackSeoDescription = "Explore TWF Agency project capabilities across media strategy, performance marketing, creative solutions, CRM, influencer marketing, and analytics.";
const fallbackHeroTitle = "Reach New Heights";
const fallbackHeroDescription = "Elite technical mastery meets uncompromising aesthetic standards. We architect digital dominance for high-growth innovators.";
const fallbackCardCopy = "High-resolution stills engineered for global campaigns and elite product launches.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activeCategoryId = ref("");
    const runtimeConfig = useRuntimeConfig();
    const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || "");
    const iconNames = ["aperture", "camera", "bolt", "layers"];
    const fallbackCategoryMeta = [
      {
        id: "media-strategy",
        label: "Media Strategy",
        title: "Media Strategy",
        description: "Achieve exponential growth with our full-funnel digital strategy services. From awareness to conversion, our results-focused approach delivers success at every stage of the customer journey."
      },
      {
        id: "performance-marketing",
        label: "Performance Marketing",
        title: "Performance Marketing",
        description: "Scale every conversion path with paid media, testing, tracking, and optimization systems built around measurable business growth."
      },
      {
        id: "creative-solutions",
        label: "Creative Solutions",
        title: "Creative Solutions",
        description: "Turn brand strategy into campaign ideas, content systems, and high-performing creative assets that move audiences to action."
      },
      {
        id: "crm-solutions",
        label: "CRM Solutions",
        title: "CRM Solutions",
        description: "Build lifecycle journeys that connect first-party data, segmentation, and retention programs into stronger customer relationships."
      },
      {
        id: "influencer-kol",
        label: "Influencer & KOL Affilate Marketing",
        title: "Influencer & KOL Affilate Marketing",
        description: "Match brands with credible creators and affiliate partners through accountable campaign operations and trackable outcomes."
      },
      {
        id: "analytics",
        label: "Digital Marketing Analytics",
        title: "Digital Marketing Analytics",
        description: "Clarify what works with measurement plans, dashboards, tagging, and insight frameworks that reveal where to scale next."
      }
    ];
    const fallbackCardsByCategory = {
      "media-strategy": [
        {
          icon: "aperture",
          title: "Communications Planning and Implementation",
          description: fallbackCardCopy,
          imageAlt: "Communications Planning and Implementation"
        },
        {
          icon: "camera",
          title: "Digital Brand Building",
          description: fallbackCardCopy,
          imageAlt: "Digital Brand Building"
        },
        {
          icon: "bolt",
          title: "Digital Marketing Consultation",
          description: fallbackCardCopy,
          imageAlt: "Digital Marketing Consultation"
        },
        {
          icon: "bolt",
          title: "Digital Marketing Consultation",
          description: fallbackCardCopy,
          imageAlt: "Digital Marketing Consultation"
        },
        {
          icon: "layers",
          title: "Digital Media Planning and Buying",
          description: fallbackCardCopy,
          imageAlt: "Digital Media Planning and Buying"
        }
      ],
      "performance-marketing": [
        {
          icon: "bolt",
          title: "Performance Campaign Architecture",
          description: fallbackCardCopy,
          imageAlt: "Performance Campaign Architecture"
        },
        {
          icon: "layers",
          title: "Conversion Optimization",
          description: fallbackCardCopy,
          imageAlt: "Conversion Optimization"
        },
        {
          icon: "camera",
          title: "Paid Search and Social Scaling",
          description: fallbackCardCopy,
          imageAlt: "Paid Search and Social Scaling"
        },
        {
          icon: "aperture",
          title: "Creative Testing Roadmap",
          description: fallbackCardCopy,
          imageAlt: "Creative Testing Roadmap"
        },
        {
          icon: "layers",
          title: "Attribution and Reporting",
          description: fallbackCardCopy,
          imageAlt: "Attribution and Reporting"
        }
      ],
      "creative-solutions": [
        {
          icon: "aperture",
          title: "Campaign Creative Direction",
          description: fallbackCardCopy,
          imageAlt: "Campaign Creative Direction"
        },
        {
          icon: "camera",
          title: "Content Production System",
          description: fallbackCardCopy,
          imageAlt: "Content Production System"
        },
        {
          icon: "layers",
          title: "Motion and Visual Design",
          description: fallbackCardCopy,
          imageAlt: "Motion and Visual Design"
        },
        {
          icon: "bolt",
          title: "Short-Form Creative Testing",
          description: fallbackCardCopy,
          imageAlt: "Short-Form Creative Testing"
        },
        {
          icon: "aperture",
          title: "Brand Asset Development",
          description: fallbackCardCopy,
          imageAlt: "Brand Asset Development"
        }
      ],
      "crm-solutions": [
        {
          icon: "layers",
          title: "Customer Journey Mapping",
          description: fallbackCardCopy,
          imageAlt: "Customer Journey Mapping"
        },
        {
          icon: "aperture",
          title: "Segmentation Strategy",
          description: fallbackCardCopy,
          imageAlt: "Segmentation Strategy"
        },
        {
          icon: "camera",
          title: "Retention Campaigns",
          description: fallbackCardCopy,
          imageAlt: "Retention Campaigns"
        },
        {
          icon: "bolt",
          title: "Marketing Automation",
          description: fallbackCardCopy,
          imageAlt: "Marketing Automation"
        },
        {
          icon: "layers",
          title: "Lifecycle Performance Review",
          description: fallbackCardCopy,
          imageAlt: "Lifecycle Performance Review"
        }
      ],
      "influencer-kol": [
        {
          icon: "camera",
          title: "Creator Matching and Planning",
          description: fallbackCardCopy,
          imageAlt: "Creator Matching and Planning"
        },
        {
          icon: "aperture",
          title: "KOL Campaign Operations",
          description: fallbackCardCopy,
          imageAlt: "KOL Campaign Operations"
        },
        {
          icon: "bolt",
          title: "Affiliate Program Management",
          description: fallbackCardCopy,
          imageAlt: "Affiliate Program Management"
        },
        {
          icon: "layers",
          title: "Content Usage Planning",
          description: fallbackCardCopy,
          imageAlt: "Content Usage Planning"
        },
        {
          icon: "camera",
          title: "Creator Performance Reporting",
          description: fallbackCardCopy,
          imageAlt: "Creator Performance Reporting"
        }
      ],
      analytics: [
        {
          icon: "layers",
          title: "Tracking Plan Development",
          description: fallbackCardCopy,
          imageAlt: "Tracking Plan Development"
        },
        {
          icon: "aperture",
          title: "Dashboard Architecture",
          description: fallbackCardCopy,
          imageAlt: "Dashboard Architecture"
        },
        {
          icon: "bolt",
          title: "Campaign Insight Reports",
          description: fallbackCardCopy,
          imageAlt: "Campaign Insight Reports"
        },
        {
          icon: "camera",
          title: "Data Quality Audit",
          description: fallbackCardCopy,
          imageAlt: "Data Quality Audit"
        },
        {
          icon: "layers",
          title: "Growth Opportunity Mapping",
          description: fallbackCardCopy,
          imageAlt: "Growth Opportunity Mapping"
        }
      ]
    };
    const fallbackCategories = fallbackCategoryMeta.map((category) => ({
      ...category,
      cards: (fallbackCardsByCategory[category.id] ?? []).map((card, index) => ({
        ...card,
        id: `${category.id}-${index}`
      }))
    }));
    const emptyCategory = {
      id: "projects",
      label: "Projects",
      title: "Projects",
      description: "",
      cards: []
    };
    const { data: projectsPage, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "page:our-projects",
      () => getOurProjectsPage()
    )), __temp = await __temp, __restore(), __temp);
    const asRecord = (source) => source;
    const createStableId = (value, fallback) => {
      const normalized = (value ?? "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      return normalized || fallback;
    };
    const mapProjectCard = (project, index) => {
      const title = pickLocalizedText(asRecord(project), "name", `Project ${index + 1}`);
      const description = pickLocalizedText(asRecord(project), "headline", fallbackCardCopy);
      const media = getMediaUrl(project.thumbnail ?? project.hero_banner, fallbackProjectMedia, apiBaseUrl);
      return {
        id: project.slug || `${createStableId(title, "project")}-${index}`,
        icon: iconNames[index % iconNames.length],
        title,
        description,
        image: media,
        imageAlt: project.thumbnail?.name || project.hero_banner?.name || title,
        href: project.slug ? `/project/${project.slug}` : void 0
      };
    };
    const mapProjectService = (service, index) => {
      const title = pickLocalizedText(asRecord(service), "name", `Service ${index + 1}`);
      const description = pickLocalizedText(
        asRecord(service),
        "description",
        "Explore selected project work from this service."
      );
      const id = service.id || createStableId(title, `service-${index + 1}`);
      return {
        id,
        label: title,
        title,
        description,
        cards: (service.projects ?? []).map(mapProjectCard)
      };
    };
    const apiCategories = computed(() => {
      return (projectsPage.value?.services ?? []).map(mapProjectService).filter((category) => category.title.trim());
    });
    const hasApiCategories = computed(() => apiCategories.value.length > 0);
    const projectCategories = computed(() => {
      return hasApiCategories.value ? apiCategories.value : fallbackCategories;
    });
    watch(
      projectCategories,
      (categories) => {
        if (!categories.length) {
          activeCategoryId.value = "";
          return;
        }
        if (!categories.some((category) => category.id === activeCategoryId.value)) {
          activeCategoryId.value = categories[0].id;
        }
      },
      { immediate: true }
    );
    const activeCategory = computed(() => {
      return projectCategories.value.find((category) => category.id === activeCategoryId.value) ?? projectCategories.value[0] ?? emptyCategory;
    });
    const activeCards = computed(() => activeCategory.value.cards);
    const heroTitle = computed(() => {
      return pickLocalizedText(asRecord(projectsPage.value), "name", fallbackHeroTitle);
    });
    const heroDescription = computed(() => {
      return pickLocalizedText(asRecord(projectsPage.value), "meta_description", fallbackHeroDescription);
    });
    useHead(() => {
      const title = pickLocalizedText(asRecord(projectsPage.value), "meta_title", fallbackSeoTitle);
      const description = pickLocalizedText(asRecord(projectsPage.value), "meta_description", fallbackSeoDescription);
      const keywords = pickLocalizedText(asRecord(projectsPage.value), "meta_keyword");
      const thumbnail = getMediaUrl(projectsPage.value?.meta_thumbnail, "", apiBaseUrl);
      const meta = [
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description }
      ];
      if (keywords) {
        meta.push({ name: "keywords", content: keywords });
      }
      if (thumbnail) {
        meta.push({ property: "og:image", content: thumbnail });
      }
      return {
        title,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page project-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/project" }, null, _parent));
      _push(`<main><section class="project-hero"><h1>${ssrInterpolate(unref(heroTitle))}</h1><p>${ssrInterpolate(unref(heroDescription))}</p></section><section class="project-categories" aria-label="Project categories"><!--[-->`);
      ssrRenderList(unref(projectCategories), (category) => {
        _push(`<button type="button" class="${ssrRenderClass({ active: unref(activeCategoryId) === category.id })}">${ssrInterpolate(category.label)}</button>`);
      });
      _push(`<!--]--></section>`);
      if (unref(pending)) {
        _push(`<p class="project-status" role="status"> Loading projects... </p>`);
      } else if (unref(error) && !unref(hasApiCategories)) {
        _push(`<p class="project-status" role="status"> Project data is unavailable. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="project-services"${ssrRenderAttr("aria-labelledby", `${unref(activeCategory).id}-title`)}><div class="project-service-copy"><h2${ssrRenderAttr("id", `${unref(activeCategory).id}-title`)}>${ssrInterpolate(unref(activeCategory).title)}</h2><p>${ssrInterpolate(unref(activeCategory).description)}</p></div>`);
      if (unref(activeCards).length) {
        _push(`<div class="project-card-grid"><!--[-->`);
        ssrRenderList(unref(activeCards), (card) => {
          _push(`<!--[-->`);
          if (card.href) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: card.href,
              class: ["project-card", { "has-media": card.image }]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  if (card.image) {
                    _push2(`<div class="project-card-media"${_scopeId}><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", card.imageAlt)} loading="lazy"${_scopeId}></div>`);
                  } else {
                    _push2(`<span class="${ssrRenderClass(["project-card-icon", card.icon])}" aria-hidden="true"${_scopeId}></span>`);
                  }
                  _push2(`<div class="project-card-body"${_scopeId}><h3${_scopeId}>${ssrInterpolate(card.title)}</h3><p${_scopeId}>${ssrInterpolate(card.description)}</p></div>`);
                } else {
                  return [
                    card.image ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "project-card-media"
                    }, [
                      createVNode("img", {
                        src: card.image,
                        alt: card.imageAlt,
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])
                    ])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: ["project-card-icon", card.icon],
                      "aria-hidden": "true"
                    }, null, 2)),
                    createVNode("div", { class: "project-card-body" }, [
                      createVNode("h3", null, toDisplayString(card.title), 1),
                      createVNode("p", null, toDisplayString(card.description), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<article class="${ssrRenderClass(["project-card", { "has-media": card.image }])}">`);
            if (card.image) {
              _push(`<div class="project-card-media"><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", card.imageAlt)} loading="lazy"></div>`);
            } else {
              _push(`<span class="${ssrRenderClass(["project-card-icon", card.icon])}" aria-hidden="true"></span>`);
            }
            _push(`<div class="project-card-body"><h3>${ssrInterpolate(card.title)}</h3><p>${ssrInterpolate(card.description)}</p></div></article>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="project-empty" role="status"> Projects for this category are coming soon. </div>`);
      }
      _push(`</section></main><footer class="about-figma-footer project-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BcTvEkxl.mjs.map
