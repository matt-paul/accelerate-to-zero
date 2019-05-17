import Link from "gatsby-link"
import React from "react"
import { stylesheet } from "typestyle"

import Icon from "../../images/swordfish.inline.svg"

// Gatsby's Link overrides: Gatsby defines a global called ___loader to prevent
// its method calls from creating console errors you override it here
(global as any).___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment
(global as any).__PATH_PREFIX__ = "";

const Logo = () => (
  <Link to="/">
    <div>
      <Icon className={style.container} />
    </div>
  </Link>
)

const style = stylesheet({
  container: {
    width: "140px",
  },
})

export default Logo
