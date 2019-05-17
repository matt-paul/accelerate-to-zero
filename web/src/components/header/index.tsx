import React from "react"
import { stylesheet } from "typestyle"

import Logo from "../logo"

const Header = () => (
  <header className={style.container}>
    <Logo />
  </header>
)

const style = stylesheet({
  container: {
    margin: "0 auto",
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 960,
  },
})

export default Header
