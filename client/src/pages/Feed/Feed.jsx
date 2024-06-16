import { useState } from 'react';
import './Feed.css';
import Story1 from '../../assets/Alice.jpg';
import Story2 from '../../assets/Bob.jpg';
import Story3 from '../../assets/Charlie.jpg';
import { FaPlus, FaSmile, FaImage, FaVideo, FaCalendar, FaEllipsisH } from 'react-icons/fa';
import profile from '../../assets/profile-p.jpg';

const Feed = () => {

  const stories = [
    { id: 1, author: 'Alice', content: 'Story 1', imageUrl: Story1 },
    { id: 2, author: 'Alice', content: 'Story 1', imageUrl: Story1 },
    { id: 3, author: 'Bob', content: 'Story 2', imageUrl: Story2 },
    { id: 4, author: 'Bob', content: 'Story 2', imageUrl: Story2 },
    { id: 5, author: 'Charlie', content: 'Story 3', imageUrl: Story3 },
    { id: 6, author: 'Charlie', content: 'Story 3', imageUrl: Story3 },
  ];

  const suggestions = [
    {
      id: 1,
      name: "John Doe",
      about: "Loves traveling and reading",
      photo: Story1,
    },
    {
      id: 2,
      name: "Jane Smith",
      about: "Tech enthusiast and engineer",
      photo: Story2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      about: "Fitness coach and yoga instructor",
      photo: Story3,
    },
    {
      id: 4,
      name: "Bob Brown",
      about: "Gamer and Software developer",
      photo: Story1,
    },
    {
      id: 5,
      name: "John Doe",
      about: "Loves traveling",
      photo: Story2,
    },
    {
      id: 6,
      name: "Jane Smith",
      about: "Tech enthusiast and blogger",
      photo: Story3,
    },
  ];

  const [text, setText] = useState("");

  const handleInput = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    setText(event.target.value);
  };

  return (
    <div className="feed-container">
      <div className="feed">
        <section className="stories">
          <div className="story-add">
            <button className="add-story-button">
              <FaPlus />
            </button>
            <p>
              Post a <br /> Story
            </p>
          </div>
          <div className="story-carousel">
            {stories.map(story => (
              <div key={story.id} className="story">
                <img
                  src={story.imageUrl}
                  alt={story.author}
                  className="story-image"
                />
                <div className="overlay">
                  <p className="author-name">{story.author}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="write-post">
          <div className="write-post-box">
            <div className='top-post'>
              <div className="profile-photo">
                <img src={profile} alt="Profile" className="profile-image" />
              </div>
              <textarea
                placeholder="Write your post..."
                className="post-textarea"
                value={text}
                onChange={handleInput}
              ></textarea>
            </div>
            <div className='down-post'>
              <div className="post-buttons">
                <button className="post-button">
                  <FaImage className='icon-pic' style={{ marginRight: '8px' }} /> Photo
                </button>
                <button className="post-button">
                  <FaVideo className='icon-vid' style={{ marginRight: '8px' }} /> Video
                </button>
                <button className="post-button">
                  <FaCalendar className='icon-cal' style={{ marginRight: '8px' }} /> Event
                </button>
                <button className="post-button">
                  <FaSmile className='icon-smile' style={{ marginRight: '8px' }} /> Feeling/Activity
                </button>
              </div>
              <div className="post-buttons">
                <button className="post-button">
                  <FaEllipsisH />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <aside className="who-to-follow">
        <h2>Who to Follow</h2>
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="who-to-follow-item">
            <div className="who-to-follow-photo">
              <img src={suggestion.photo} alt={suggestion.name} className="who-to-follow-image" />
            </div>
            <div className="who-to-follow-info">
              <div className="who-to-follow-name">{suggestion.name}</div>
              <div className="who-to-follow-about">{suggestion.about}</div>
            </div>
              <button className="follow-button">
                <FaPlus />
              </button>
          </div>
        ))}
        <button className="view-more-button">View More</button>
      </aside>
    </div>
  );
};

export default Feed;
