globalThis.__timing__.logStart('Load chunks/build/index-bhN8Bq9r');import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './composables-CXt4RJfp.mjs';
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
import './server.mjs';
import 'vue-router';

const _imports_0 = publicAssetsURL("/assets/banner.webm");
const _imports_1 = publicAssetsURL("/assets/bg_filter.webm");
const _imports_2 = publicAssetsURL("/assets/orbit.png");
const _imports_3 = publicAssetsURL("/assets/showreel-reference.png");
const _imports_4 = publicAssetsURL("/assets/stellar-data.png");
const _imports_5 = publicAssetsURL("/assets/kensento.png");
const _imports_6 = publicAssetsURL("/assets/award.png");
const _imports_7 = publicAssetsURL("/assets/team.png");
const _imports_8 = publicAssetsURL("/assets/article-cover.png");
const imgTriangleOfPerformance = "/assets/triangle-performance-main.webp";
const imgTriangleOfPerformance1 = "/assets/triangle-performance-grid.webp";
const imgTriangleOfPerformance2 = "/assets/triangle-performance-glow.webp";
const imgTriangleLogo = "/assets/about-figma/twf-logo-footer.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
      { label: "Acer", color: "#83b81a", variant: "acer" },
      { label: "Unicef", color: "#1cabe2", variant: "unicef" },
      { label: "KING POWER", color: "#004b9b", variant: "king-power" },
      { label: "SCG", color: "#ed1b2f", variant: "scg" },
      { label: "Rojukiss", color: "#e6007e", variant: "rojukiss" },
      { label: "Target", color: "#cc0000", variant: "target" },
      { label: "Syngenta", color: "#00a859", variant: "syngenta" }
    ];
    const pillars = [
      {
        number: "01",
        title: "Insightful Data & Measurable Result"
      },
      {
        number: "02",
        title: "Media Efficiency"
      },
      {
        number: "03",
        title: "Creativity Driving Actions"
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
    const articles = [
      "เทคนิคเพิ่มยอดขายผ่านดิจิทัล",
      "เครื่องมือใหม่ที่แบรนด์ยุคใหม่ต้องใช้",
      "เคล็ดลับสร้างแคมเปญให้โตไว"
    ];
    const navItems = [
      { id: "home", label: "Home", href: "/" },
      { id: "services", label: "Our Services", href: "/services" },
      { id: "projects", label: "Projects", href: "/project" },
      { id: "photography", label: "Photography", href: "/photography" },
      { id: "blog", label: "Blog", href: "/blog" },
      { id: "about", label: "About Us", href: "/about" }
    ];
    const menuOpen = ref(false);
    const motionReady = ref(false);
    const headerScrolled = ref(false);
    const activeSection = ref("home");
    const activeService = ref(mediaServices[0].id);
    const showreelActive = ref(false);
    const pageRoot = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "pageRoot",
        ref: pageRoot,
        class: ["page", { "motion-ready": unref(motionReady) }]
      }, _attrs))}><header class="${ssrRenderClass(["site-header", { scrolled: unref(headerScrolled) }])}"><span class="scroll-progress" aria-hidden="true"></span><nav class="nav shell" aria-label="Primary navigation"><a class="brand" href="/" aria-label="TWF home"><span class="brand-mark">TWF</span></a><div class="${ssrRenderClass(["nav-links", { open: unref(menuOpen) }])}"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a class="${ssrRenderClass({ active: unref(activeSection) === item.id })}"${ssrRenderAttr("href", item.href)}${ssrRenderAttr("aria-current", unref(activeSection) === item.id ? "page" : void 0)}>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><a class="${ssrRenderClass(["nav-contact", { active: unref(activeSection) === "contact" }])}" href="/contact"${ssrRenderAttr("aria-current", unref(activeSection) === "contact" ? "page" : void 0)}>Contact</a><button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Toggle navigation"><span></span><span></span></button></nav></header><main><section id="home" class="hero"><div class="hero-media" aria-hidden="true"><div class="media-skeleton hero-media-skeleton"></div><video class="hero-banner" autoplay muted loop playsinline preload="metadata"><source${ssrRenderAttr("src", _imports_0)} type="video/webm"></video><video class="hero-filter" autoplay muted loop playsinline preload="metadata"><source${ssrRenderAttr("src", _imports_1)} type="video/webm"></video></div><div class="shell hero-copy"><p class="pill" data-reveal style="${ssrRenderStyle({ "--delay": ".12s" })}"><span></span> Performance Creative Agency</p><h1 data-reveal style="${ssrRenderStyle({ "--delay": ".22s" })}">Imagine Beyond<br>The Limit</h1><p class="hero-description" data-reveal style="${ssrRenderStyle({ "--delay": ".34s" })}"> We empower digital dominance through high-content design, relentless performance optimization, and elite technical mastery. Future-forward solutions for high-growth innovators. </p><a class="cta-button" data-reveal style="${ssrRenderStyle({ "--delay": ".44s" })}" href="#contact">Let&#39;s Launch Your Project <b>+</b></a></div></section><section class="client-strip" aria-label="Our clients"><div class="logo-track" aria-hidden="true"><!--[-->`);
      ssrRenderList(2, (sequence) => {
        _push(`<div class="logo-set"><!--[-->`);
        ssrRenderList(clientLogos, (logo) => {
          _push(`<span class="${ssrRenderClass(["brand-logo", `brand-logo-${logo.variant}`])}" style="${ssrRenderStyle({ "--brand-color": logo.color })}">${ssrInterpolate(logo.label)}</span>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><section class="needs"><div class="narrow" data-reveal><h2 class="gradient-title">All your needs</h2><p> We are a high-end digital agency merging uncompromising technical mastery with unbounded creativity. For 15 years, we have engineered digital experiences for high-growth talent firms and luxury innovators. </p></div></section><section id="services" class="expertise"><div class="shell expertise-heading" data-reveal><div><p class="caption">Our Expertise</p><h2>Performance<br>Creative</h2></div><p> We dismantle the traditional agency model to build something faster, bolder, and more focused on your bottom line. No fluff, just kinetic impact. </p></div><div class="performance-visual"><div class="performance-bg" aria-hidden="true"><img${ssrRenderAttr("src", imgTriangleOfPerformance)} alt="" class="performance-bg-layer main"><img${ssrRenderAttr("src", imgTriangleOfPerformance1)} alt="" class="performance-bg-layer grid"><img${ssrRenderAttr("src", imgTriangleOfPerformance2)} alt="" class="performance-bg-layer glow"></div><div class="beam" aria-hidden="true"></div><div class="performance-stack" data-reveal><span class="triangle-point">Insightful Data &amp;<br>Measurable Result<br><small>[วัดผลได้]</small></span><div class="triangle" aria-label="Triangle of Performance"><svg class="triangle-energy" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="triangle-light" x1="0" y1="1" x2="1" y2="1"><stop offset="0" stop-color="#67e999"></stop><stop offset=".22" stop-color="#16c9ec"></stop><stop offset=".45" stop-color="#6550ff"></stop><stop offset=".7" stop-color="#ee3786"></stop><stop offset="1" stop-color="#ffe84c"></stop></linearGradient></defs><path class="triangle-energy-track" d="M50 1 L99 99 L1 99 Z"></path><path class="triangle-energy-flow" d="M50 1 L99 99 L1 99 Z"></path></svg><div class="triangle-inner"><img${ssrRenderAttr("src", imgTriangleLogo)} alt="TWF Agency" class="triangle-logo"><strong>Performance<br>Creative</strong><small>Triangle of Performance (Top)</small></div></div><div class="triangle-bottom"><span class="triangle-left">Media Efficiency<br><small>[เข้าถึง]</small></span><span class="triangle-right">Creativity<br>Driving Actions<br><small>[มี Action]</small></span></div></div></div><div class="pillar-grid"><!--[-->`);
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
      _push(`<!--]--></div></div><div class="orbit-art" data-reveal style="${ssrRenderStyle({ "--delay": ".18s" })}" aria-hidden="true"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></section><section id="photography" class="${ssrRenderClass(["showreel", { "is-active": unref(showreelActive) }])}"><div class="showreel-stage"><figure class="showreel-frame" data-reveal><div class="media-skeleton showreel-skeleton" aria-hidden="true"></div><img class="showreel-poster"${ssrRenderAttr("src", _imports_3)} alt="" aria-hidden="true"><video muted loop playsinline preload="none"${ssrRenderAttr("poster", _imports_3)} aria-label="Capturing Vision. Executing Perfection. Watch 2026 showreel"><source data-src="/assets/showreel.mp4" type="video/mp4"></video></figure></div></section><section id="projects" class="products"><div class="shell products-inner"><p class="accent-copy" data-reveal>Venture Beyond Your Limits</p><h2 data-reveal style="${ssrRenderStyle({ "--delay": ".08s" })}">Our Innovative Product<br>and Services</h2><div class="product-grid"><article data-reveal style="${ssrRenderStyle({ "--delay": ".14s" })}"><img${ssrRenderAttr("src", _imports_4)} alt="Stellar Data"><p>Elevate your performance marketing campaigns</p></article><article data-reveal style="${ssrRenderStyle({ "--delay": ".22s" })}"><img${ssrRenderAttr("src", _imports_5)} alt="Kensento"><p>Taking you beyond cookies consent management</p></article></div></div></section><section id="about" class="team"><div class="shell team-grid"><div class="team-photos" data-reveal><img${ssrRenderAttr("src", _imports_6)} alt="TWF awards"><img${ssrRenderAttr("src", _imports_7)} alt="TWF team"></div><div class="team-copy" data-reveal style="${ssrRenderStyle({ "--delay": ".14s" })}"><h2>A team you<br>can trust</h2><p> We push boundaries and strive for excellence by fostering a highly collaborative and constructive environment. Our team is comprised of talented individuals who work hard to elevate your brand. </p></div></div></section><section id="blog" class="articles"><div class="shell"><p class="caption" data-reveal>Our Expertise</p><h2 data-reveal style="${ssrRenderStyle({ "--delay": ".08s" })}">Explore our recent articles</h2><p class="article-tags" data-reveal style="${ssrRenderStyle({ "--delay": ".12s" })}">Performance Marketing · Social Media · Case Study · Media Plan &amp; Buy · Digital Campaign</p><div class="article-grid"><!--[-->`);
      ssrRenderList(articles, (article, index) => {
        _push(`<article data-reveal style="${ssrRenderStyle({ "--delay": `${160 + index * 75}ms` })}"><img${ssrRenderAttr("src", _imports_8)} alt=""><div><p>LINE Commerce</p><h3>${ssrInterpolate(article)}</h3><a href="#blog">Click Here <b>+</b></a></div></article>`);
      });
      _push(`<!--]--></div></div></section></main><footer id="contact" class="footer"><div class="footer-action" data-reveal><h2 class="gradient-title">Make your goals a reality</h2><a class="cta-button" href="mailto:hello@twf.agency">Initiate Project Launch <b>+</b></a></div><div class="shell footer-bottom"><span class="brand-mark">TWF</span><p>The Web Flight Co., Ltd. Crystal Park Place Building, R.1<br>Praditmanutham Road, Wangthonglang, Bangkok 10310</p><div class="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Twitter">x</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="LinkedIn">in</a></div></div><p class="copyright">Copyright © 2026 TWF DIGITAL MARKETING CONSULTANCY</p></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-bhN8Bq9r');
//# sourceMappingURL=index-bhN8Bq9r.mjs.map
