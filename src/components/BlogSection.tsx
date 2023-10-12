export interface BlogSectionProps {
  blogs?: {
    id: number;
    name: string;
    slug: string;
    c_shortDescription: string;
    c_coverPhoto: {
      image: {
        url: string;
      };
    };
    c_publishedDate: string;
    c_author: string;
  }[];
}

const testBlogs = [
  {
    c_author: "Capital Wealth Management",
    c_coverPhoto: {
      image: {
        height: 2000,
        url: "http://a.mktgcdn.com/p/o8Lj1-krSPUgHo3Jseaw2V4oj-WZKw0m0ZuZ-xzbJ-o/3000x2000.jpg",
        width: 3000,
      },
    },
    c_publishDate: "2023-07-19",
    c_shortDescription:
      "Learn the importance of integrating charitable giving into your wealth plan, highlighting the benefits, strategies, and the significance of regular review to align your philanthropic goals with financial and personal fulfillment.",
    name: "Incorporating Charitable Giving into Your Wealth Plan",
    slug: "blog/charity-blog",
  },
  {
    c_author: "Capital Wealth Management",
    c_coverPhoto: {
      image: {
        height: 1980,
        url: "http://a.mktgcdn.com/p/MOLy6abF9AO1gnXqEEWCvjJq5lkzEohBOnviDR5jLcs/2970x1980.jpg",
        width: 2970,
      },
    },
    c_publishDate: "2023-09-05",
    c_shortDescription:
      "Explore strategies and considerations for fixed income investing in a rising interest rate environment, highlighting the impact of rising rates, recommended investment strategies, and the importance of active management.",
    name: "Navigating Fixed Income Investing in a Rising Interest Rate Environment",
    slug: "blog/fixed-income-blog",
  },
  {
    c_author: "Capital Wealth Management",
    c_coverPhoto: {
      image: {
        height: 1980,
        url: "http://a.mktgcdn.com/p/c2-I35SYQ1DZwAu-cum24aY25yEEX0UsILcbpkE2z2A/2970x1980.jpg",
        width: 2970,
      },
    },
    c_publishDate: "2023-05-05",
    c_shortDescription:
      "This article provides valuable insights into smart strategies for managing Required Minimum Distributions (RMDs) from retirement accounts, offering guidance on optimizing retirement income, minimizing tax liabilities, and avoiding penalties for non-compliance.",
    name: "Smart Strategies for Taking Minimum Distributions",
    slug: "blog/rmd-blog",
  },
];

const BlogSection = ({ blogs }: BlogSectionProps) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights from our team.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article
            key={testBlogs[0].name}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img
                src={testBlogs[0].c_coverPhoto.image.url}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              {/* <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{blog.c_publishedDate}</time>
                  <a
                    href={blog.slug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {blog.name}
                  </a>
                </div> */}
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={testBlogs[0].slug}>
                    <span className="absolute inset-0" />
                    {testBlogs[0].name}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {testBlogs[0].c_shortDescription}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="text-gray-600">{testBlogs[0].c_author}</p>
                </div>
              </div>
            </div>
          </article>
          <article
            key={testBlogs[1].name}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img
                src={testBlogs[1].c_coverPhoto.image.url}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              {/* <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{blog.c_publishedDate}</time>
                  <a
                    href={blog.slug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {blog.name}
                  </a>
                </div> */}
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={testBlogs[1].slug}>
                    <span className="absolute inset-0" />
                    {testBlogs[1].name}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {testBlogs[1].c_shortDescription}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="text-gray-600">{testBlogs[1].c_author}</p>
                </div>
              </div>
            </div>
          </article>
          <article
            key={testBlogs[2].name}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              <img
                src={testBlogs[2].c_coverPhoto.image.url}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              {/* <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{blog.c_publishedDate}</time>
                  <a
                    href={blog.slug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {blog.name}
                  </a>
                </div> */}
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={testBlogs[2].slug}>
                    <span className="absolute inset-0" />
                    {testBlogs[2].name}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {testBlogs[2].c_shortDescription}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="text-gray-600">{testBlogs[2].c_author}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
