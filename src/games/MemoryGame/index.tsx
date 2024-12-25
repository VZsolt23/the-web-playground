import { MemoryGameCard } from '../../common/types.ts'
import { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid2'
import '../../styles/MemoryGame.css'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import { generateCards } from './cardGeneration.ts'
import { useTranslation } from 'react-i18next'

interface MemoryGameProps {
  size: number
  handleSuccess: (value: boolean) => void
  completionTime?: (value: string) => void
}

const MemoryGame = ({ size, handleSuccess, completionTime }: MemoryGameProps) => {
  const [cards, setCards] = useState<MemoryGameCard[]>(generateCards(size))
  const [flippedCards, setFlippedCards] = useState<MemoryGameCard[]>([])
  const [canFlip, setCanFlip] = useState<boolean>(true)
  const [steps, setSteps] = useState<number>(0)

  // Timer
  const [time, setTime] = useState(0)
  const timerRef = useRef(0)

  const [matchedCards, setMatchedCards] = useState<number>(0)

  const { t } = useTranslation()
  const theme = useTheme()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)

    return () => clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    let timerId: number
    if (flippedCards.length === 2) {
      setSteps(s => s + 1)

      const isMatched = flippedCards[0].matchId === flippedCards[1].matchId
      if (isMatched) {
        setFlippedCards([])
        setMatchedCards(m => m + 1)
        return
      }

      setCanFlip(false)

      timerId = setTimeout(() => {
        const flippedIds = flippedCards.map(card => card.id)
        setCards(prevCards =>
          prevCards.map(card => (flippedIds.includes(card.id) ? { ...card, flipped: false } : card)),
        )
        setFlippedCards([])
        setCanFlip(true)
      }, 1500)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (matchedCards === size / 2) {
      clearInterval(timerRef.current)
      if (completionTime) {
        completionTime(formatTime())
      }
      handleSuccess(true)
      return
    }
  }, [matchedCards])

  const handleHexagonClick = (cardId: number) => {
    if (!canFlip) {
      return
    }

    setCards(prevCards =>
      prevCards.map(card => (card.id === cardId && !card.flipped ? { ...card, flipped: !card.flipped } : card)),
    )
    setFlippedCards(prevFlipped => {
      const card = cards.find(card => card.id === cardId && !card.flipped)
      if (!card) return prevFlipped
      return [...prevFlipped, card]
    })
  }

  const formatTime = () => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <Paper sx={{ margin: 2 }}>
      <Box display={'flex'} flexGrow={1} flexDirection={'column'} alignItems={'center'}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          alignContent={'center'}
          justifyContent={'space-between'}
          width='100%'
          marginTop={2}
        >
          <Typography
            variant={'body1'}
            // color={'#3ee221'}
            textAlign={'center'}
            bgcolor={theme.palette.divider}
            borderRadius={15}
            padding={1}
            mx={2}
          >
            {t('Moves', { moves: steps })}
          </Typography>
          <Typography
            variant={'body1'}
            textAlign={'center'}
            bgcolor={theme.palette.divider}
            borderRadius={15}
            padding={1}
            mx={2}
          >
            {formatTime()}
          </Typography>
        </Box>
        <Grid container spacing={3} padding={1} marginY={2}>
          {cards.map(card => (
            <Grid
              className='hexagon-container'
              key={card.id}
              // TODO: better size calculation
              size={{ xs: 12 / (cards.length > 10 ? 4 : cards.length / 2) }}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <div className={`hexagon ${card.flipped ? '' : 'flip'}`} onClick={() => handleHexagonClick(card.id)}>
                <div className='front'>{card.value}</div>
                <div className='back'>❔</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  )
}

export default MemoryGame
