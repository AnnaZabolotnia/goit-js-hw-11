import{i as c,S as g}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="gallery-link",f="https://pixabay.com/api/";function p(i){const s=new URLSearchParams({key:"42391578-00c3b1aea4bb12888c676ccb5",q:i,image_type:"photo",orientation:"horizontal",safeSearch:!0}),n=f+"?"+s.toString();return fetch(n).then(r=>r.json())}function d({largeImageURL:i,tags:s,webformatURL:n,likes:r,views:e,comments:t,downloads:a}){return`
    <a href="${i}" class="${u}">
      <figure>
        <img src="${n}" alt="${s}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${r}</span></div>
          <div class="image-item">Views <span class="image-elem">${e}</span></div>
          <div class="image-item">Comments <span class="image-elem">${t}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${a}</span></div>
        </figcaption>
      </figure>
    </a>
  `}const l=document.querySelector(".gallery"),m=document.querySelector(".search-form"),h=document.querySelector(".loader"),o=document.querySelector(".result-info");m.addEventListener("submit",function(i){i.preventDefault();const s=i.target.elements.query.value.trim();if(s.length<3){c.warning({title:"Warning",message:"Please enter a search query with at least 3 characters.",position:"topRight"});return}l.innerHTML="",o.innerHTML="";const n=new g(`.${u}`);p(s).then(({hits:r})=>{if(r.length>0){const e=r.map(d).join("");l.innerHTML=e,o.innerHTML='<p class="result-messages">Loading images, please wait...</p>',n.refresh(),setTimeout(()=>{o.innerHTML=""},2e3)}else o.innerHTML='<p class="no-results-message">No images found.</p>',setTimeout(()=>{o.innerHTML=""},5e3)}).catch(r=>{console.error("Error fetching images:",r),c.error({title:"Error",message:"Error fetching images. Please try again.",position:"topRight"})}).finally(()=>{h.style.display="none",m.reset()})});
//# sourceMappingURL=commonHelpers.js.map
