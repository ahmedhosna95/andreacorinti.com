---
title: Articles
subtitle: Work in Progress!
layout: layouts/base.njk
---

### [🇮🇹 Clicca qui per gli articoli in Italiano](/articoli)

<div class="flex-container">
{%- for page in collections.articles -%}
<div class="card">
  <div class="card-header">{{ page.data.title }}</div>
  <div class="card-main">
    <a href="{{ page.url }}">
    <img src="{{ page.data.immagine }}" alt="{{ page.data.title }}" title="{{ page.data.title }}" class="img-archivio"></a>
    <div class="main-description">{{ page.data.sommario }}</div>
  </div>
  <div class="card-date">{{ page.data.date | dateDisplay }}</div>
</div>
{%- endfor -%}
</div>
