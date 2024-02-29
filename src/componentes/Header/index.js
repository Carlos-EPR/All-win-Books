import IconesHeader from '../../componentes/IconesHeader';
import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
    </HeaderContainer>
  )
}

export default Header;