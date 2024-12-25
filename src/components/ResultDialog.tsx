import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import { ResultDialogProps } from '../common/types.ts'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Transition } from './Transition.tsx'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ResultDialog = ({ open, handleClose, shortMessage, message, completionTimeString }: ResultDialogProps) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} TransitionComponent={Transition} maxWidth={'lg'} keepMounted aria-describedby='response-dialog'>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: 2,
          }}
        >
          <CheckCircleIcon color='success' sx={{ fontSize: 60, marginBottom: 2 }} />
          <Typography variant='h5' gutterBottom>
            {shortMessage}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {message}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {`${t('YourTime')} ${completionTimeString}`}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ paddingBottom: 2 }}>
        <Button component={Link} to={'/'} variant='contained' color='secondary'>
          {t('Home')}
        </Button>
        <Button onClick={handleClose} variant='contained' color='primary'>
          {t('NewGame')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ResultDialog
