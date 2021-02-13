import styles from 'styles/infoSection.module.scss'

function ArticlesMobile({ articles }) {
  const articlesMap = Object.values(articles)
  console.log({ articlesMap })

  return (
    <>
      <div className="pressMobileWrapper">
        {articlesMap.map((article) => (
          <section style={{ marginTop: '20px', marginBottom: '20px' }}>
            <p>{article.year}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              <p>{article.linkDescription}</p>
            </a>
            <p>{article.description2}</p>
          </section>
        ))}
      </div>

      <style jsx>{`
        .pressMobileWrapper {
          color: white;
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        a {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default ArticlesMobile
