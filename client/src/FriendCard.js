import React from 'react'
import User from './User'
import { useState , useEffect } from 'react'
import PeopleModal from './PeopleModal';
import './FriendCard.css'
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3001';

function FriendCard(props) {

    const [modalOpened, setModalOpened] = useState(false);
    const [card, setCard] = useState('')
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect( () => {
        try { 
            axios.get('/apifriends/user/id_'+props.admin+'/friends')
            .then(res => { const listusers = res.data.userList; setUsers(listusers) }) 
        }   catch(e) { console.log("error getting all users") }
    }, [users] )

    const handleButton = () =>{
        setModalOpened(true)
        setCard('friend')
    }


    return (

        <div className={ props.page !=="modal" ? "friend" : "modalFriend"}>
            <h3> Who I Follow </h3>

            <div className='searchfriend'> 
                <input type="text" placeholder="Explore" onChange={(e) => setFilter(e.target.value)}/>
            </div>

            {props.page !== "modal" 
                ? <div>{ users.filter(user => user.username.includes(filter)).slice(0,5).map(u =><User homeHandler={(elem) => props.homeHandler(elem)} name={u.username} pic={u.pic} followStat={u.followStat}/>)}</div>
                : <div>{ users.filter(user => user.username.includes(filter)).map(u =><User homeHandler={(elem) => props.homeHandler(elem)} name={u.username} pic={u.pic} followStat={u.followStat}/>)}</div>
            }
            
            {props.page !== "modal" ? <hr />:""}
            {props.page !== "modal" ? <span onClick={() => handleButton()}>Show more</span> : ""}

            <PeopleModal
                admin = {props.admin}
                card={card}
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                homeHandler={(elem) => props.homeHandler(elem)}
            /> 
        </div>

    )
}

export default FriendCard