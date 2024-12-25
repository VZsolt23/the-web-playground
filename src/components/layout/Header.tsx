import { Box, Stack } from '@mui/material'
import ColorModeIconDropdown from '../ColorModeIconDropdown.tsx'
import LanguageDropdown from '../LanguageDropdown.tsx'

const Header = () => {
  return (
    <header>
      <Box width='100%' display='flex' justifyContent={'flex-end'} alignItems='center'>
        <Stack direction={'row'} marginRight={2} marginTop={2} spacing={3}>
          <ColorModeIconDropdown />
          <LanguageDropdown />
        </Stack>
      </Box>
    </header>
  )
}

export default Header
