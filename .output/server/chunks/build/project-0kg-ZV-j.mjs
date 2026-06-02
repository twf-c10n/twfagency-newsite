globalThis.__timing__.logStart('Load chunks/build/project-0kg-ZV-j');import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
const cardCopy = "High-resolution stills engineered for global campaigns and elite product launches.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "project",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Projects | TWF Agency",
      meta: [
        {
          name: "description",
          content: "Explore TWF Agency project capabilities across media strategy, performance marketing, creative solutions, CRM, influencer marketing, and analytics."
        }
      ]
    });
    const menuOpen = ref(false);
    const headerScrolled = ref(false);
    const activeCategoryId = ref("media-strategy");
    const navItems = [
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/services" },
      { label: "Projects", href: "/project", active: true },
      { label: "Photography", href: "/photography" },
      { label: "Blog", href: "/blog" },
      { label: "About Us", href: "/about" }
    ];
    const categories = [
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
    const cardsByCategory = {
      "media-strategy": [
        {
          icon: "aperture",
          title: "Communications Planning and Implementation",
          description: cardCopy
        },
        {
          icon: "camera",
          title: "Digital Brand Building",
          description: cardCopy
        },
        {
          icon: "bolt",
          title: "Digital Marketing Consultation",
          description: cardCopy
        },
        {
          icon: "bolt",
          title: "Digital Marketing Consultation",
          description: cardCopy
        },
        {
          icon: "layers",
          title: "Digital Media Planning and Buying",
          description: cardCopy
        }
      ],
      "performance-marketing": [
        { icon: "bolt", title: "Performance Campaign Architecture", description: cardCopy },
        { icon: "layers", title: "Conversion Optimization", description: cardCopy },
        { icon: "camera", title: "Paid Search and Social Scaling", description: cardCopy },
        { icon: "aperture", title: "Creative Testing Roadmap", description: cardCopy },
        { icon: "layers", title: "Attribution and Reporting", description: cardCopy }
      ],
      "creative-solutions": [
        { icon: "aperture", title: "Campaign Creative Direction", description: cardCopy },
        { icon: "camera", title: "Content Production System", description: cardCopy },
        { icon: "layers", title: "Motion and Visual Design", description: cardCopy },
        { icon: "bolt", title: "Short-Form Creative Testing", description: cardCopy },
        { icon: "aperture", title: "Brand Asset Development", description: cardCopy }
      ],
      "crm-solutions": [
        { icon: "layers", title: "Customer Journey Mapping", description: cardCopy },
        { icon: "aperture", title: "Segmentation Strategy", description: cardCopy },
        { icon: "camera", title: "Retention Campaigns", description: cardCopy },
        { icon: "bolt", title: "Marketing Automation", description: cardCopy },
        { icon: "layers", title: "Lifecycle Performance Review", description: cardCopy }
      ],
      "influencer-kol": [
        { icon: "camera", title: "Creator Matching and Planning", description: cardCopy },
        { icon: "aperture", title: "KOL Campaign Operations", description: cardCopy },
        { icon: "bolt", title: "Affiliate Program Management", description: cardCopy },
        { icon: "layers", title: "Content Usage Planning", description: cardCopy },
        { icon: "camera", title: "Creator Performance Reporting", description: cardCopy }
      ],
      analytics: [
        { icon: "layers", title: "Tracking Plan Development", description: cardCopy },
        { icon: "aperture", title: "Dashboard Architecture", description: cardCopy },
        { icon: "bolt", title: "Campaign Insight Reports", description: cardCopy },
        { icon: "camera", title: "Data Quality Audit", description: cardCopy },
        { icon: "layers", title: "Growth Opportunity Mapping", description: cardCopy }
      ]
    };
    const activeCategory = computed(() => {
      return categories.find((category) => category.id === activeCategoryId.value) ?? categories[0];
    });
    const activeCards = computed(() => cardsByCategory[activeCategory.value.id] ?? cardsByCategory["media-strategy"]);
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page project-page" }, _attrs))}><header class="${ssrRenderClass(["site-header about-figma-header", { scrolled: unref(headerScrolled) }])}"><nav class="about-figma-nav" aria-label="Primary navigation"><a class="about-logo" href="/" aria-label="TWF home"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo.svg`)} alt="TWF"></a><div class="${ssrRenderClass(["nav-links about-figma-links", { open: unref(menuOpen) }])}"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a class="${ssrRenderClass({ active: item.active })}"${ssrRenderAttr("href", item.href)}${ssrRenderAttr("aria-current", item.active ? "page" : void 0)}>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><a class="nav-contact about-contact" href="/contact">Contact</a><button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Toggle navigation"><span></span><span></span></button></nav></header><main><section class="project-hero"><h1>Reach New Heights</h1><p> Elite technical mastery meets uncompromising aesthetic standards. We architect digital dominance for high-growth innovators. </p></section><section class="project-categories" aria-label="Project categories"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button type="button" class="${ssrRenderClass({ active: unref(activeCategoryId) === category.id })}">${ssrInterpolate(category.label)}</button>`);
      });
      _push(`<!--]--></section><section class="project-services"${ssrRenderAttr("aria-labelledby", `${unref(activeCategory).id}-title`)}><div class="project-service-copy"><h2${ssrRenderAttr("id", `${unref(activeCategory).id}-title`)}>${ssrInterpolate(unref(activeCategory).title)}</h2><p>${ssrInterpolate(unref(activeCategory).description)}</p></div><div class="project-card-grid"><!--[-->`);
      ssrRenderList(unref(activeCards), (card, index) => {
        _push(`<article class="project-card"><span class="${ssrRenderClass(["project-card-icon", card.icon])}" aria-hidden="true"></span><div><h3>${ssrInterpolate(card.title)}</h3><p>${ssrInterpolate(card.description)}</p></div></article>`);
      });
      _push(`<!--]--></div></section></main><footer class="about-figma-footer project-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/project-0kg-ZV-j');
//# sourceMappingURL=project-0kg-ZV-j.mjs.map
