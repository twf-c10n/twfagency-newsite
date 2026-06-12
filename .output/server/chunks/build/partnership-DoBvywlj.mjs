globalThis.__timing__.logStart('Load chunks/build/partnership-DoBvywlj');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, withAsyncContext, reactive, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useAsyncData, g as getContactUsPage } from './api-DdjBMHQM.mjs';
import { u as useHead } from './composables-CXt4RJfp.mjs';
import { d as useRoute } from './server.mjs';
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "partnership",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Start a Partnership | TWF Agency",
      meta: [
        {
          name: "description",
          content: "Start a partnership with TWF Agency across media strategy, performance marketing, creative, CRM, commerce, analytics, and technology services."
        }
      ]
    });
    const fallbackInterestLabels = [
      "Media Strategy",
      "Owned E-Commerce Channel Enablement",
      "Social Listening Research",
      "Performance Marketing",
      "Influencer & KOL Affiliate Marketing",
      "Creative Solutions",
      "CRM Solutions",
      "AI, Data, Analytics & Tech"
    ];
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    const { data: contactPage } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "partnership-contact-page",
      getContactUsPage
    )), __temp = await __temp, __restore(), __temp);
    const form = reactive({
      fullname: "",
      email: "",
      phone: "",
      companyName: "",
      budget: "",
      objectives: "",
      hasAccepted: false
    });
    const selectedInterestIds = ref([]);
    const isSubmitting = ref(false);
    const submitState = ref("idle");
    const submitMessage = ref("");
    const fieldErrors = ref({});
    useRoute();
    const normalizeOptionId = (label, index) => {
      return `fallback-${index}-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    };
    const getServiceLabel = (service) => {
      return service.name_en || service.name_th || "Digital Marketing Service";
    };
    const interestOptions = computed(() => {
      const cmsOptions = (contactPage.value?.services ?? []).filter((service) => service.id).map((service) => ({
        id: service.id,
        label: getServiceLabel(service),
        serviceId: service.id
      }));
      const baseOptions = cmsOptions.length ? cmsOptions : fallbackInterestLabels.map((label, index) => ({
        id: normalizeOptionId(label, index),
        label
      }));
      return [
        ...baseOptions,
        {
          id: "other-service",
          label: "Other",
          isOther: true
        }
      ];
    });
    const selectedOptions = computed(() => {
      return interestOptions.value.filter((option) => selectedInterestIds.value.includes(option.id));
    });
    computed(() => {
      return selectedOptions.value.map((option) => option.serviceId).filter((serviceId) => Boolean(serviceId));
    });
    computed(() => {
      return selectedOptions.value.filter((option) => option.isOther || !option.serviceId).map((option) => option.label);
    });
    const hasFieldError = (field) => Boolean(fieldErrors.value[field]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page partnership-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/partnership" }, null, _parent));
      _push(`<main class="partnership-main"><form class="partnership-form" novalidate><header class="partnership-heading"><h1><em>Hello</em> <span>Let&#39;s Work Together</span></h1></header><section class="partnership-section" aria-labelledby="interest-title"><p id="interest-title" class="partnership-label">I&#39;m Interested in:</p><div class="partnership-interest-grid"><!--[-->`);
      ssrRenderList(unref(interestOptions), (option) => {
        _push(`<label class="partnership-check"><input${ssrIncludeBooleanAttr(Array.isArray(unref(selectedInterestIds)) ? ssrLooseContain(unref(selectedInterestIds), option.id) : unref(selectedInterestIds)) ? " checked" : ""} type="checkbox" name="interest"${ssrRenderAttr("value", option.id)}><span>${ssrInterpolate(option.label)}</span></label>`);
      });
      _push(`<!--]--></div>`);
      if (unref(fieldErrors).services) {
        _push(`<small class="partnership-error">${ssrInterpolate(unref(fieldErrors).services)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="partnership-section" aria-label="Partnership details"><p class="partnership-label">More about me:</p><div class="partnership-field-grid"><label class="${ssrRenderClass(["partnership-field span-full", { "has-error": hasFieldError("fullname") }])}"><span>Name</span><input${ssrRenderAttr("value", unref(form).fullname)} type="text" name="fullname" autocomplete="name"${ssrRenderAttr("aria-invalid", hasFieldError("fullname"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).fullname ? "partnership-fullname-error" : void 0)}>`);
      if (unref(fieldErrors).fullname) {
        _push(`<small id="partnership-fullname-error" class="partnership-error">${ssrInterpolate(unref(fieldErrors).fullname)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["partnership-field", { "has-error": hasFieldError("email") }])}"><span>E-mail</span><input${ssrRenderAttr("value", unref(form).email)} type="email" name="email" autocomplete="email"${ssrRenderAttr("aria-invalid", hasFieldError("email"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).email ? "partnership-email-error" : void 0)}>`);
      if (unref(fieldErrors).email) {
        _push(`<small id="partnership-email-error" class="partnership-error">${ssrInterpolate(unref(fieldErrors).email)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["partnership-field", { "has-error": hasFieldError("phone") }])}"><span>Phone</span><input${ssrRenderAttr("value", unref(form).phone)} type="tel" name="phone" autocomplete="tel" inputmode="tel"${ssrRenderAttr("aria-invalid", hasFieldError("phone"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).phone ? "partnership-phone-error" : void 0)}>`);
      if (unref(fieldErrors).phone) {
        _push(`<small id="partnership-phone-error" class="partnership-error">${ssrInterpolate(unref(fieldErrors).phone)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["partnership-field", { "has-error": hasFieldError("companyName") }])}"><span>Company name/brand</span><input${ssrRenderAttr("value", unref(form).companyName)} type="text" name="company_name" autocomplete="organization"${ssrRenderAttr("aria-invalid", hasFieldError("companyName"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).companyName ? "partnership-company-error" : void 0)}>`);
      if (unref(fieldErrors).companyName) {
        _push(`<small id="partnership-company-error" class="partnership-error">${ssrInterpolate(unref(fieldErrors).companyName)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["partnership-field", { "has-error": hasFieldError("budget") }])}"><span>Budget</span><input${ssrRenderAttr("value", unref(form).budget)} type="text" name="budget" inputmode="decimal"${ssrRenderAttr("aria-invalid", hasFieldError("budget"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).budget ? "partnership-budget-error" : void 0)}>`);
      if (unref(fieldErrors).budget) {
        _push(`<small id="partnership-budget-error" class="partnership-error">${ssrInterpolate(unref(fieldErrors).budget)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label><label class="${ssrRenderClass(["partnership-field span-full", { "has-error": hasFieldError("objectives") }])}"><span>Objectives</span><textarea name="objectives" rows="2"${ssrRenderAttr("aria-invalid", hasFieldError("objectives"))}${ssrRenderAttr("aria-describedby", unref(fieldErrors).objectives ? "partnership-objectives-error" : void 0)}>${ssrInterpolate(unref(form).objectives)}</textarea>`);
      if (unref(fieldErrors).objectives) {
        _push(`<small id="partnership-objectives-error" class="partnership-error">${ssrInterpolate(unref(fieldErrors).objectives)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div><label class="${ssrRenderClass(["partnership-consent", { "has-error": hasFieldError("hasAccepted") }])}"><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).hasAccepted) ? ssrLooseContain(unref(form).hasAccepted, null) : unref(form).hasAccepted) ? " checked" : ""} type="checkbox" name="consent"${ssrRenderAttr("aria-invalid", hasFieldError("hasAccepted"))}><span> By submitting this contact form, you consent to the collection, storage, and processing of your personal information. </span></label>`);
      if (unref(fieldErrors).hasAccepted) {
        _push(`<small class="partnership-error">${ssrInterpolate(unref(fieldErrors).hasAccepted)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(submitMessage)) {
        _push(`<p class="${ssrRenderClass(["partnership-status", `partnership-status-${unref(submitState)}`])}"${ssrRenderAttr("role", unref(submitState) === "error" ? "alert" : "status")}>${ssrInterpolate(unref(submitMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="partnership-actions"><a class="partnership-back" href="/contact">Back</a><button class="partnership-submit" type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""}>${ssrInterpolate(unref(isSubmitting) ? "Sending..." : "Submit")}</button></div></form></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/partnership-DoBvywlj');
//# sourceMappingURL=partnership-DoBvywlj.mjs.map
