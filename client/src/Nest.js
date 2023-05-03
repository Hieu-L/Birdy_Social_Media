import React from 'react';
import ChirpBox from './ChirpBox';
import "./Nest.css";
import Post from './Post';
import ProfileCard from './ProfileCard';

function Nest(props) {
  const cover = "https://th.bing.com/th/id/R.e72cf06ab05a2cf5a76b50808cdb22ed?rik=UrdjpsagxDuafA&pid=ImgRaw&r=0"
  const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"
  const name = "Birdy No1"
  const pseudo = "BigBoyPiou"
  const followers = "10"
  const following = "4"
 
  return (
    <div className="nest">
        {/* Header */}
        <div className="nest_head">
            {props.page === "ProfilePage" ? <h2>Profile </h2>: <h2>Nest</h2>}
        </div>

        {props.page === "ProfilePage" ? <ProfileCard name={name} pseudo={pseudo} cover={cover} pic={pic} followers={followers} following={following} page={props.page} /> : ""}
        {/* ChirpBox : To make a new Post*/}
        <ChirpBox page={props.page}/>

        {/* Post */}
        <Post name="Birdy No1" pseudo="BigBoyPiou" pic={pic} text="Any Piou Piou you want duh" image={pic}/>
        <Post name="Birdy No1" pseudo="BigBoyPiou" pic="H" text="Any Piou Piou you want duh" image={pic}/>
        <Post name="Birdy No1" pseudo="BigBoyPiou" pic="H" text="Any Piou Piou you want duh" image={pic}/>


    </div>
  )
}

export default Nest