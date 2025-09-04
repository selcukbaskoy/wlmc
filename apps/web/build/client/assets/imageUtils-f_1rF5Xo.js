if(typeof window<"u"){const e={};globalThis.process??={};const n=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},e,n),{get(t,s){return s in t?t[s]:void 0},has(){return!0}})}function o(e){return!e||e.startsWith("data:")||e.startsWith("/")||e.startsWith("http")&&!e.includes("walmco.com/"),e}function r(e="WALMCO Ürün",n=400,t=300){const s=`
    <svg width="${n}" height="${t}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${n}" height="${t}" fill="#f3f4f6"/>
      <text x="${n/2}" y="${t/2-20}" text-anchor="middle" font-family="Arial" font-size="16" fill="#6b7280">WALMCO</text>
      <text x="${n/2}" y="${t/2}" text-anchor="middle" font-family="Arial" font-size="14" fill="#9ca3af">Ürün Görseli</text>
      <text x="${n/2}" y="${t/2+20}" text-anchor="middle" font-family="Arial" font-size="12" fill="#9ca3af">${e.substring(0,30)}...</text>
    </svg>
  `;return"data:image/svg+xml;base64,"+btoa(s)}function i(e,n="WALMCO Ürün"){const t=e.target;if(t.dataset.hasFallback)return;const{width:s,height:a}=t.getBoundingClientRect();t.dataset.hasFallback="1",t.onerror=null,t.src=r(n,Math.round(s)||400,Math.round(a)||300),t.style.objectFit="cover"}export{o as g,i as h};
