import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import loadingGif from '../assets/spinner.gif'
import CountrySelector from './CountrySelector'
import options from '../assets/countryNames'
import CategorySelector from './CategorySelector'


const NewsList = (props) => {
  let [page, setPage] = useState(1)
  const [totalArticles, setTotalArticles] = useState(0)
  let [articles, setArticles] = useState([])
  let [loading, setLoading] = useState(false)
  let [country, setCountry] = useState("in")
  let [category, setCategory] = useState("all")
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_API_KEY}&page=${page}&pagesize=${props.pageSize}`

  if(category!=="all"){
    url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${page}&pagesize=${props.pageSize}`
  }

  useEffect(() => {
    async function getNewsArticles() {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setArticles(data.articles)
      setTotalArticles(data.totalResults)
      setLoading(false)
    }

    getNewsArticles()
  }, [page,country,category])

  const increasePage = () => {
    setPage(page + 1)
  }
  const decreasePage = () => {
    setPage(page - 1)
  }


  function changeCountry(e) {
    for (let [countryCode, countryName] of Object.entries(options)) {
      if (countryName === e.target.value) {
        setCountry(countryCode)
      }
    }
  }

  function changeCategory(e){
    setCategory(e.target.value)
    e.target.value!=="all"?document.title=`Informer-${e.target.value}`:document.title="Informer"
  }
  return (
    <div className='news-container md:mx-16 lg:mx-32 mx-4 min-[340px]:mx-8 min-[500px]:mx-12 my-8'>
      <h1 className={`${props.mode}` === "light" ? "text-4xl text-slate-900 text-center font-bold font-mono" : "text-4xl text-red-300 text-center font-bold font-mono"}>Top Headlines</h1>
      {(loading && <div className='w-full flex justify-center align-middle'>
        <img src={`${loadingGif}`} alt="" width='200px' height='200px' className='m-4 text-center' />
      </div>)}
      <CountrySelector changeCountry={changeCountry} mode={props.mode} country={country}/>
      <CategorySelector changeCategory={changeCategory} mode={props.mode}/>
      <div className='cards-container padding-4  mt-8 flex lg:justify-between justify-center flex-wrap gap-8'>
        {articles.map((element) => {
          return <NewsItems mode={props.mode} key={element.url} author={element.author} date={element.publishedAt} url={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} />
        })}
      </div>
      <div className='nav-buttons flex justify-between'>
        <button disabled={page <= 1} onClick={decreasePage} className='button rounded-lg p-2 font-mono shadow-xl border border-gray-200 text-white w-24 bg-slate-900 hover:bg-slate-700'><i className="fa-solid fa-chevron-left text-white mx-1"></i>Prev</button>
        <button disabled={page >= Math.ceil(totalArticles / props.pageSize)} onClick={increasePage} className='button rounded-lg p-2 border border-gray-200 font-mono text-white w-24 bg-slate-900 hover:bg-slate-700'>Next<i className="fa-solid fa-chevron-right text-white mx-1"></i></button>
      </div>
    </div>
  )
}

export default NewsList
