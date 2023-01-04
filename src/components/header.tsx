import { observer } from "mobx-react-lite"
import styled from "styled-components"
import { Content } from "./content-wrapper"
import github from "../assets/images/gh.png"
import ruIcon from "../assets/images/ru.jpg"
import gbIcon from "../assets/images/gb.jpg"
import { useLang } from "../langs"
import { useStore } from "../store/use-store"
import { ScrollToSmooth } from "../utils/helpers"

const HeaderWrapper = styled.header`
    width: 100%;
    min-height: 80px;
    background-color: transparent;
    border-bottom: 1px solid whitesmoke;
    padding: 20px 0;
`
const HeaderIcon = styled.a`
  text-decoration: none;
  min-width: 150px;
  @media screen and (max-width: 768px) {
    min-width: 0;
  }
`
const GHIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`

const Menu = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`
const MenuLink = styled.p`
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  transition: 0.3s;
  letter-spacing: 1px;
  cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  @media screen and (max-width: 540px) {
    text-align: center;
    margin-bottom: 8px;
  }
`
const LangIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  :last-of-type {
    transform: translateX(-10px);
    position: relative;
    z-index: 1;
  }
  &.active {
    opacity: 1;
    position: relative;
    z-index: 2;
    box-shadow: 3px 0 15px, -3px 0 15px;
    cursor: default;
  }
`

export const Header = observer(() => {
    const lang = useLang()
    const store = useStore()
    const isEng = store.Lang === 'en'
    
    const changeLang = (event: any) => {
      if (!event.target.classList.contains('active')) {
        if(isEng){
          store.setLang('ru')
        }else{
          store.setLang('en')
        }
      }
    } 

    return (
        <HeaderWrapper id="top">
            <Content className="flex-row between centered-align">
              <HeaderIcon
                className="flex-row centered-align"
                href="https://github.com/anton-zm"
                target="_blanc"
                title="My GitHub"
              >
                <GHIcon src={github} alt="GitHub" />
              </HeaderIcon>
              <Menu>
                <MenuLink onClick={() => ScrollToSmooth('#projects')}>{lang.projects}</MenuLink>
                <MenuLink onClick={() => ScrollToSmooth('#contacts')}>{lang.contacts}</MenuLink>
                <MenuLink onClick={() => ScrollToSmooth('#certificates')}>{lang.certificates}</MenuLink>
                <MenuLink onClick={() => ScrollToSmooth('#stack')}>{lang.stack}</MenuLink>
              </Menu>
              <div className="flex-row">
                <LangIcon
                  src={gbIcon}
                  onClick={changeLang}
                  alt="English"
                  className={`${isEng ? 'active' : ''}`}
                />
                <LangIcon
                  src={ruIcon}
                  onClick={changeLang}
                  alt="Russian"
                  className={`${!isEng ? 'active' : ''}`}
                />
              </div>
            </Content>
        </HeaderWrapper>
    )
})