export interface ResultDialogProps {
  open: boolean
  shortMessage: string
  message: string
  handleClose: () => void
  completionTimeString?: string
}

export type MemoryGameCard = {
  id: number
  matchId: number
  value: string
  flipped: boolean
  matched: boolean
}
