globalThis.__timing__.logStart('Load chunks/build/contact-JxlbSbxn');import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
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
const contactAssetPath = "/assets/contact-figma";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact TWF Agency | Start a Partnership",
      meta: [
        {
          name: "description",
          content: "Start a partnership with The Web Flight Co., Ltd. Contact TWF Agency for digital marketing, creative, media, and growth services."
        }
      ]
    });
    const menuOpen = ref(false);
    const headerScrolled = ref(false);
    const navItems = [
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/services" },
      { label: "Projects", href: "/project" },
      { label: "Photography", href: "/photography" },
      { label: "Blog", href: "/blog" },
      { label: "About Us", href: "/about" }
    ];
    const contactDetails = [
      { label: "Phone", value: "(+66) 02 024 9759", href: "tel:+6620249759" },
      { label: "Mail", value: "mailus@twfagency.com", href: "mailto:mailus@twfagency.com" }
    ];
    const socialLinks = [
      { label: "Facebook", src: `${contactAssetPath}/facebook-small.svg`, href: "#" },
      { label: "Instagram", src: `${contactAssetPath}/instagram-small.svg`, href: "#" },
      { label: "TikTok", src: `${contactAssetPath}/tiktok-small.svg`, href: "#" },
      { label: "LinkedIn", src: `${contactAssetPath}/linkedin-small.svg`, href: "#" }
    ];
    const footerSocials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page contact-figma-page" }, _attrs))}><header class="${ssrRenderClass(["site-header about-figma-header", { scrolled: unref(headerScrolled) }])}"><nav class="about-figma-nav" aria-label="Primary navigation"><a class="about-logo" href="/" aria-label="TWF home"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo.svg`)} alt="TWF"></a><div class="${ssrRenderClass(["nav-links about-figma-links", { open: unref(menuOpen) }])}"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)}>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><a class="nav-contact about-contact active" href="/contact" aria-current="page">Contact</a><button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Toggle navigation"><span></span><span></span></button></nav></header><main><section class="contact-hero"><h1>Start a partnership</h1><a class="contact-pill-button" href="#partnership-form"><span>Start a partnership</span><img${ssrRenderAttr("src", `${contactAssetPath}/arrow.svg`)} alt=""></a></section><section class="contact-content" aria-label="Contact information and partnership form"><div class="contact-column"><article class="contact-panel contact-info-panel"><div class="contact-panel-inner"><p class="contact-kicker">Looking to make an impact ?</p><h2>The Web Flight Co., Ltd.,</h2><p class="contact-address"> Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="contact-detail-grid"><!--[-->`);
      ssrRenderList(contactDetails, (detail) => {
        _push(`<div class="contact-detail"><p>${ssrInterpolate(detail.label)}</p><a${ssrRenderAttr("href", detail.href)}>${ssrInterpolate(detail.value)}</a></div>`);
      });
      _push(`<!--]--><div class="contact-detail contact-friends"><p>Let&#39;s be friends</p><div><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.label)}><img${ssrRenderAttr("src", social.src)} alt=""></a>`);
      });
      _push(`<!--]--></div></div></div></article><article class="contact-panel contact-map-panel" aria-label="TWF office map"><img${ssrRenderAttr("src", `${contactAssetPath}/hq-location-map.png`)} alt="Map view around TWF office"><div class="contact-map-overlay"><span class="contact-map-pin"><img${ssrRenderAttr("src", `${contactAssetPath}/map-pin.svg`)} alt=""></span><span>LAT 51.5045 LON -0.0195</span></div></article></div><div class="contact-column"><article class="contact-panel contact-intro-panel"><div class="contact-panel-inner"><p class="contact-kicker">More about me</p><h2>The Web Flight Co., Ltd.,</h2><p class="contact-address"> Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div></article><form id="partnership-form" class="contact-form" action="mailto:mailus@twfagency.com" method="post" enctype="text/plain"><div class="contact-form-grid"><input type="text" name="name" placeholder="Name" autocomplete="name"><input type="email" name="email" placeholder="Email" autocomplete="email"><input type="text" name="company" placeholder="Company name/brand" autocomplete="organization"><input type="text" name="budget" placeholder="Budget"></div><textarea name="objectives" placeholder="Objectives" rows="7"></textarea><label class="contact-consent"><input type="checkbox" name="consent"><span> By submitting this contact form, you consent to the collection, storage, and processing of your personal information </span></label><button class="contact-pill-button contact-submit" type="submit"><span>Submit</span><img${ssrRenderAttr("src", `${contactAssetPath}/arrow.svg`)} alt=""></button></form></div></section></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
      ssrRenderList(footerSocials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.label)}><img${ssrRenderAttr("src", social.src)} alt=""></a>`);
      });
      _push(`<!--]--></div></div><p class="about-copyright">Copyright ©2022 DIGITAL MARKETING CONSULTANCY</p></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/contact-JxlbSbxn');
//# sourceMappingURL=contact-JxlbSbxn.mjs.map
