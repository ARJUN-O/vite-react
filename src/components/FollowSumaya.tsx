import "./FollowSumaya.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const FollowSumaya = () => {
  return (
    <div id="follow-sumaya" className="follow-sumaya">
      <h2>Follow Sumaya</h2>
      <div className="social-icons">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="mailto:sumaya@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default FollowSumaya;
