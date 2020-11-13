import { MainLayoutStyled, Border } from '../../styles/layouts/main'

function MainLayout({ children }) {
  return (
    <MainLayoutStyled>
      <Border>{children}</Border>
    </MainLayoutStyled>
  )
}

export default MainLayout
