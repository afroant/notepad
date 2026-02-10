---
layout: default
title: Home
---

# Welcome to My Blog

This is my personal blog where I write about projects and practice my writing.

<p><a href="{{ '/tags/' | relative_url }}">Browse by tag →</a></p>

## Recent Posts

<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="post-meta">
      {{ post.date | date: "%B %d, %Y" }}
      {% if post.tags.size > 0 %}
      <span class="tags">
        {% for tag in post.tags %}
        <a href="{{ '/tags/' | relative_url }}{{ tag | slugify }}/" class="tag">#{{ tag }}</a>
        {% endfor %}
      </span>
      {% endif %}
    </p>
    {% if post.excerpt %}
    {{ post.excerpt }}
    <a href="{{ post.url | relative_url }}">Read more →</a>
    {% endif %}
  </li>
{% endfor %}
</ul>
