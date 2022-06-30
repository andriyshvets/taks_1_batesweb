import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { Header } from "./components/Header";
import { EventInfo } from "./components/EventInfo";
import "./App.scss";

const App = () => {
  const event = {
    id: uuidv4(),
    title: "Lorem ipsum dolor sit amet",
    time: new Date(),
    isPublished: false
  };
  console.log(event);

  // const [title, setTitle] = useState('');
  // const [time, setTime] = useState(new Date());
  // const [isPublished, setIsPublished] = useState(false);

  return (
    <div className="App">
      <Header />




    <div className="button">
        <div className="button__publish">
          <button className="button__publish-ed button__publish-style">Published</button>
          <button className="button__publish-un button__publish-style">Unpublished</button>
        </div>
      <button className="button__addevent">+ Add Event</button>
    </div>

      <EventInfo title={event.title}/>
    </div>
  );
};

export default App;
