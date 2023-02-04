import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'
import effect from '../../assets/effect.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect} alt="" />
      <img src={logoImg} alt="" />
      <img src={effect} alt="" />
    </HeaderContainer>
  )
}
