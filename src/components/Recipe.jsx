/* eslint-disable react/prop-types */
import Markdown from 'react-markdown'

export default function Recipe(props) {
  return (
    <section>
        <h2>Chef Mixtral Recommends:</h2>
        {<Markdown>{props.recipe}</Markdown>}
    </section>
  )
}
