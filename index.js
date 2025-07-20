import{a as w,S as v,i as c}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function p(t,o){const a="50859517-961673cab883b3cd43a6fc51d";try{return(await w.get("https://pixabay.com/api/",{params:{key:a,q:t,page:`${o}`,per_page:"15",image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(e){console.log(e.message)}}function S(t){const o=document.querySelector(".gallery"),a=t.map(({largeImageURL:s,webformatURL:e,tags:r,likes:l,views:u,comments:f,downloads:h})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${s}">
                    <img class="card-img" src="${e}" alt="${r}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${l}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${u}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${f}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${h}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`).join("");o.innerHTML=a,y()}let g=null;function y(){if(g)return g.refresh();g=new v(".gallery a",{captionsData:"alt",captionDelay:250})}function b(t){const o=document.querySelector(".gallery"),a=t.map(({largeImageURL:s,webformatURL:e,tags:r,likes:l,views:u,comments:f,downloads:h})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${s}">
                    <img class="card-img" src="${e}" alt="${r}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${l}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${u}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${f}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${h}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`).join("");o.insertAdjacentHTML("beforeend",a),y()}function q(){const t=document.querySelector(".gallery");t.innerHTML=""}function m(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}function $(){document.querySelector(".load-button").classList.remove("hidden")}function d(){document.querySelector(".load-button").classList.add("hidden")}const M=document.querySelector(".form"),x=document.querySelector("input"),B=document.querySelector(".load-button");let n="",i=1;const P=15;M.addEventListener("submit",C);async function C(t){if(t.preventDefault(),n=x.value.trim(),!n){c.warning({message:"Sorry, fill in the search query to start work",position:"topRight"});return}m(),q(),d();try{i=1;const o=await p(n,i);if(o.hits.length===0)return c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});S(o.hits),i*P<o.totalHits?$():d()}catch(o){console.log(o.message),c.show({message:`Error:${o.message}`,color:"red",position:"topRight"})}finally{L()}}B.addEventListener("click",E);async function E(){m(),i+=1;try{const t=await p(n,i);if(!t.hits||t.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),d();return}i*15>=t.totalHits&&(d(),c.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight"})),b(t.hits);const s=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}catch(t){console.log(t.message)}finally{L()}}
//# sourceMappingURL=index.js.map
