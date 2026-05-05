import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | Impulsion Technologies Dubai",
  description: "Insights, tips, and news on ERP systems, software development, digital marketing, and IT trends from Impulsion Technologies Dubai.",
};

const posts = [
  {
    title: "Why Every UAE Business Needs a Custom ERP System in 2025",
    excerpt: "Off-the-shelf ERP solutions rarely fit the unique workflows of UAE businesses. Discover why a custom ERP built for your specific operations delivers 10x the ROI.",
    date: "April 15, 2025",
    category: "ERP Systems",
    readTime: "5 min read",
    slug: "uae-business-custom-erp-2025",
    image: "/blog1.jpg",
  },
  {
    title: "The Ultimate Guide to Digital Marketing in Dubai",
    excerpt: "From Google Ads to TikTok campaigns, learn what digital marketing strategies work best for Dubai-based businesses targeting the UAE market.",
    date: "March 28, 2025",
    category: "Digital Marketing",
    readTime: "8 min read",
    slug: "digital-marketing-dubai-guide",
    image: "/blog2.jpg",
  },
  {
    title: "SEO for UAE Businesses: What's Changed in 2025",
    excerpt: "Google's AI-powered search has changed the rules. Here's how UAE businesses should adapt their SEO strategy to stay on top in 2025.",
    date: "March 10, 2025",
    category: "SEO",
    readTime: "6 min read",
    slug: "seo-uae-businesses-2025",
    image: "/hero.jpg",
  },
  {
    title: "How We Built a Shipping ERP for Ariana Shipping Line",
    excerpt: "A behind-the-scenes look at how we designed and built a complete shipping ERP system for a UAE-based shipping company — challenges, solutions, and results.",
    date: "February 20, 2025",
    category: "Case Study",
    readTime: "10 min read",
    slug: "ariana-shipping-erp-case-study",
    image: "/about-bg.jpg",
  },
  {
    title: "React vs Next.js: Which Should You Choose for Your Web Project?",
    excerpt: "Choosing between React and Next.js? We break down the pros, cons, and ideal use cases for UAE businesses looking to build modern web applications.",
    date: "February 5, 2025",
    category: "Web Development",
    readTime: "7 min read",
    slug: "react-vs-nextjs-web-project",
    image: "/team.jpg",
  },
  {
    title: "IT AMC Contracts: Why UAE Companies Should Invest in Managed IT",
    excerpt: "Prevent costly downtime and security breaches. Discover how an IT Annual Maintenance Contract keeps your Dubai business running smoothly year-round.",
    date: "January 18, 2025",
    category: "IT Support",
    readTime: "4 min read",
    slug: "it-amc-contracts-uae",
    image: "/cctv.jpg",
  },
];

const categories = ["All", "ERP Systems", "Digital Marketing", "SEO", "Web Development", "App Development", "Case Study", "IT Support"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-orange-primary text-sm font-semibold uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Tech <span className="gradient-text">Insights & Guides</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Expert articles on ERP systems, software development, digital marketing, and IT trends — written by our team in Dubai.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-orange-primary text-white" : "bg-navy-800 border border-white/10 text-gray-400 hover:text-white hover:border-orange-primary"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-navy-800 border border-white/5 hover:border-orange-primary/40 rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-48 bg-navy-900">
                  {"image" in post && post.image
                    ? <Image src={post.image as string} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    : <div className="h-full flex items-center justify-center"><span className="text-4xl font-black gradient-text opacity-40">{post.category.slice(0, 2).toUpperCase()}</span></div>
                  }
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-orange-primary bg-orange-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-orange-primary transition-colors">{post.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span className="text-orange-primary text-sm font-medium">Read More →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-950 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-gray-400 mb-6">Get the latest tech insights and news from our Dubai team straight to your inbox.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-navy-800 border border-white/10 focus:border-orange-primary rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors" />
            <button type="submit" className="bg-orange-primary hover:bg-orange-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
