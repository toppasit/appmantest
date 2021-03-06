import e from 'cors'
import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const DexContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${colorList.modalOutside};
  height: inherit;
`

export const DexBody = styled.div`
  margin: 2%;
  background-color: ${colorList.modalContentBackground};
  box-shadow: 0 0 5px ${colorList.modalContentBoxShadow};
  height: 93%;
  padding: 8px 4px;
  overflow: auto;
`

export const SearchBar = styled.div`
  box-shadow: 0 0 5px ${colorList.searchBoxBorder};
  display: flex;
  justify-content: space-between;
`

export const SearchInput = styled.input`
  border: none;
  font-family: Gaegu;
  width: 100%;
  font-size: 32px;
`

export const SearchIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`

export const ListContainer = styled.div`
  padding: 8px;
`

export const EachPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colorList.cardBackground};
  margin: 16px 0;
  padding: 8px;
  box-shadow: 0 0 5px ${colorList.cardBoxShadow};
  :hover {
    box-shadow: 0 0 5px ${colorList.cardBoxShadowHover};
    div {
      visibility: visible;
    }
  }
`

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const PokeStat = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 16px;
  width: 60%;
`

export const PokeName = styled.h2`
  font-family: Gaegu;
  font-weight: lighter;
  margin: 8px 0 0 0;
`

export const EachStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  padding: 4px;
`

export const Text = styled.p`
  margin: 0;
`

export const LevelBar = styled.div`
  background-color: ${colorList.levelTubeBackground};
  box-shadow: 0 0 5px ${colorList.levelTubeBoxShadow};
  border-radius: 15px;
  width: 90%;
`

export const LevelContent = styled.div`
  background-color: ${colorList.levelTubeValueBackground};
  border-radius: 15px;
  padding: 13px 0;
  width: ${props => props.width};
`

export const AddButtonContainer = styled.div`
  height: fit-content;
  margin: 0;
  color: ${colorList.colorAddButton};
  :hover {
    cursor: pointer;
  }
  font-size: 24px;
  visibility: hidden;
`

export const SearchSelect = styled.select`
  margin: 4px 0 0 4px;
  padding: 4px;
  font-family: 'Atma';
  border-radius: 4px;
  border: 1px solid ${colorList.searchBoxBorder};
`