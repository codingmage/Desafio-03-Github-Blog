import styled from 'styled-components'

export const HeaderContainer = styled.header`
  //background-color: ${(props) => props.theme['base-profile']};
  background-image: -moz-linear-gradient(#0b1b2b, 85%, #14589c80);
  background-image: -webkit-linear-gradient(#0b1b2b, 85%, #14589c80);
  display: flex;
  justify-content: space-between;
  height: 35vh;
  align-items: flex-start;

  img {
    display: flex;
    align-items: flex-start;
  }

  img:first-child {
    align-self: center;
    margin-top: 1rem;
  }

  img:nth-child(2) {
    height: 12rem;
    width: 8rem;
    margin-bottom: 5rem;
    margin-left: -1.5rem;
  }

  img:last-child {
    -moz-transform: scale(-1, -1);
    -o-transform: scale(-1, -1);
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, -1);

    margin-top: 0.5rem;
  }
`
