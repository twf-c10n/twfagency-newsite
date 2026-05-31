globalThis.__timing__.logStart('Load chunks/build/photography-C03iEaju');import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
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
const assetPath = "/assets/photography-figma";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "photography",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Photography & Production | TWF Agency",
      meta: [
        {
          name: "description",
          content: "Commercial photography, cinema-grade video production, short-form content, drone operations, VFX, and color finishing by TWF Agency."
        }
      ]
    });
    const menuOpen = ref(false);
    const headerScrolled = ref(false);
    const navItems = [
      { label: "Home", href: "/#home" },
      { label: "Our Services", href: "/services" },
      { label: "Projects", href: "/project" },
      { label: "Photography", href: "/photography", active: true },
      { label: "Blog", href: "/blog" },
      { label: "About Us", href: "/about" }
    ];
    const tickerItems = [
      "Commercial Photography",
      "4K Cinematography",
      "Drone Ops",
      "Post-Production VFX",
      "Short-Form Virality"
    ];
    const expertiseCards = [
      {
        icon: "aperture",
        title: "Commercial Photography",
        description: "High-resolution stills engineered for global campaigns and elite product launches."
      },
      {
        icon: "camera",
        title: "Video Production",
        description: "Cinema-grade narrative commercial work from storyboarding to final cut."
      },
      {
        icon: "bolt",
        title: "Short-Form TikTok / IG",
        description: "High-velocity, algorithm-optimized vertical content designed to disrupt feeds."
      },
      {
        icon: "layers",
        title: "Pre-to-Post VFX & Color",
        description: "End-to-end finishing, industry-standard color grading and seamless visual effects."
      }
    ];
    const portfolioItems = [
      {
        className: "large",
        title: 'Apex Motors: "Nightfall"',
        meta: "Motion • Automotive",
        src: `${assetPath}/automotive-campaign.png`,
        alt: "Black sports car in a neon-lit studio"
      },
      {
        className: "tall",
        title: "Vogue Vanguard",
        meta: "Stills • Editorial",
        src: `${assetPath}/fashion-editorial.png`,
        alt: "Editorial portrait lit with pink and green accents"
      },
      {
        className: "wide",
        title: "Air Defy Launch",
        meta: "Commercial • Apparel",
        src: `${assetPath}/product-drop.png`,
        alt: "Black running shoe exploding through colorful powder"
      },
      {
        className: "wide mono",
        title: "Sonic Architecture",
        meta: "Motion • Tech",
        src: `${assetPath}/tech-commercial.png`,
        alt: "Monochrome reel-to-reel recording equipment"
      }
    ];
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page photography-page" }, _attrs))}><header class="${ssrRenderClass(["site-header about-figma-header", { scrolled: unref(headerScrolled) }])}"><nav class="about-figma-nav" aria-label="Primary navigation"><a class="about-logo" href="/#home" aria-label="TWF home"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo.svg`)} alt="TWF"></a><div class="${ssrRenderClass(["nav-links about-figma-links", { open: unref(menuOpen) }])}"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a class="${ssrRenderClass({ active: item.active })}"${ssrRenderAttr("href", item.href)}${ssrRenderAttr("aria-current", item.active ? "page" : void 0)}>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><a class="nav-contact about-contact" href="/contact">Contact</a><button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Toggle navigation"><span></span><span></span></button></nav></header><main><section class="photo-hero"><h1>Photography &amp;<br>Production</h1><p> We are a high-end digital agency merging uncompromising technical mastery with unbounded creativity. For 15 years, we have engineered digital experiences for high-growth tech firms and luxury innovators. </p></section><section class="photo-ticker" aria-label="Production capabilities"><div class="photo-ticker-track"><!--[-->`);
      ssrRenderList(2, (set) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(tickerItems, (item) => {
          _push(`<span>${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></div></section><section class="photo-section photo-expertise" aria-labelledby="photo-expertise-title"><div class="photo-section-head"><div><p class="photo-kicker">Our Expertise</p><h2 id="photo-expertise-title">Our Arsenel</h2></div><p> We dismantle the traditional agency model to build something faster, bolder, and more focused on your bottom line. No fluff, just kinetic impact. </p></div><div class="photo-card-grid"><!--[-->`);
      ssrRenderList(expertiseCards, (card) => {
        _push(`<article class="photo-expertise-card"><span class="${ssrRenderClass(["photo-card-icon", card.icon])}" aria-hidden="true"></span><h3>${ssrInterpolate(card.title)}</h3><p>${ssrInterpolate(card.description)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="photo-section photo-archive" aria-labelledby="photo-archive-title"><div class="photo-archive-head"><div><h2 id="photo-archive-title">The Archive</h2><p>A curated selection of our most dominant visual campaigns.</p></div><div class="photo-filters" aria-label="Portfolio filters"><button type="button" class="active">All</button><button type="button">Stills</button><button type="button">Motion</button></div></div><div class="photo-masonry"><!--[-->`);
      ssrRenderList(portfolioItems, (item) => {
        _push(`<article class="${ssrRenderClass(["photo-work", item.className])}"><img${ssrRenderAttr("src", item.src)}${ssrRenderAttr("alt", item.alt)}><div class="photo-work-copy"><span>${ssrInterpolate(item.meta)}</span><h3>${ssrInterpolate(item.title)}</h3></div></article>`);
      });
      _push(`<!--]--></div></section><section class="photo-cta"><h2>Bring Your Story to Life</h2><a class="photo-cta-button" href="/contact"><span>Book a Production</span><b aria-hidden="true">›</b></a></section></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8<br> 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/photography.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/photography-C03iEaju');
//# sourceMappingURL=photography-C03iEaju.mjs.map
