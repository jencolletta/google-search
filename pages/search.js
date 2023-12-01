import '../styles/search-results.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from '../components/searchBar'
import SearchLogo from '../public/search-logo.png'
import useGoogleSearch from '../src/app/searchAPI'
import { useRouter } from 'next/router'
import {
  Description,
  Image as Images,
  LocalOffer,
  MoreVert,
  Room,
  Search,
} from '@mui/icons-material'

const Option = ({ Icon, title, link }) => (
  <div className='search-option'>
    {Icon && <Icon fontSize='small' />}
    <a href={link}>{title}</a>
  </div>
)

const ResultItem = ({ item }) => (
  <div className='search-result'>
    <a href={item.link} className='search-result-link'>
      {item.pagemap?.cse_image?.length > 0 &&
        item.pagemap?.cse_image[0]?.src && (
          <img
            src={item.pagemap.cse_image[0].src}
            alt={item.title}
            className='search-result-image'
          />
        )}
      {item.displayLink}
    </a>
    <a href={item.link} className='search-result-title'>
      <h2>{item.title}</h2>
    </a>
    <p className='search-result-snippet'>{item.snippet}</p>
  </div>
)

const SearchResults = () => {
  const router = useRouter()
  const queryString =  new URLSearchParams(router.asPath.split('?')[1])
  const term = queryString.get('q')
  const { data } = useGoogleSearch(term)

  return (
    <div className='search'>
      <div className='search-header'>
        <div className='search-header-body'>
          <Link href='/'>
            <Image src={SearchLogo} alt='Google' width={92} />
          </Link>
          <SearchBar term={term} hideButtons />
        </div>
        <div className='search-options'>
          <div className='search-options-left'>
            <Option Icon={Search} title='All' link='/all' />
            <Option Icon={Description} title='News' link='/news' />
            <Option Icon={Images} title='Images' link='/images' />
            <Option Icon={LocalOffer} title='Shopping' link='/shopping' />
            <Option Icon={Room} title='Maps' link='/maps' />
            <Option Icon={MoreVert} title='More' link='/more' />
          </div>
          <div className='search-options-right'>
            <div className='search-option'>
              <p>Settings</p>
            </div>
            <div className='search-option'>
              <p>Tools</p>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className='search-results'>
          <p className='search-result-count'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds ) for {term}
          </p>

          {data?.items.map((item) => (
            <ResultItem key={item.link} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchResults
