import React, { useState, useEffect } from "react"

const originalTitle = document.title

const DynamicTabTitle = () => {
  const [tabChanged, setTabChanged] = useState(false)

  const checkTabState = () => {
    setInterval(() => changeTabTitle(), 1000)
  }

  const changeTabTitle = () => {
    const comebackTitle = "Hej, wróć do nas:)"
    const thankyouTitle = "Super Cię znowu widzieć!"

    if (document.hidden) {
      inactiveTitle(comebackTitle)
    }

    if (!document.hidden && tabChanged) {
      activeTitle(thankyouTitle)
    }
  }

  const activeTitle = message => {
    document.title = message
    setTimeout(() => setOriginalTitle(), 1000)
  }

  const inactiveTitle = message => {
    document.title = message
    setTabChanged(true)
  }

  const setOriginalTitle = () => {
    document.title = originalTitle
    return clearInterval(activeTitle)
  }

  useEffect(() => {
    checkTabState()
    return clearInterval(checkTabState)
  })

  return <></>
}
export default DynamicTabTitle
