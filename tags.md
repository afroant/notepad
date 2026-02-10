---
layout: default
title: All Tags
permalink: /tags/
---

# All Tags

{% assign sorted_tags = site.tags | sort %}
{% for tag in sorted_tags %}
  {% assign tag_name = tag[0] %}
  {% assign tag_posts = tag[1] %}
  <div class="tag-group">
    <h2 id="{{ tag_name | slugify }}">
      <a href="{{ '/tags/' | relative_url }}{{ tag_name | slugify }}/">#{{ tag_name }}</a>
      <span class="tag-count">({{ tag_posts | size }})</span>
    </h2>
    <ul class="post-list">
      {% for post in tag_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
      </li>
      {% endfor %}
    </ul>
  </div>
{% endfor %}
