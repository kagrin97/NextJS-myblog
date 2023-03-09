import React, { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import cheerio from "cheerio";
import OpenGraphPreview from "../UIElements/OpenGraphPreview";

export default function BlogContents({ post, MDXComponent }) {
  const handleLinkPreview = async (el: HTMLAnchorElement) => {
    try {
      const urlPath = el.href;
      const response = await axios.get(
        `/api/proxy?url=${encodeURIComponent(urlPath)}`
      );
      const html = response.data;
      const $ = cheerio.load(html);
      const ogTitle =
        $('meta[property="og:title"]').attr("content") || $("title").text();
      const ogDescription = $('meta[property="og:description"]').attr(
        "content"
      );
      const ogImage = $('meta[property="og:image"]').attr("content");
      const aHtml = ReactDOMServer.renderToString(
        <OpenGraphPreview
          urlPath={urlPath}
          ogTitle={ogTitle}
          ogDescription={ogDescription}
          ogImage={ogImage}
        />
      );
      el.outerHTML = aHtml;
    } catch (err) {
      console.log(err);
    }
  };

  const handleLinkClick = (event: MouseEvent, link: HTMLAnchorElement) => {
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
          handleLinkPreview(el);
        }
      });
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        if (link instanceof HTMLAnchorElement) {
          link.addEventListener("click", (event: MouseEvent) =>
            handleLinkClick(event, link)
          );
        }
      });
    }
  }, [MDXComponent]);

  return (
    <article className="mt-10 prose max-w-none">
      <h1 className="text-green-500 text-center maxSm:text-2xl">
        {post.title}
      </h1>
      <h3 className="text-green-600 text-end italic">
        {post.date.slice(0, 4)}년 {post.date.slice(5, 7)}월
        {post.date.slice(8, 10)}일
      </h3>
      <article className="w-full dark:text-slate-50 text-neutral-900">
        <MDXComponent />
      </article>
    </article>
  );
}
