---
to: src/components/<%= h.projectCase(name)%>/index.jsx
--- 
import classnames from 'classnames'

export default function <%= h.changeCase.pascal(name) %>({otherClasses}) {
  const <%= h.changeCase.camel(name) %>Classes = classnames(
    otherClasses
  )
  
  return (
    <div className={<%= h.changeCase.camel(name) %>Classes} data-testid='<%= h.changeCase.param(name) %>'>
     <%= h.projectCase(name)%> Component!
    </div>
  )
}

