function ArticlesMobile({ articles }) {
  const articlesMap = Object.values(articles)

  return (
    <>
      <div className="pressMobileWrapper">
        {articlesMap.map((article) => (
          <>
            <div className="textLink">
              <a href={article.url} target="_blank">
                {article.description}
              </a>
            </div>
          </>
        ))}
      </div>

      <style jsx>{`
        .pressMobileWrapper {
          color: white;
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .textLink {
          text-decoration: underline;
          padding-bottom: 10px;
        }
        a {
          color: white;
        }
      `}</style>
    </>
  )
}

export default ArticlesMobile
