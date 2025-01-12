import NewsList from"@/components/news/NewsList";
const NewsPage = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold md-8">Latest News</h2>
      <NewsList/>
    </section>
  )
}

export default NewsPage