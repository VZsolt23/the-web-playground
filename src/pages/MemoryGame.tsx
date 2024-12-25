import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import MemoryGame from '../games/MemoryGame'
import { Transition } from '../components/Transition.tsx'
import ResultDialog from '../components/ResultDialog.tsx'

const MemoryGamePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true)
  // const [isResultDialogOpen, setIsResultDialogOpen] = useState<boolean>(false)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState<number>(4)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [size, setSize] = useState<number>(0)
  const [completionTime, setCompletionTime] = useState<string>('')

  const { t } = useTranslation()

  const handleConfirmClick = () => {
    if (!isInvalid) {
      setSize(inputValue)
      setIsDialogOpen(false)
    }
  }

  return (
    <>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        aria-labelledby='memory-game-dialog-title'
        aria-describedby='memory-game-dialog-slide'
      >
        <DialogTitle id='memory-game-dialog-title'>{t('MemoryGameStartDialogTitle')}</DialogTitle>
        <DialogContent>
          <DialogContentText id='memory-game-dialog-slide'>{t('MemoryGameStartDialogDescription')}</DialogContentText>
          <TextField
            fullWidth
            margin='normal'
            error={isInvalid}
            type={'number'}
            value={inputValue}
            variant={'outlined'}
            slotProps={{ htmlInput: { min: 4, max: 24, step: 2 } }}
            label={t('MemoryGameStartDialogInputLabel')}
            helperText={isInvalid && t('MemoryGameStartDialogInputHelperText')}
            onChange={e => {
              const value = parseInt(e.target.value, 10)
              setInputValue(value)
              if (value && value >= 4 && value <= 24 && value % 2 === 0) {
                setIsInvalid(false)
              } else {
                setIsInvalid(true)
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'} onClick={handleConfirmClick}>
            {t('OK')}
          </Button>
        </DialogActions>
      </Dialog>
      {!isDialogOpen && <MemoryGame size={size} handleSuccess={setIsCompleted} completionTime={setCompletionTime} />}
      <ResultDialog
        open={isCompleted}
        shortMessage={t('CongratsShort')}
        message={t('MemoryGameResultMessage')}
        handleClose={() => {
          setIsCompleted(false)
          setIsDialogOpen(true)
        }}
        completionTimeString={completionTime}
      />
    </>
  )
}

export default MemoryGamePage
