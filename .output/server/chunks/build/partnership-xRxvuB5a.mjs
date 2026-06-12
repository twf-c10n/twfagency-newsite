globalThis.__timing__.logStart('Load chunks/build/partnership-xRxvuB5a');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "partnership",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Start a Partnership | TWF Agency",
      meta: [
        {
          name: "description",
          content: "Start a partnership with TWF Agency across media strategy, performance marketing, creative, CRM, commerce, analytics, and technology services."
        }
      ]
    });
    const interestOptions = [
      "Media Strategy",
      "Owned E-Commerce Channel Enablement",
      "Social Listening Research",
      "Performance Marketing",
      "Influencer & KOL Affiliate Marketing",
      "Creative Solutions",
      "CRM Solutions",
      "AI, Data, Analytics & Tech",
      "Other"
    ];
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page partnership-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/partnership" }, null, _parent));
      _push(`<main class="partnership-main"><form class="partnership-form" action="mailto:mailus@twfagency.com" method="post" enctype="text/plain"><header class="partnership-heading"><h1><em>Hello</em> <span>Let&#39;s Work Together</span></h1></header><section class="partnership-section" aria-labelledby="interest-title"><p id="interest-title" class="partnership-label">I&#39;m Interested in:</p><div class="partnership-interest-grid"><!--[-->`);
      ssrRenderList(interestOptions, (option) => {
        _push(`<label class="partnership-check"><input type="checkbox" name="interest"${ssrRenderAttr("value", option)}><span>${ssrInterpolate(option)}</span></label>`);
      });
      _push(`<!--]--></div></section><section class="partnership-section" aria-label="Partnership details"><p class="partnership-label">More about me:</p><div class="partnership-field-grid"><label class="partnership-field span-full"><span>Name</span><input type="text" name="name" autocomplete="name"></label><label class="partnership-field"><span>E-mail</span><input type="email" name="email" autocomplete="email"></label><label class="partnership-field"><span>Phone</span><input type="tel" name="phone" autocomplete="tel"></label><label class="partnership-field"><span>Company name/brand</span><input type="text" name="company" autocomplete="organization"></label><label class="partnership-field"><span>Budget</span><input type="text" name="budget"></label><label class="partnership-field span-full"><span>Objectives</span><textarea name="objectives" rows="2"></textarea></label></div><label class="partnership-consent"><input type="checkbox" name="consent"><span> By submitting this contact form, you consent to the collection, storage, and processing of your personal information. </span></label></section><div class="partnership-actions"><a class="partnership-back" href="/contact">Back</a><button class="partnership-submit" type="submit">Submit</button></div></form></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/partnership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/partnership-xRxvuB5a');
//# sourceMappingURL=partnership-xRxvuB5a.mjs.map
