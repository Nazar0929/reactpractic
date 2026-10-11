import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "nanoid"
import { addCard, deleteCard } from "../redux/actions"
function CardList () {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const cards = useSelector((state) => state.cards)
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
event.preventDefault()
if(!title || !description) {
    return
}

dispatch(addCard({
    id: nanoid(),
    title,
    description
}))
setTitle("")
setDescription("")
    }
    return (
        <>
  <form onSubmit={handleSubmit}>
  <input 
    type="text" 
    placeholder="name" 
    value={title} 
    onChange={event => setTitle(event.target.value)}
  />
  <input 
    type="text" 
    placeholder="descriptions" 
    value={description} 
    onChange={event => setDescription(event.target.value)}
  />
  <button type="submit"></button>
</form>
        <ul>
            {cards.map((card)=> {
                return <li key={card.id}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <button type="button" onClick={()=> dispatch(deleteCard(card.id))}>delete</button>

                </li>
                
            })}
        </ul>
        </>
    )
}

export default CardList