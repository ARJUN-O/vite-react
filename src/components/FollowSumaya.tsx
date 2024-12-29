import "./FollowSumaya.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome

const FollowSumaya = () => {
  return (
    <div id="follow-sumaya" className="follow-sumaya">
      <h2>Follow Sumaya</h2>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/memoirs_of_an_amateur_?igsh=dXJiMGxrbDdwbDR1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/share/15d6b9Fmag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        {/* <a style={{ pointerEvents: "none" }} rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a> */}
        <a href="mailto:sumayasiddique@gmail.com" target="_blank">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default FollowSumaya;
