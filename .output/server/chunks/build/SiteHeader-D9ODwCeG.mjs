import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const aboutAssetPath = "/assets/about-figma";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  props: {
    activePath: { default: "/" }
  },
  setup(__props) {
    const props = __props;
    const menuOpen = ref(false);
    const headerScrolled = ref(false);
    const navItems = [
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/services" },
      { label: "Projects", href: "/project" },
      { label: "Photography", href: "/photography" },
      { label: "Blog", href: "https://twfdigital.com/blogs/", activePath: "/blog" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" }
    ];
    const isActive = (item) => {
      const path = typeof item === "string" ? item : item.activePath ?? item.href;
      return props.activePath === path;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["site-header about-figma-header", { scrolled: unref(headerScrolled) }]
      }, _attrs))}><nav class="about-figma-nav" aria-label="Primary navigation"><a class="about-logo" href="/" aria-label="TWF home"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo.svg`)} alt="TWF"></a><div class="${ssrRenderClass(["nav-links about-figma-links", { open: unref(menuOpen) }])}"><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a class="${ssrRenderClass({ active: isActive(item) })}"${ssrRenderAttr("href", item.href)}${ssrRenderAttr("aria-current", isActive(item) ? "page" : void 0)}>${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><a class="${ssrRenderClass(["nav-contact about-contact", { active: isActive("/partnership") }])}" href="/partnership"${ssrRenderAttr("aria-current", isActive("/partnership") ? "page" : void 0)}>Start a partnership</a><button class="menu-toggle" type="button"${ssrRenderAttr("aria-expanded", unref(menuOpen))} aria-label="Toggle navigation"><span></span><span></span></button></nav></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "SiteHeader" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=SiteHeader-D9ODwCeG.mjs.map
