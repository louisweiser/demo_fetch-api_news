export default async function handler(req, res) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    res
      .status(500)
      .json({ error: `An error occurred: ${response.statusText}` });
    return;
  }

  const data = await response.json();
  res.status(200).json(data);
}

/* const response = {
  status: "ok",
  totalResults: 1213,
  articles: [
    {
      source: {
        id: null,
        name: "Grit Daily",
      },
      author: "GRIT DAILY",
      title: "Best Moz Alternatives of 2023",
      description:
        "Every entrepreneur and small business owner needs to get SEO right if they want to be competitive in both the online and local markets in which they operate. Making sure your website gets seen by the right people—your prospects—at the right time—when they’re …",
      url: "https://gritdaily.com/best-moz-alternatives/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2023/03/Best-Moz-Alternatives.jpg",
      publishedAt: "2023-03-30T21:00:07Z",
      content:
        "Every entrepreneur and small business owner needs to get SEO right if they want to be competitive in both the online and local markets in which they operate.\r\nMaking sure your website gets seen by th… [+7516 chars]",
    },
    {
      source: {
        id: null,
        name: "Moz.com",
      },
      author: "Meghan Pahinui",
      title: "Daily SEO Fix: How to Use Keyword Labels in Moz Pro",
      description:
        "In this edition of the Daily SEO Fix, we’ll look at how you can apply labels to keywords in your Moz Pro Campaign along with different ways to segment your data and how to create reports for different keyword clusters.",
      url: "https://moz.com/blog/daily-seo-fix-use-keyword-labels",
      urlToImage: null,
      publishedAt: "2023-04-17T07:00:00Z",
      content:
        "Tracking keyword rankings is an essential part of any SEO strategy and helps inform how changes you’ve made to your site have made an impact. No matter how many keywords you’re tracking it can be inc… [+2219 chars]",
    },
  ],
}; */
