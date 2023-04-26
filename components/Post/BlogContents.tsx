import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import cheerio from "cheerio";
import OpenGraphPreview from "../UIElements/OpenGraphPreview";

import type { Post } from "types/posts";

interface Props {
  post: Post;
  MDXComponent: Function;
}

export default function BlogContents({ post, MDXComponent }: Props) {
  const makeURLPreview = async (el: HTMLAnchorElement) => {
    try {
      const urlPath = el.href;
      const response = await axios.get(
        `/api/proxy?url=${encodeURIComponent(urlPath)}`
      );
      const html = response.data;
      const $ = cheerio.load(html);

      const jsonLD = $('script[type="application/json"]').text();
      const structuredData = jsonLD
        ? JSON.parse(jsonLD)?.props?.pageProps?.structuredData
        : {};

      const meta = (property: string) =>
        $(`meta[property="${property}"]`).attr("content");
      const title = $("title").text();

      const ogTitle = structuredData?.ogTitle || meta("og:title") || title;
      const ogDescription =
        structuredData?.ogDescription || meta("og:description");
      const ogImage = structuredData?.ogImage || meta("og:image");

      const aHtml = ReactDOMServer.renderToString(
        <OpenGraphPreview
          urlPath={urlPath}
          ogTitle={ogTitle}
          ogDescription={ogDescription}
          ogImage={ogImage}
          URL={urlPath}
        />
      );
      el.outerHTML = aHtml;
    } catch (err) {
      console.error(err);
    }
  };

  const makeChapterLinkAction = (
    event: MouseEvent,
    link: HTMLAnchorElement
  ) => {
    event.preventDefault();
    const linkId = link.getAttribute("href")?.slice(1);
    if (linkId) {
      const target = document.getElementById(linkId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (MDXComponent) {
      const linkList = document.querySelectorAll("#link");
      linkList.forEach((el: Element) => {
        if (el instanceof HTMLAnchorElement) {
          makeURLPreview(el);
        }
      });
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        if (link instanceof HTMLAnchorElement) {
          link.addEventListener("click", (event: MouseEvent) =>
            makeChapterLinkAction(event, link)
          );
        }
      });
    }
  }, [MDXComponent]);

  return (
    <article className="mt-10 prose max-w-none px-4 ">
      <h1 className="text-green-600 dark:text-green-500 text-3xl max800:text-2xl">
        {post.title}
      </h1>
      <p className="text-green-600 dark:text-green-500 font-semibold ">
        {post.date.slice(0, 4)}년 {post.date.slice(5, 7)}월&nbsp;
        {post.date.slice(8, 10)}일
      </p>
      <article className="w-full dark:text-slate-50 text-neutral-900 leading-loose">
        <MDXComponent />
      </article>
    </article>
  );
}
