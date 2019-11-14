import React from "react"

import Header from "../../components/Header"
import Container from "../../components/Container"

const BasePage = ({ children }) => (
  <div className="bg-gray-100">
    <Header />
    <Container>{children}</Container>
  </div>
)

export default BasePage
