import './App.css';
import Nav from './components/Navbar'
import Flixlogo from "./flix_Logo.svg"
import Heading from './components/Heading';
import Section from './components/Section';
import Post from './components/Post'
import PostCard from './components/PostCard';
import ProfileList from './components/ProfileList';
import Profile from './components/Profile'

function App() {
  return (
    <>
    <div className="App flex flex-row">
      <div class="basis-1/4 bg-yellow-200 rounded-r-3xl my-2">
        <Nav props1 = {Flixlogo}></Nav>
      </div>
      <div class="basis-1/2 pr-3">
        <Heading></Heading>
        <Section></Section>
        <Post></Post>
        <PostCard></PostCard>
      </div>
      <div class="basis-1/4">
        <Profile></Profile>
        <ProfileList></ProfileList>
      </div>
    </div>
    </>
  );
}

export default App;
