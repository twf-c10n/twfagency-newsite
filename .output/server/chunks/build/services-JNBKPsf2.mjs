globalThis.__timing__.logStart('Load chunks/build/services-JNBKPsf2');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead } from './composables-CXt4RJfp.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const aboutAssetPath = "/assets/about-figma";
const assetPath = "/assets/services-figma";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Our Services | TWF Agency",
      meta: [
        {
          name: "description",
          content: "Explore TWF Agency services across media strategy, performance marketing, creative solutions, CRM, influencer marketing, analytics, and LINE business solutions."
        }
      ]
    });
    const activeServiceId = ref("media-strategy");
    const services = [
      {
        id: "media-strategy",
        title: "Media Strategy",
        eyebrow: "Planning System",
        image: `${assetPath}/media-strategy.jpg`,
        accent: "#39b54a",
        description: "We map the full funnel from audience insight to channel mix, building campaign architecture that makes every baht work harder.",
        points: ["Audience planning", "Channel architecture", "Budget allocation"]
      },
      {
        id: "performance-marketing",
        title: "Performance Marketing",
        eyebrow: "Growth Engine",
        image: `${assetPath}/performance-marketing.jpg`,
        accent: "#00a8de",
        description: "Always-on optimization across paid platforms with creative testing, conversion tracking, and measurable growth loops.",
        points: ["Paid social and search", "Conversion optimization", "Experiment roadmaps"]
      },
      {
        id: "creative-solutions",
        title: "Creative Solutions",
        eyebrow: "Creative Studio",
        image: `${assetPath}/creative-solutions.jpg`,
        accent: "#eb2d2e",
        description: "Campaign ideas, key visuals, motion, and content systems designed to stop the scroll and drive action.",
        points: ["Campaign concepts", "Content production", "Visual systems"]
      },
      {
        id: "crm-solutions",
        title: "CRM Solutions",
        eyebrow: "Lifecycle Design",
        image: `${assetPath}/crm-solutions.jpg`,
        accent: "#93278f",
        description: "Lifecycle journeys that turn first-party data into smarter segmentation, retention, and repeat purchase.",
        points: ["Customer journeys", "Segmentation", "Retention campaigns"]
      },
      {
        id: "influencer-kol",
        title: "Influencer & KOL Affiliate Marketing",
        eyebrow: "Creator Network",
        image: `${assetPath}/influencer-kol.jpg`,
        accent: "#fde92b",
        description: "Creator programs built around audience fit, credible storytelling, and trackable business outcomes.",
        points: ["KOL selection", "Affiliate operations", "Performance reporting"]
      },
      {
        id: "analytics",
        title: "Digital Marketing Analytics",
        eyebrow: "Insight Layer",
        image: `${assetPath}/analytics.jpg`,
        accent: "#00a8de",
        description: "Dashboards, tagging, and insight frameworks that clarify what is working and where to scale next.",
        points: ["Tracking plans", "Dashboards", "Insight reports"]
      },
      {
        id: "line-business",
        title: "LINE Service for Business",
        eyebrow: "Messaging Commerce",
        image: `${assetPath}/line-business.jpg`,
        accent: "#39b54a",
        description: "LINE OA, CRM, commerce, and messaging solutions for Thai brands that need tighter customer relationships.",
        points: ["LINE OA strategy", "Rich menu and messaging", "Commerce integration"]
      }
    ];
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    const activeService = computed(() => {
      return services.find((service) => service.id === activeServiceId.value) ?? services[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page services-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/services" }, null, _parent));
      _push(`<main><section class="services-hero"><h1>Our Services TWF Agency</h1><p> We are a high-end digital agency merging uncompromising technical mastery with unbounded creativity. For 15 years, we have engineered digital experiences for high-growth tech firms and luxury innovators. </p></section><section class="agency-services-showcase" style="${ssrRenderStyle({ "--active-accent": unref(activeService).accent })}" aria-labelledby="agency-services-title"><div class="automotive-bg" aria-hidden="true"></div><div class="automotive-gridline" aria-hidden="true"></div><div class="automotive-inner"><aside class="automotive-menu" aria-label="Agency services"><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<button type="button" class="${ssrRenderClass({ active: unref(activeServiceId) === service.id })}" style="${ssrRenderStyle({ "--item-accent": service.accent })}"><span>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><b>${ssrInterpolate(service.title)}</b></button>`);
      });
      _push(`<!--]--></aside><article class="automotive-content"><figure class="automotive-media"><img${ssrRenderAttr("src", unref(activeService).image)}${ssrRenderAttr("alt", `${unref(activeService).title} campaign visual`)}></figure><div class="automotive-copy"><p>Agency Service / ${ssrInterpolate(unref(activeService).eyebrow)}</p><div class="automotive-copy-panel"><h2 id="agency-services-title">${ssrInterpolate(unref(activeService).title)}</h2><span>${ssrInterpolate(unref(activeService).description)}</span></div><ul><!--[-->`);
      ssrRenderList(unref(activeService).points, (point) => {
        _push(`<li>${ssrInterpolate(point)}</li>`);
      });
      _push(`<!--]--></ul><div class="automotive-progress" aria-label="Service slides"><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<button type="button" class="${ssrRenderClass({ active: unref(activeServiceId) === service.id })}"${ssrRenderAttr("aria-label", `Show ${service.title}`)}></button>`);
      });
      _push(`<!--]--></div></div></article></div></section></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/services-JNBKPsf2');
//# sourceMappingURL=services-JNBKPsf2.mjs.map
