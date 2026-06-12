globalThis.__timing__.logStart('Load chunks/build/blog-BvNGBRDz');import { _ as __nuxt_component_0 } from './SiteHeader-D9ODwCeG.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
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
const blogAssetPath = "/assets/blog-figma";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blog | TWF Agency",
      meta: [
        {
          name: "description",
          content: "Read digital marketing, LINE Commerce, media, creative, and performance marketing articles from TWF Agency."
        }
      ]
    });
    const articles = Array.from({ length: 6 }, (_, index) => ({
      id: `line-commerce-${index + 1}`,
      category: "LINE Commerce",
      title: "เครื่องมือทำเงินแห่งยุคดิจิทัล!",
      href: "#"
    }));
    const socials = [
      { label: "Facebook", src: `${aboutAssetPath}/facebook.svg`, href: "#" },
      { label: "X", src: `${aboutAssetPath}/x.svg`, href: "#" },
      { label: "Instagram", src: `${aboutAssetPath}/instagram.svg`, href: "#" },
      { label: "LinkedIn", src: `${aboutAssetPath}/linkedin.svg`, href: "#" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SiteHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page blog-figma-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_SiteHeader, { "active-path": "/blog" }, null, _parent));
      _push(`<main><section class="blog-search-section" aria-label="Blog search"><form class="blog-search-pill" action="/blog" role="search"><input type="search" name="q" aria-label="Search articles" placeholder="Search"><button type="submit" aria-label="Search"><span>Search</span><b aria-hidden="true">→</b></button></form></section><section class="blog-list-section" aria-label="Articles"><div class="blog-card-grid"><!--[-->`);
      ssrRenderList(unref(articles), (article) => {
        _push(`<article class="blog-card"><figure class="blog-card-media"><img${ssrRenderAttr("src", `${blogAssetPath}/article-product.png`)} alt=""><img${ssrRenderAttr("src", `${blogAssetPath}/article-gradient.png`)} alt=""></figure><div class="blog-card-body"><p>${ssrInterpolate(article.category)}</p><h2>${ssrInterpolate(article.title)}</h2><a${ssrRenderAttr("href", article.href)}><span>Click Here</span><b aria-hidden="true">→</b></a></div></article>`);
      });
      _push(`<!--]--></div><a class="blog-more-button" href="#"><span>บทความเพิ่มเติม</span><b aria-hidden="true">→</b></a></section></main><footer class="about-figma-footer"><div class="about-footer-inner"><div class="about-footer-address"><img${ssrRenderAttr("src", `${aboutAssetPath}/twf-logo-footer.svg`)} alt="TWF"><p> The Web Flight Co., Ltd., Capital Work Place Building, Fl. 8, 1<br> Soi Chamchan, Klongton-neur, Wattana, Bangkok 10110 </p></div><div class="about-footer-socials"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/blog-BvNGBRDz');
//# sourceMappingURL=blog-BvNGBRDz.mjs.map
