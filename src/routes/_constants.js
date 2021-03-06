const strings = {
  website: "https://cn.pattern.monster",
  title: "Pattern Monster",
  description: "一个简单的重复性SVG图案在线生成器。",
  description2: "在不影响图像质量的情况下加快您网站的访问速度。",
  description3: "完美的网页背景、服装、品牌、包装设计方案。",
  keywords: "SVG图案、图案、SVG背景、矢量壁纸、图案生成器、图案制作器",
  pages: [
    {
      page: "index",
      title: "SVG 图案生成器",
      keywords: "",
      description: "",
      image: "",
    },
    {
      page: "changelog",
      title: "更新日志",
      keywords: "更新日志",
      description: "Changelog for Pattern Monster.",
      image: "",
    },
    {
      page: "downloads",
      title: "下载",
      keywords: "下载",
      description: "Downloads for Pattern Monster.",
      image: "",
    },
    {
      page: "features",
      title: "功能",
      keywords: "功能",
      description: "Features for Pattern Monster.",
      image: "",
    },
    {
      page: "privacy-policy",
      title: "隐私策略",
      keywords: "隐私策略",
      description: "Privacy Policy for Pattern Monster.",
      image: "",
    },
    {
      page: "api",
      title: "API",
      keywords: "api",
      description: "API for Pattern Monster.",
      image: "",
    },
    {
      page: "accessories",
      title: "Accessories",
      keywords: "accessories, shop",
      description: "Accessories for Pattern Monster.",
      image: "",
    },
    {
      page: "home-living",
      title: "Home & Living",
      keywords: "home, living, shop",
      description: "Home Living for Pattern Monster.",
      image: "",
    },
    {
      page: "phone-cases",
      title: "Phone Cases",
      keywords: "phone, cases, shop",
      description: "Phone Cases for Pattern Monster.",
      image: "",
    },
    {
      page: "stationery-office",
      title: "Stationery & Office",
      keywords: "stationery, office, shop",
      description: "Stationery & Office for Pattern Monster.",
      image: "",
    },
    {
      page: "stickers-skins",
      title: "Stickers & Skins",
      keywords: "stickers, skins, shop",
      description: "Stickers & Skins for Pattern Monster.",
      image: "",
    },
    {
      page: "wall-art",
      title: "Wall Art",
      keywords: "wall-art, shop",
      description: "Wall Art for Pattern Monster.",
      image: "",
    },
  ],
  versions: [
    {
      lang: "en",
      website: "https://pattern.monster",
    },
    {
      lang: "de",
      website: "https://de.pattern.monster",
    },
    {
      lang: "pl",
      website: "https://pl.pattern.monster",
    },
    {
      lang: "tr",
      website: "https://tr.pattern.monster",
    },
    {
      lang: "es",
      website: "https://es.pattern.monster",
    },
    {
      lang: "it",
      website: "https://it.pattern.monster",
    },
    {
      lang: "ro",
      website: "https://ro.pattern.monster",
    },
    {
      lang: "fr",
      website: "https://fr.pattern.monster",
    },
    {
      lang: "ar",
      website: "https://ar.pattern.monster",
    },
    {
      lang: "pt",
      website: "https://pt.pattern.monster",
    },
    {
      lang: "zh-cn",
      website: "https://cn.pattern.monster",
    },
    {
      lang: "nl",
      website: "https://nl.pattern.monster",
    },
    {
      lang: "sv",
      website: "https://sv.pattern.monster",
    },
  ],
};

const pageDetails = (page) => {
  let imagePrefix = "https://giguom.com/pattern.monster/images/";
  let pageValues =
    strings.pages.filter((currentPage) => currentPage.page === page)[0] || strings.pages.filter((currentPage) => currentPage.page === "index")[0];

  let website = strings.website;
  let title = strings.title + " - " + strings.pages[0].title;
  let url = website;
  let keywords = strings.keywords;
  let desc = strings.description + " " + strings.description3;
  let image = pageValues.image == "" ? imagePrefix + "/TwitterBG2.png" : pageValues.image;

  let versions = strings.versions.map((version) => {
    return { lang: version.lang, website: version.website + (page === "index" ? "" : "/" + page + "/") };
  });

  if (page != "index") {
    title = pageValues.title + " - " + strings.title + " | " + strings.pages[0].title;
    url = website + "/" + page + "/";
    desc = pageValues.description + " " + strings.description + " " + strings.description3;
    keywords = pageValues.keywords + ", " + strings.keywords;
  }

  return { title, url, keywords, desc, image, versions };
};

