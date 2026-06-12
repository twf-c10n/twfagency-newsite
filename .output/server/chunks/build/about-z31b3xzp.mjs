globalThis.__timing__.logStart('Load chunks/build/about-z31b3xzp');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/assets/about-figma/team-event.png");
const _imports_1 = publicAssetsURL("/assets/about-figma/founder.png");
const assetPath = "/assets/about-figma";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About TWF Agency | Our Story Begins with the Digital Age",
      meta: [
        {
          name: "description",
          content: "TWF Agency is a performance creative services team driving measurable growth for brands in the digital age."
        }
      ]
    });
    const storyImages = [
      { src: `${assetPath}/story-left.png`, alt: "TWF agency event installation" },
      { src: `${assetPath}/story-center.png`, alt: "TWF team portrait" },
      { src: `${assetPath}/story-right.png`, alt: "TWF team celebration" }
    ];
    const storySets = [storyImages, storyImages];
    const partners = [
      {
        name: "TikTok",
        className: "partner-tiktok",
        images: [
          { src: `${assetPath}/tiktok-word.svg`, alt: "TikTok Agency Partner" },
          { src: `${assetPath}/tiktok-note.svg`, alt: "" }
        ]
      },
      {
        name: "Google",
        className: "partner-google",
        images: [
          { src: `${assetPath}/google-g.png`, alt: "Google" },
          { src: `${assetPath}/google-partner.svg`, alt: "Google Partner" }
        ]
      },
      {
        name: "Meta",
        className: "partner-meta",
        images: [
          { src: `${assetPath}/meta-mark.png`, alt: "Meta" },
          { src: `${assetPath}/meta-partner.svg`, alt: "Agency Partner" }
        ]
      },
      {
        name: "Adman Awards",
        className: "partner-adman",
        images: [{ src: `${assetPath}/admanawards.svg`, alt: "Adman Awards" }]
      },
      {
        name: "LINE",
        className: "partner-line",
        images: [{ src: `${assetPath}/line.svg`, alt: "LINE Agency Partner" }]
      }
    ];
    const socials = [
      { label: "Facebook", src: `${assetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${assetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${assetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${assetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page about-figma-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/about" }, null, _parent));
      _push(`<main><section class="about-title-section"><h1>Our Story Begins with the Digital Age</h1></section><section class="about-story-strip" aria-label="TWF agency moments"><div class="about-story-track"><!--[-->`);
      ssrRenderList(storySets, (set, setIndex) => {
        _push(`<div class="about-story-set"><!--[-->`);
        ssrRenderList(set, (image) => {
          _push(`<figure><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", setIndex === 0 ? image.alt : "")}></figure>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><section class="about-intro-copy"><p> We provide performance creative services designed to drive measurable growth. Our expertise and tailored solutions empower brands to thrive in today&#39;s ever-changing marketing landscape. </p><blockquote> &quot;Sky isn&#39;t the limit,<br> it&#39;s where we begin&quot; </blockquote></section><section class="about-team-section"><div class="about-team-grid"><div class="about-team-copy"><h2>Our team</h2><p> Our success is driven by a team of exceptionally talented individuals. Committed to staying ahead of trends, our close-knit team thrives on collaboration, transforming your requirements into impactful campaigns. When you partner with us, you&#39;re not just working with experts; you&#39;re engaging a team dedicated to crafting solutions that inspire action and drive growth. Together, we bring your business goals to life with our Performance Creative Services. </p></div><img${ssrRenderAttr("src", _imports_0)} alt="TWF team at an event"></div></section><section class="about-partners-section" aria-labelledby="partners-title"><h2 id="partners-title">Our Partners</h2><div class="about-partner-row"><!--[-->`);
      ssrRenderList(partners, (partner) => {
        _push(`<div class="${ssrRenderClass(["about-partner-logo", partner.className])}"><!--[-->`);
        ssrRenderList(partner.images, (image) => {
          _push(`<img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)}>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div></section><section class="about-founder-section"><div class="rainbow-rule"></div><div class="about-founder-card"><blockquote> &quot;We strive to drive your audience<br> to take action and fuel your<br> business growth with measurable results.&quot; </blockquote><img${ssrRenderAttr("src", _imports_1)} alt="Narongyod Mahittivanicha"><p><strong>Narongyod Mahittivanicha</strong><span>Cofounder</span></p></div><div class="rainbow-rule"></div></section></main><footer id="contact" class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${assetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8<br> 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/about-z31b3xzp');
//# sourceMappingURL=about-z31b3xzp.mjs.map
