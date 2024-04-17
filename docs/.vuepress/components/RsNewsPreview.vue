<template>
  <div class="kt-main" role="main">
    <div class="container">
      <div class="row">
        <!-- Main Content -->
        <div class="col-md-8">
          <div class="kt-article post-186 page type-page status-publish hentry">
            <div class="row">
              <div class="col-md-12">
                <!-- Blog Post Title -->
                <a
                  class="kt-article-title"
                  href="https://www.real-schesslitz.de/schulblog/"
                  title="Schul­nach­rich­ten"
                >
                  <h1>Schul­nach­rich­ten</h1>
                </a>
                <!-- Blog Post Title ends here -->

                <div class="kt-article-content"></div>
              </div>
            </div>
          </div>

          <div
            class="kt-article post-7385 post type-post status-publish format-standard has-post-thumbnail hentry category-allgemein tag-startseite"
          >
            <div class="row">
              <div v-for="news in newsList" :key="news.key" class="col-md-12">
                <a :href="news.link">
                  <img
                    class="img-responsive"
                    src="https://www.real-schesslitz.de/wp-content/uploads/Handball_301006834.jpeg"
                    alt=""
                    height="800"
                    width="1200"
                  />
                </a>
                <!-- Blog Post Title -->
                <h1>
                  <a
                    class="kt-article-title"
                    :href="news.link"
                    :title="news.title"
                  >
                    {{ news.title }}
                  </a>
                </h1>
                <!-- Blog Post Title ends here -->

                <!-- Blog Post Main Content/Excerpt -->
                <div class="kt-article-content">
                  <p>
                    {{ news.teaser }}
                  </p>
                </div>
                <!-- Blog Post Main Content/Excerpt ends here -->

                <!-- Read More-Link -->
                <div class="kt-article-more">
                  <a :href="news.link" :title="news.title"
                    >[Den ganzen Artikel anzeigen]</a
                  >
                </div>
                <!-- Read More-Link ends here -->
              </div>
              <!-- Main Blog Post Ends -->
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-md-4">
          <div id="kt-sidebar">
            <div id="recent-posts-2" class="widget widget_recent_entries">
              <h3>Neu­es­te Beiträge</h3>
              <ul>
                <li v-for="news in newsList" :key="news.key">
                  <a :href="news.link">{{ news.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePages } from "@temp/news";
const pages = usePages();
console.log(pages);
const newsList = pages.map((page) => ({
  title: page.title,
  teaser: page.frontmatter.teaser,
  link: page.path,
  key: page.key,
}));
</script>
