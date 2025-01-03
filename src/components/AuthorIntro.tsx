import "./AuthorIntro.css"; // Import the styles

const AuthorIntro = () => {
  // const [expanded, setExpanded] = useState(true);

  return (
    <div id="author-intro" className="author-intro-container">
      <div className="image-div">
        <img
          src="/images/sumaya-profile1.jpeg" // Replace with the correct image path
          alt="Sumaya Profile"
          className="profile-image"
        />
        <div className="user-name">Sumaya Siddique</div>
      </div>
      <div className="content-div">
        <div className="user-name">Sumaya Siddique</div>
        <div
          className={`bio`}
          // className={`bio ${expanded ? "expanded" : ""}`}
          // onTouchStart={(e) => e.preventDefault()}
          // onClick={() => setExpanded(!expanded)}
        >
          <p>
            Welcome to my corner of the world! I’m a writer fueled by a passion
            for crafting feel-good, light-hearted stories that leave readers
            smiling. Writing is my adrenaline rush—it’s where my thoughts come
            alive and my heart feels at home.
          </p>
          <p>
            An avid reader at heart, I find solace in stories that uplift and
            inspire, often drawn to tales of love, dreams, and human
            connections. When I’m not immersed in books, you’ll likely find me
            cheering passionately for my favorite cricket team—because, yes, I’m
            also a die-hard cricket fan!
          </p>
          <p>
            {" "}
            As an introvert, I might stumble over small talk, but get me started
            on books, writing, or cricket, and I could talk endlessly. My
            philosophy in life is simple: “Live and let live.” It’s this mantra
            that shapes not only my worldview but also the heart of the
            characters I create.{" "}
          </p>
          <p>
            Thank you for stopping by. Whether you’re here for my writing or
            share my love for books and reading, I hope you find something that
            resonates with you. Let’s create a world of stories together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorIntro;
