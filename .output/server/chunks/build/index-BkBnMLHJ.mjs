globalThis.__timing__.logStart('Load chunks/build/index-BkBnMLHJ');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, ref, withAsyncContext, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useAsyncData, a as getHomepage, b as getMediaUrl, p as pickLocalizedText } from './api-Ij6cH-3E.mjs';
import { u as useHead } from './composables-CXt4RJfp.mjs';
import { h as useRuntimeConfig } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vue/shared';
import 'perfect-debounce';
import 'vue-router';

const _imports_0 = publicAssetsURL("/assets/banner.webm");
const _imports_1 = publicAssetsURL("/assets/bg_filter.webm");
const _imports_2 = publicAssetsURL("/assets/performance-bg.webp");
const _imports_3 = publicAssetsURL("/assets/performance-bg.png");
const _imports_4 = publicAssetsURL("/assets/triangle-performance-glow.webp");
const _imports_5 = publicAssetsURL("/assets/triangle-of-performance-figma.png");
const _imports_6 = publicAssetsURL("/assets/orbit.png");
const _imports_7 = publicAssetsURL("/assets/showreel-reference.png");
const _imports_8 = publicAssetsURL("/assets/stellar-data.png");
const _imports_9 = publicAssetsURL("/assets/kensento.png");
const _imports_10 = publicAssetsURL("/assets/background.webm");
const aboutAssetPath = "/assets/about-figma";
const fallbackArticleImage = "/assets/article-cover.png";
const fallbackTrustDescription = "We push boundaries and strive for excellence by fostering a highly collaborative and constructive environment. Our team is comprised of talented individuals who work hard to elevate your brand.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "TWF Agency | Imagine Beyond The Limit",
      meta: [
        {
          name: "description",
          content: "TWF is a high-end digital agency merging technical mastery with creativity and performance."
        }
      ]
    });
    const clientLogos = [
      { label: "TrueCoffee", src: "/assets/client-logos/client-logo-12.png" },
      { label: "UNICEF", src: "/assets/client-logos/client-logo-10.png" },
      { label: "SCG", src: "/assets/client-logos/client-logo-07.png" },
      { label: "SC Asset", src: "/assets/client-logos/client-logo-16.png" },
      { label: "Pruksa", src: "/assets/client-logos/client-logo-15.png" },
      { label: "Kubota", src: "/assets/client-logos/client-logo-18.png" },
      { label: "HomePro", src: "/assets/client-logos/client-logo-01.png" },
      { label: "GS Battery", src: "/assets/client-logos/client-logo-03.png" },
      { label: "Certainty", src: "/assets/client-logos/client-logo-02.png" },
      { label: "Bangkok Insurance", src: "/assets/client-logos/client-logo-17.png" },
      { label: "Double Goose", src: "/assets/client-logos/client-logo-14.png" },
      { label: "BabyLove", src: "/assets/client-logos/client-logo-19.png" },
      { label: "ACUVUE", src: "/assets/client-logos/client-logo-20.png" },
      { label: "Acer", src: "/assets/client-logos/client-logo-11.png" },
      { label: "ViMUT Hospital", src: "/assets/client-logos/client-logo-09.png" },
      { label: "Dentiste' Plus White", src: "/assets/client-logos/client-logo-08.png" },
      { label: "ROJUKISS", src: "/assets/client-logos/client-logo-05.png" },
      { label: "Beger", src: "/assets/client-logos/client-logo-06.png" },
      { label: "Syngenta", src: "/assets/client-logos/client-logo-04.png" },
      { label: "Taro", src: "/assets/client-logos/client-logo-13.png" }
    ];
    const footerSocials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    const pillars = [
      {
        number: "01",
        title: "Insightful Data & Measurable Result",
        labelLines: ["Insightful Data &", "Measurable Result"],
        labelSubtitle: "(วัดผลได้)"
      },
      {
        number: "02",
        title: "Media Efficiency",
        labelLines: ["Media Efficiency"],
        labelSubtitle: "(เข้าถึง)"
      },
      {
        number: "03",
        title: "Creativity Driving Actions",
        labelLines: ["Creativity", "Driving Actions"],
        labelSubtitle: "(มี ACTION)"
      }
    ];
    const mediaServices = [
      {
        id: "media-strategy",
        title: "Media Strategy",
        description: "Achieve exponential growth with our full-funnel digital strategy services. From awareness to conversion, our results-focused approach delivers success at every stage of the customer journey.",
        capabilities: [
          "Communications Planning and Implementation",
          "Digital Brand Building",
          "Digital Marketing Consultation",
          "Digital Media Planning and Buying",
          "CX Research and Strategy"
        ]
      },
      {
        id: "performance-strategy",
        title: "Performance Strategy",
        description: "Maximize business growth with performance marketing built around clear objectives, measurable conversions, and continuous optimization.",
        capabilities: [
          "Performance Marketing Strategy",
          "Conversion Optimization",
          "Measurement and Attribution"
        ]
      },
      {
        id: "creative-solutions",
        title: "Creative Solutions",
        description: "Turn brand direction into creative systems designed to stop attention, express value, and generate meaningful action across digital channels.",
        capabilities: [
          "Campaign Creative Direction",
          "Content and Asset Production",
          "Creative Performance Testing"
        ]
      },
      {
        id: "influencer-affiliate",
        title: "Influencer & KOL Affiliate Marketing",
        description: "Connect brands with trusted voices through creator and affiliate programs that combine authentic storytelling with accountable results.",
        capabilities: [
          "Creator Matching and Planning",
          "Affiliate Program Management",
          "Campaign Reporting"
        ]
      },
      {
        id: "crm-solutions",
        title: "CRM Solutions",
        description: "Build stronger customer relationships with lifecycle communications and audience journeys that support retention and repeat growth.",
        capabilities: [
          "Customer Journey Design",
          "Audience Segmentation",
          "Retention Campaign Optimization"
        ]
      },
      {
        id: "live-service",
        title: "LIVE Service for Business",
        description: "Create engaging live commerce and branded live experiences with strategy, operation, and content designed for real-time conversion.",
        capabilities: [
          "Live Commerce Planning",
          "Production and Operation",
          "Engagement and Sales Reporting"
        ]
      },
      {
        id: "digital-marketing-agency",
        title: "Digital Marketing Agency",
        description: "Bring strategy, media, creative, and analytics together through one integrated team focused on sustainable digital growth.",
        capabilities: [
          "Integrated Campaign Management",
          "Channel Optimization",
          "Growth Consultation"
        ]
      },
      {
        id: "ai-video-analytics",
        title: "AI Video Analytics for Retail",
        description: "Translate retail behavior into actionable insight with AI-powered video analytics that help improve operations and customer experience.",
        capabilities: [
          "Customer Traffic Insight",
          "In-store Behavior Analysis",
          "Retail Performance Dashboard"
        ]
      }
    ];
    const runtimeConfig = useRuntimeConfig();
    const apiBaseUrl = String(runtimeConfig.public.apiBaseUrl || "");
    const fallbackArticles = [
      {
        id: "fallback-digital-sales",
        title: "เทคนิคเพิ่มยอดขายผ่านดิจิทัล",
        description: "",
        image: fallbackArticleImage,
        href: "#blog",
        authorName: "LINE Commerce"
      },
      {
        id: "fallback-brand-tools",
        title: "เครื่องมือใหม่ที่แบรนด์ยุคใหม่ต้องใช้",
        description: "",
        image: fallbackArticleImage,
        href: "#blog",
        authorName: "LINE Commerce"
      },
      {
        id: "fallback-fast-campaign",
        title: "เคล็ดลับสร้างแคมเปญให้โตไว",
        description: "",
        image: fallbackArticleImage,
        href: "#blog",
        authorName: "LINE Commerce"
      }
    ];
    const articles = ref(fallbackArticles);
    const previousTrustSlideIndex = ref(0);
    const activeTrustSlideIndex = ref(1);
    const { data: homepage } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "homepage-trust-lies",
      getHomepage
    )), __temp = await __temp, __restore(), __temp);
    const fallbackTrustPhotos = [
      {
        id: "fallback-award",
        src: "/assets/award.png",
        alt: "TWF awards"
      },
      {
        id: "fallback-team",
        src: "/assets/team.png",
        alt: "TWF team"
      }
    ];
    const trustPhotos = computed(() => {
      const photos = (homepage.value?.trust_lies?.images ?? []).map((image, index) => ({
        id: `${image.name || "trust-lies"}-${index}`,
        src: getMediaUrl(image, "", apiBaseUrl),
        alt: image.name || `TWF team slide ${index + 1}`
      })).filter((photo) => photo.src);
      return photos.length ? photos : fallbackTrustPhotos;
    });
    const trustDescription = computed(() => {
      return pickLocalizedText(
        homepage.value?.trust_lies,
        "description",
        fallbackTrustDescription
      );
    });
    const getTrustPhotoAt = (index) => {
      const photos = trustPhotos.value;
      return photos[index % photos.length] || fallbackTrustPhotos[0];
    };
    const previousTrustPhoto = computed(() => {
      return trustPhotos.value.length > 1 ? getTrustPhotoAt(previousTrustSlideIndex.value) : getTrustPhotoAt(activeTrustSlideIndex.value);
    });
    const activeTrustPhoto = computed(() => getTrustPhotoAt(activeTrustSlideIndex.value));
    const hasTrustPhotoLoop = computed(() => trustPhotos.value.length > 1);
    watch(trustPhotos, (photos) => {
      previousTrustSlideIndex.value = 0;
      activeTrustSlideIndex.value = photos.length > 1 ? 1 : 0;
    });
    const motionReady = ref(false);
    const activeService = ref(mediaServices[0].id);
    const showreelActive = ref(false);
    const pageRoot = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "pageRoot",
        ref: pageRoot,
        class: ["page", { "motion-ready": unref(motionReady) }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/" }, null, _parent));
      _push(`<main><section id="home" class="hero"><div class="hero-media" aria-hidden="true"><div class="media-skeleton hero-media-skeleton"></div><video class="hero-banner" autoplay muted loop playsinline preload="metadata"><source${ssrRenderAttr("src", _imports_0)} type="video/webm"></video><video class="hero-filter" autoplay muted loop playsinline preload="metadata"><source${ssrRenderAttr("src", _imports_1)} type="video/webm"></video></div><div class="shell hero-copy"><p class="pill" data-reveal style="${ssrRenderStyle({ "--delay": ".12s" })}"><span></span> Performance Creative Agency</p><h1 data-reveal style="${ssrRenderStyle({ "--delay": ".22s" })}">Imagine Beyond<br>The Limit</h1><p class="hero-description" data-reveal style="${ssrRenderStyle({ "--delay": ".34s" })}"> We empower digital dominance through high-content design, relentless performance optimization, and elite technical mastery. Future-forward solutions for high-growth innovators. </p><a class="cta-button" data-reveal style="${ssrRenderStyle({ "--delay": ".44s" })}" href="#contact">Let&#39;s Launch Your Project <b>+</b></a></div></section><section class="client-strip" aria-label="Our clients"><div class="logo-track" aria-hidden="true"><!--[-->`);
      ssrRenderList(2, (sequence) => {
        _push(`<div class="logo-set"><!--[-->`);
        ssrRenderList(clientLogos, (logo) => {
          _push(`<img class="brand-logo"${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.label)} loading="eager" decoding="async">`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><section class="needs"><div class="narrow" data-reveal><h2 class="gradient-title">All your needs</h2><p> We are a high-end digital agency merging uncompromising technical mastery with unbounded creativity. For 15 years, we have engineered digital experiences for high-growth talent firms and luxury innovators. </p></div></section><section id="services" class="expertise"><div class="shell expertise-heading" data-reveal><div><p class="caption">Our Expertise</p><h2>Performance<br>Creative</h2></div><p> We dismantle the traditional agency model to build something faster, bolder, and more focused on your bottom line. No fluff, just kinetic impact. </p></div><div id="performance-creative-visual" class="performance-visual" aria-label="Triangle of Performance"><div class="performance-scene" data-reveal><picture class="performance-bg" aria-hidden="true"><source${ssrRenderAttr("srcset", _imports_2)} type="image/webp"><img${ssrRenderAttr("src", _imports_3)} alt="" loading="lazy" decoding="async"></picture><img class="performance-shards"${ssrRenderAttr("src", _imports_4)} alt="" aria-hidden="true" loading="lazy" decoding="async"><div class="performance-labels" aria-hidden="true"><span class="performance-label performance-label-1"><strong><!--[-->`);
      ssrRenderList(pillars[0].labelLines, (line) => {
        _push(`<span class="performance-label-line">${ssrInterpolate(line)}</span>`);
      });
      _push(`<!--]--></strong><span class="performance-label-subtitle">${ssrInterpolate(pillars[0].labelSubtitle)}</span></span><span class="performance-label performance-label-2"><strong><!--[-->`);
      ssrRenderList(pillars[1].labelLines, (line) => {
        _push(`<span class="performance-label-line">${ssrInterpolate(line)}</span>`);
      });
      _push(`<!--]--></strong><span class="performance-label-subtitle">${ssrInterpolate(pillars[1].labelSubtitle)}</span></span><span class="performance-label performance-label-3"><strong><!--[-->`);
      ssrRenderList(pillars[2].labelLines, (line) => {
        _push(`<span class="performance-label-line">${ssrInterpolate(line)}</span>`);
      });
      _push(`<!--]--></strong><span class="performance-label-subtitle">${ssrInterpolate(pillars[2].labelSubtitle)}</span></span></div><img class="performance-poster"${ssrRenderAttr("src", _imports_5)} alt="Triangle of Performance: TWF Agency Performance Creative" loading="lazy" decoding="async"><div class="poster-border" aria-hidden="true"></div></div></div><div class="pillar-grid"><!--[-->`);
      ssrRenderList(pillars, (pillar, index) => {
        _push(`<article class="pillar" data-reveal style="${ssrRenderStyle({ "--delay": `${index * 90}ms` })}"><div><span>${ssrInterpolate(pillar.number)}</span><h3>${ssrInterpolate(pillar.title)}</h3><a href="#contact">Click Here <b>+</b></a></div></article>`);
      });
      _push(`<!--]--></div></section><section class="strategy"><div class="shell strategy-grid"><aside class="service-list" data-reveal><p class="service-caption">Our Services</p><ul aria-label="Strategy services"><!--[-->`);
      ssrRenderList(mediaServices, (service, index) => {
        _push(`<li><a class="${ssrRenderClass({ active: unref(activeService) === service.id })}"${ssrRenderAttr("href", `#strategy-${service.id}`)}${ssrRenderAttr("aria-current", unref(activeService) === service.id ? "true" : void 0)}><span>${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span> ${ssrInterpolate(service.title)}</a></li>`);
      });
      _push(`<!--]--></ul></aside><div class="strategy-content"><div class="strategy-copy"><!--[-->`);
      ssrRenderList(mediaServices, (service, index) => {
        _push(`<article${ssrRenderAttr("id", `strategy-${service.id}`)} class="${ssrRenderClass(["strategy-panel", { active: unref(activeService) === service.id }])}"><div class="strategy-status"><p class="strategy-number">${ssrInterpolate(String(index + 1).padStart(2, "0"))} / ${ssrInterpolate(String(mediaServices.length).padStart(2, "0"))}</p><span class="strategy-meter" aria-hidden="true"><span style="${ssrRenderStyle({ width: `${(index + 1) / mediaServices.length * 100}%` })}"></span></span></div><h2>${ssrInterpolate(service.title)}</h2><p>${ssrInterpolate(service.description)}</p><ul><!--[-->`);
        ssrRenderList(service.capabilities, (capability) => {
          _push(`<li>${ssrInterpolate(capability)}</li>`);
        });
        _push(`<!--]--></ul></article>`);
      });
      _push(`<!--]--></div></div><div class="orbit-art" data-reveal style="${ssrRenderStyle({ "--delay": ".18s" })}" aria-hidden="true"><img${ssrRenderAttr("src", _imports_6)} alt=""></div></div></section><section id="photography" class="${ssrRenderClass(["showreel", { "is-active": unref(showreelActive) }])}"><div class="showreel-stage"><figure class="showreel-frame" data-reveal><div class="media-skeleton showreel-skeleton" aria-hidden="true"></div><img class="showreel-poster"${ssrRenderAttr("src", _imports_7)} alt="" aria-hidden="true"><video muted loop playsinline preload="none"${ssrRenderAttr("poster", _imports_7)} aria-label="Capturing Vision. Executing Perfection. Watch 2026 showreel"><source data-src="/assets/showreel.mp4" type="video/mp4"></video></figure></div></section><section id="projects" class="products"><div class="shell products-inner"><p class="accent-copy" data-reveal>Venture Beyond Your Limits</p><h2 data-reveal style="${ssrRenderStyle({ "--delay": ".08s" })}">Our Innovative Product<br>and Services</h2><div class="product-grid"><article data-reveal style="${ssrRenderStyle({ "--delay": ".14s" })}"><img${ssrRenderAttr("src", _imports_8)} alt="Stellar Data"><p>Elevate your performance marketing campaigns</p></article><article data-reveal style="${ssrRenderStyle({ "--delay": ".22s" })}"><img${ssrRenderAttr("src", _imports_9)} alt="Kensento"><p>Taking you beyond cookies consent management</p></article></div></div></section><section id="about" class="team"><div class="team-media" aria-hidden="true"><video autoplay muted loop playsinline preload="metadata"><source${ssrRenderAttr("src", _imports_10)} type="video/webm"></video></div><div class="shell team-grid"><div class="${ssrRenderClass(["team-photos", { "is-looping": unref(hasTrustPhotoLoop) }])}" data-reveal><figure class="team-photo-slide is-previous" aria-hidden="true"><img${ssrRenderAttr("src", unref(previousTrustPhoto).src)}${ssrRenderAttr("alt", unref(previousTrustPhoto).alt)}></figure><figure class="team-photo-slide is-active"><img${ssrRenderAttr("src", unref(activeTrustPhoto).src)}${ssrRenderAttr("alt", unref(activeTrustPhoto).alt)}></figure></div><div class="team-copy" data-reveal style="${ssrRenderStyle({ "--delay": ".14s" })}"><h2>A team you<br>can trust</h2><p>${ssrInterpolate(unref(trustDescription))}</p></div></div></section><section id="blog" class="articles"><div class="shell"><p class="caption" data-reveal>Our Expertise</p><h2 data-reveal style="${ssrRenderStyle({ "--delay": ".08s" })}">Explore our recent articles</h2><p class="article-tags" data-reveal style="${ssrRenderStyle({ "--delay": ".12s" })}">Performance Marketing · Social Media · Case Study · Media Plan &amp; Buy · Digital Campaign</p><div class="article-grid"><!--[-->`);
      ssrRenderList(unref(articles), (article, index) => {
        _push(`<article data-reveal style="${ssrRenderStyle({ "--delay": `${160 + index * 75}ms` })}"><img${ssrRenderAttr("src", article.image)}${ssrRenderAttr("alt", article.title)} loading="lazy"><div><p>${ssrInterpolate(article.authorName)}</p><h3>${ssrInterpolate(article.title)}</h3><a${ssrRenderAttr("href", article.href)}${ssrRenderAttr("target", article.href.startsWith("http") ? "_blank" : void 0)}${ssrRenderAttr("rel", article.href.startsWith("http") ? "noreferrer" : void 0)}>Click Here <b>+</b></a></div></article>`);
      });
      _push(`<!--]--></div></div></section></main><footer id="contact" class="footer"><div class="footer-action" data-reveal><h2 class="gradient-title">Make your goals a reality</h2><a class="cta-button" href="mailto:hello@twf.agency">Initiate Project Launch <b>+</b></a></div><div class="shell footer-bottom"><img class="footer-logo"${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p>The Web Flight Co., Ltd. Crystal Park Place Building, R.1<br>Praditmanutham Road, Wangthonglang, Bangkok 10310</p><div class="socials"><!--[-->`);
      ssrRenderList(footerSocials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.label)}><img${ssrRenderAttr("src", social.src)} alt=""></a>`);
      });
      _push(`<!--]--></div></div><p class="copyright">Copyright © 2026 TWF DIGITAL MARKETING CONSULTANCY</p></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-BkBnMLHJ');
//# sourceMappingURL=index-BkBnMLHJ.mjs.map
