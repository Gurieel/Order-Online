// Outlet, componente que renderiza sub-páginas na página principal
import { Outlet } from 'react-router-dom'
import { Container } from './styles'

import Sidebar from '../../components/Sidebar'
import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} alt='Logo da empresa' />
        <Outlet />
      </section>
    </Container>
  )
}
