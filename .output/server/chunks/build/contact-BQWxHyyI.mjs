globalThis.__timing__.logStart('Load chunks/build/contact-BQWxHyyI');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useHead } from './composables-CXt4RJfp.mjs';
import { d as useRoute } from './server.mjs';
import '../routes/renderer.mjs';
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
    useRoute();
    const contactForm = reactive({
      fullname: "",
      email: "",
      phone: "",
      companyName: "",
      budget: "",
      objectives: "",
      hasAccepted: false
    });
    const isSubmitting = ref(false);
    const submitState = ref("idle");
    const submitMessage = ref("");
    const fieldErrors = ref({});
    const hasFieldError = (field) => Boolean(fieldErrors.value[field]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page contact-figma-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/contact" }, null, _parent));
      _push(`<main><section class="contact-hero"><h1>Start a partnership</h1><a class="contact-pill-button" href="#partnership-form"><span>Start a partnership</span><img${ssrRenderAttr("src", `${contactAssetPath}/arrow.svg`)} alt=""></a></section><section class="contact-content" aria-label="Contact information and partnership form"><div class="contact-column"><article class="contact-panel contact-info-panel"><div class="contact-panel-inner"><p class="contact-kicker">Looking to make an impact ?</p><h2>The Web Flight Co., Ltd.,</h2><p class="contact-address"> Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="contact-detail-grid"><!--[-->`);
      ssrRenderList(contactDetails, (detail) => {
        _push(`<div class="contact-detail"><p>${ssrInterpolate(detail.label)}</p><a${ssrRenderAttr("href", detail.href)}>${ssrInterpolate(detail.value)}</a></div>`);
      });
      _push(`<!--]--><div class="contact-detail contact-friends"><p>Let&#39;s be friends</p><div><!--[-->`);
      ssrRenderList(socialLinks, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("aria-label", social.label)}><img${ssrRenderAttr("src", social.src)} alt=""></a>`);
      });
      _push(`<!--]--></div></div></div></article><article class="contact-panel contact-map-panel" aria-label="TWF office map"><img${ssrRenderAttr("src", `${contactAssetPath}/hq-location-map.png`)} alt="Map view around TWF office"><div class="contact-map-overlay"><span class="contact-map-pin"><img${ssrRenderAttr("src", `${contactAssetPath}/map-pin.svg`)} alt=""></span><span>LAT 51.5045 LON -0.0195</span></div></article></div><div class="contact-column"><article class="contact-panel contact-intro-panel"><div class="contact-panel-inner"><p class="contact-kicker">More about me</p><h2>The Web Flight Co., Ltd.,</h2><p class="contact-address"> Capital Work Place Building, Fl. 8, 1 Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div></article><form id="partnership-form" class="contact-form" novalidate><div class="contact-form-grid"><label class="${ssrRenderClass(["contact-field", { "has-error": hasFieldError("fullname") }])}"><input${ssrRenderAttr("value", unref(contactForm).fullname)} type="text" name="fullname" placeholder="Name" autocomplete="name"${ssrRenderAttr("aria-invalid", hasFieldError("fullname"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).fullname ? "contact-fullname-error" : void 0)}>`);
      if (unref(fieldErrors).fullname) {
        _push(`<small id="contact-fullname-error">${ssrInterpolate(unref(fieldErrors).fullname)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["contact-field", { "has-error": hasFieldError("email") }])}"><input${ssrRenderAttr("value", unref(contactForm).email)} type="email" name="email" placeholder="Email" autocomplete="email"${ssrRenderAttr("aria-invalid", hasFieldError("email"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).email ? "contact-email-error" : void 0)}>`);
      if (unref(fieldErrors).email) {
        _push(`<small id="contact-email-error">${ssrInterpolate(unref(fieldErrors).email)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["contact-field", { "has-error": hasFieldError("phone") }])}"><input${ssrRenderAttr("value", unref(contactForm).phone)} type="tel" name="phone" placeholder="Phone" autocomplete="tel" inputmode="tel"${ssrRenderAttr("aria-invalid", hasFieldError("phone"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).phone ? "contact-phone-error" : void 0)}>`);
      if (unref(fieldErrors).phone) {
        _push(`<small id="contact-phone-error">${ssrInterpolate(unref(fieldErrors).phone)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["contact-field", { "has-error": hasFieldError("companyName") }])}"><input${ssrRenderAttr("value", unref(contactForm).companyName)} type="text" name="company_name" placeholder="Company name/brand" autocomplete="organization"${ssrRenderAttr("aria-invalid", hasFieldError("companyName"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).companyName ? "contact-company-error" : void 0)}>`);
      if (unref(fieldErrors).companyName) {
        _push(`<small id="contact-company-error">${ssrInterpolate(unref(fieldErrors).companyName)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["contact-field contact-field-wide", { "has-error": hasFieldError("budget") }])}"><input${ssrRenderAttr("value", unref(contactForm).budget)} type="text" name="budget" placeholder="Budget" inputmode="decimal"${ssrRenderAttr("aria-invalid", hasFieldError("budget"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).budget ? "contact-budget-error" : void 0)}>`);
      if (unref(fieldErrors).budget) {
        _push(`<small id="contact-budget-error">${ssrInterpolate(unref(fieldErrors).budget)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div><label class="${ssrRenderClass(["contact-field contact-message-field", { "has-error": hasFieldError("objectives") }])}"><textarea name="objectives" placeholder="Objectives" rows="7"${ssrRenderAttr("aria-invalid", hasFieldError("objectives"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).objectives ? "contact-objectives-error" : void 0)}>${ssrInterpolate(unref(contactForm).objectives)}</textarea>`);
      if (unref(fieldErrors).objectives) {
        _push(`<small id="contact-objectives-error">${ssrInterpolate(unref(fieldErrors).objectives)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["contact-consent", { "has-error": hasFieldError("hasAccepted") }])}"><input${ssrIncludeBooleanAttr(Array.isArray(unref(contactForm).hasAccepted) ? ssrLooseContain(unref(contactForm).hasAccepted, null) : unref(contactForm).hasAccepted) ? " checked" : ""} type="checkbox" name="consent"${ssrRenderAttr("aria-invalid", hasFieldError("hasAccepted"))}><span> By submitting this contact form, you consent to the collection, storage, and processing of your personal information </span></label>`);
      if (unref(fieldErrors).hasAccepted) {
        _push(`<small class="contact-error">${ssrInterpolate(unref(fieldErrors).hasAccepted)}</small>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(submitMessage)) {
        _push(`<p class="${ssrRenderClass(["contact-status", `contact-status-${unref(submitState)}`])}"${ssrRenderAttr("role", unref(submitState) === "error" ? "alert" : "status")}>${ssrInterpolate(unref(submitMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="contact-pill-button contact-submit" type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""}><span>${ssrInterpolate(unref(isSubmitting) ? "Sending..." : "Submit")}</span><img${ssrRenderAttr("src", `${contactAssetPath}/arrow.svg`)} alt=""></button></form></div></section></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/contact-BQWxHyyI');
//# sourceMappingURL=contact-BQWxHyyI.mjs.map