let bmcData = `<path d="M0 24.48C0 10.96 12.76 0 28.5 0h650.22c15.75 0 28.5 10.96 28.5 24.48v104.04c0 13.52-12.75 24.48-28.5 24.48H28.5C12.76 153 0 142.04 0 128.52z" fill="#ffc800"/>
<path d="M109.52 50.32l-.06-.04-.16-.05c.06.05.14.08.22.09zM110.5 57.31l-.07.02.08-.02zM109.55 50.3h-.03v.02l.03-.01zM109.52 50.32h.02-.02zM110.45 57.3l.11-.06.04-.03.04-.04a.65.65 0 00-.2.13zM109.72 50.47l-.12-.1-.07-.04c.04.07.1.12.19.14zM81.88 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM98.05 115.17c0-.1-.05-.08-.04.28l.02-.09c0-.06 0-.12.02-.19zM96.38 118.35a.57.57 0 00-.23.18l.07-.05.16-.13zM70.49 119.11a.48.48 0 00-.24-.11l.2.1.04.01zM67.93 116.66a2.38 2.38 0 010 0z" fill="#0D0C22"/>
<path d="M85.14 72.77C81.62 74.27 77.63 76 72.45 76a24 24 0 01-6.4-.89l3.58 36.74a6.14 6.14 0 006.12 5.63s5.07.26 6.76.26c1.83 0 7.29-.26 7.29-.26a6.14 6.14 0 006.12-5.63l3.83-40.6a16.3 16.3 0 00-5.4-.97c-3.36 0-6.08 1.16-9.21 2.5z" fill="#fff"/>
<path d="M54.98 57.1l.07.06.03.02a.6.6 0 00-.1-.08z" fill="#0D0C22"/>
<path d="M116.3 53.71l-.54-2.72c-.48-2.43-1.58-4.74-4.08-5.62-.8-.28-1.72-.4-2.33-.99-.62-.58-.8-1.49-.94-2.33l-.78-4.62c-.23-1.33-.42-2.81-1.03-4.03-.79-1.63-2.43-2.58-4.06-3.21-.83-.32-1.69-.58-2.55-.8-4.08-1.07-8.36-1.46-12.55-1.69-5.03-.28-10.08-.2-15.1.25-3.73.34-7.67.75-11.22 2.04a9.5 9.5 0 00-3.62 2.05 3.92 3.92 0 00-.72 4.67 6.05 6.05 0 002.82 2.37c1.47.66 3 1.16 4.58 1.5 4.39.96 8.93 1.34 13.41 1.5 4.97.2 9.95.04 14.89-.48 1.22-.14 2.44-.3 3.66-.49 1.44-.22 2.36-2.1 1.93-3.4-.5-1.56-1.86-2.17-3.4-1.93l-.68.1-.16.02a95.5 95.5 0 01-4.8.47 107.24 107.24 0 01-19.14-.4l-.47-.07-.1-.01-.48-.07a50.9 50.9 0 01-2.96-.53.44.44 0 010-.87h.02a47.95 47.95 0 013.42-.6c.54-.03 1.08-.13 1.61-.2a102.3 102.3 0 0122.2.1l.56.08.38.05c1.09.16 2.17.36 3.25.6 1.6.34 3.66.45 4.37 2.2.22.56.33 1.18.45 1.76l.16.75.01.04 1.13 5.27a.95.95 0 01-.15.75.97.97 0 01-.66.4h-.01l-.23.04-.23.03a128.48 128.48 0 01-6.45.68 149.64 149.64 0 01-12.9.52 151.25 151.25 0 01-19.17-1.24l-.51-.07-1.19-.17c-1.33-.2-2.64-.45-3.97-.66a6.9 6.9 0 00-4.58.66 6.66 6.66 0 00-2.76 2.86c-.62 1.29-.8 2.7-1.08 4.08-.28 1.39-.72 2.88-.55 4.3a6.87 6.87 0 005.59 6.13 161.9 161.9 0 0046.27 1.53 1.98 1.98 0 012.19 2.17l-.3 2.85a1089465.02 1089465.02 0 01-4.15 40.42c-.17 1.67-.19 3.4-.5 5.04-.5 2.6-2.27 4.2-4.83 4.78-2.35.54-4.76.82-7.17.84-2.67.01-5.34-.1-8.01-.1-2.86.02-6.35-.24-8.55-2.36-1.94-1.87-2.2-4.79-2.47-7.31l-1.04-10.03-1.94-18.59L62.84 70l-.07-.6c-.15-1.43-1.16-2.84-2.76-2.77-1.37.06-2.93 1.23-2.77 2.77l.93 8.92 1.92 18.44 1.64 15.72.31 3.01c.6 5.49 4.8 8.44 9.98 9.27 3.03.5 6.14.6 9.21.64 3.94.06 7.92.22 11.8-.5 5.74-1.05 10.05-4.89 10.67-10.84l.53-5.15 1.75-17.05 1.9-18.58.87-8.51a1.98 1.98 0 011.6-1.74c1.64-.32 3.2-.87 4.38-2.12 1.86-1.99 2.23-4.58 1.57-7.2zm-61.8 1.84c.03-.01-.02.2-.04.3 0-.15 0-.28.05-.3zm.16 1.23c.02 0 .06.04.1.1l-.1-.1zm.16.2c.06.1.09.16 0 0zm.32.26l.02.03a.21.21 0 00-.03-.03zm55.13-.38c-.6.56-1.48.82-2.36.95A166.3 166.3 0 0178.1 59.7a200.69 200.69 0 01-21.24-2.03c-.7-.1-1.44-.23-1.92-.74-.9-.96-.46-2.9-.22-4.06.21-1.06.62-2.48 1.88-2.63 1.98-.23 4.28.6 6.23.9a136.85 136.85 0 0037.57.3c1.84-.26 3.67-.54 5.5-.87 1.62-.3 3.42-.84 4.4.84.67 1.15.76 2.68.66 3.98-.04.56-.28 1.1-.7 1.48z" fill="#0D0C22"/>
<g aria-label="赞助一杯咖啡钱" transform="matrix(9.22544 0 0 9.22544 1026.53 -199.71)" fill="#000" stroke="#000" stroke-width=".11">
    <path d="M-92.76 28.2v.45c0 .33-.18.46-.3.52.07.08.18.26.2.37.12-.08.32-.14 1.55-.46l.01-.4-.96.23v-.72h.84v-.42h-1.22v-.53h1.03v-.41h-1.03v-.55h-.55v.55h-.55l.14-.42-.5-.07a3 3 0 01-.53 1.1c.13.06.32.17.44.25.1-.14.2-.29.27-.45h.73v.53h-1.58v.42h.94c-.1.6-.35.95-1.08 1.16.1.08.25.26.3.38.85-.3 1.16-.77 1.28-1.54zm3.94 4.02v-2.48h-4.89v2.5h.58v-1.99h3.7v1.97zm-2.2-1.53h-.57v.57c0 .71-.48 1.35-2.87 1.77.11.12.28.36.34.5 2.49-.45 3.1-1.3 3.1-2.25zm-.1 1.7c.93.3 2.13.8 2.73 1.16l.32-.51c-.63-.35-1.85-.82-2.75-1.1zm2.39-3.35c-.15 0-.17-.01-.17-.15v-.7h1.09v-.42h-1.4v-.51h1.12v-.42h-1.13v-.56h-.55v.56h-.57l.16-.43-.48-.07c-.1.36-.3.79-.6 1.13.13.05.32.16.43.24.11-.14.22-.3.3-.45h.76v.5h-1.45v.43h.88c-.08.54-.31.84-.97 1.04.1.07.24.26.28.37.79-.27 1.07-.7 1.18-1.4h.46v.7c0 .45.1.57.6.57h.6c.35 0 .48-.15.53-.7-.14-.03-.33-.1-.43-.17-.02.4-.04.44-.18.44z"/>
    <path d="M-85.9 30.57h1.48v1.05l-1.49.32zm1.48-3.36v1.16h-1.49V27.2zm0 2.83h-1.49V28.9h1.49zm.99 1.37l-.44.1v-4.84h-2.58v5.38l-.56.11.1.6 3.52-.82zm1.68-3.34c.03-.57.03-1.17.03-1.78h-.58c0 .61 0 1.2-.02 1.78h-1.29v.57h1.27c-.11 1.9-.51 3.53-2.02 4.47.15.1.34.3.43.44 1.6-1.06 2.04-2.85 2.16-4.91h1.24c-.08 2.89-.16 3.94-.36 4.17-.07.1-.16.13-.3.12-.16 0-.57 0-1.03-.03.1.15.16.39.18.56.42.02.85.04 1.09.01.25-.03.42-.1.57-.3.26-.35.34-1.48.42-4.8v-.3z"/>
    <path d="M-79 29.51v.64h7.21v-.64z"/>
    <path d="M-68.18 29.93c-.17-.22-.9-1.1-1.14-1.37v-.2h.97v-.55h-.97V26.3h-.57v1.52h-1.15v.56h1.08a9.6 9.6 0 01-1.24 3.07c.1.14.26.37.33.54.37-.52.71-1.33.98-2.17v3.73h.57v-4.27c.28.4.6.88.75 1.15zm4.13-2.57v-.56h-4.26v.56h2.06a7.91 7.91 0 01-2.33 3.45c.13.1.37.34.45.46a8.28 8.28 0 001.53-1.85v4.1h.58v-5.17c.15-.32.28-.65.4-.99zM-66.02 29c.58.67 1.3 1.57 1.62 2.14l.48-.37a16.33 16.33 0 00-1.65-2.07z"/>
    <path d="M-61.6 27.35v3.7h-.8v-3.7zm.48 4.2v-4.68h-1.75v5.44h.47v-.76zm1.47-3.67l.02-1.57h-.52v1.57h-.68v.53h.66c-.06 2.09-.29 3.76-1.29 4.77.13.08.32.25.41.38 1.08-1.13 1.33-2.91 1.4-5.15h.67c-.08 3.04-.18 4.1-.35 4.33-.07.11-.13.13-.23.13-.12 0-.35 0-.6-.02.07.15.13.37.13.53.26.02.52.01.7 0a.6.6 0 00.45-.29c.24-.34.33-1.44.43-4.94v-.27zm2 4.16v-4.3h.98v4.3zm-.48-4.83v6.03h.48v-.66h.98v.6h.51V27.2z"/>
    <path d="M-53.55 27.58v3.3h-.87v-3.3zm.52-.55h-1.92v5.16h.53v-.76h1.39zm1.7.58h-1.23v.55h1.23v1.13h-1.18v.53h1.18v1.22h-1.41v.54h1.4v1.94h.58v-7.2h-.57zm3.38 3.37h-1.41v-1.16h1.27v-.54h-1.27v-1.12h1.34v-.55h-1.34v-1.3h-.57v7.2h.57v-1.99h1.4z"/>
    <path d="M-40.6 27.1a5.5 5.5 0 00-1.14-.67l-.34.33c.4.2.9.5 1.14.71zm-3.84.64v-.56h-1.5c.12-.23.23-.48.3-.72l-.52-.16a5.01 5.01 0 01-1.16 1.91c.1.13.26.43.3.56.28-.3.55-.64.8-1.03zm-.97 4.64v-1.65h1.08v-.54h-1.08v-1.07h.86v-.53h-2.17v.53h.77v1.07h-1.15v.54h1.15v1.62c0 .37-.26.6-.4.7.09.1.23.3.29.42.13-.15.36-.28 1.82-1.18a2.67 2.67 0 01-.14-.5zm4.8-2.23c-.3.51-.73.99-1.22 1.4-.14-.43-.24-.95-.33-1.53l2-.37-.1-.52-1.96.37-.1-1.05 1.95-.29-.1-.51-1.88.27c-.02-.52-.04-1.08-.03-1.65h-.57c0 .6.02 1.19.06 1.73l-1.2.18.1.52 1.13-.17c.02.36.05.73.1 1.07l-1.5.28.11.52 1.45-.28c.1.68.23 1.28.4 1.78-.62.43-1.32.78-2.05 1.02.14.13.28.33.37.47a8.46 8.46 0 001.88-.97c.32.68.73 1.08 1.25 1.08.54 0 .71-.27.82-1.13a1.43 1.43 0 01-.44-.31c-.03.7-.1.89-.31.89-.34 0-.62-.32-.86-.87a6.3 6.3 0 001.52-1.7z"/>
  </g>`;
let bmcHeader = `<svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 0 707.23 153" fill="none">${bmcData}</svg>`;
let bmcFooter = `<svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 707.23 153" fill="none">${bmcData}</svg>`;

export default { bmcHeader, bmcFooter, strings, pageDetails };
