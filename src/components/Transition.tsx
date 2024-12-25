import { TransitionProps } from '@mui/material/transitions'
import { forwardRef } from 'react'
import { Slide } from '@mui/material'

export const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='down' ref={ref} {...props} />
})
