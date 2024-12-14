import { useState } from 'react'
import viteLogo from '../../assets/vite.svg'
import reactLogo from '../../assets/react.svg'
import './index.css'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const [count, setCount] = useState(0)

  const { t } = useTranslation()

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>{t('CountIs', { count: count })}</button>
      </div>
      <p className='read-the-docs'>{t('LearnMoreParagraph')}</p>
    </>
  )
}

export default HomePage
