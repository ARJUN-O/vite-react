import { useNavigate } from "react-router-dom";
import "./BookDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BookDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="book-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </button>
      <div className="book-info">
        <img
          src="/images/f2-factor-cover.jpeg"
          alt="F2 Factor"
          className="book-cover-large"
        />
        <h2 className="book-title">F2 Factor</h2>
        <p className="book-full-description">
          {" "}
          F2 Factor is a compelling feel-good romance that takes readers on a
          rollercoaster ride of emotions, love, and self-discovery.
          Twenty-one-year-old Freya Majid dreams of freedom and an exciting life
          as she prepares to pursue higher education in London, far away from
          her authoritarian and traditional parents. But fate has other plans. A
          two-wheeler accident derails her carefully crafted ambitions, leading
          to a series of unexpected events. Pressured into an arranged marriage,
          Freya’s world spirals out of control when the man from the accident
          reappears at her fiancé meeting, only to create chaos that ends with
          her losing consciousness. When Freya wakes up, she’s shocked to
          discover that two and a half years have passed, her memories have been
          wiped clean, and the man she once considered her nemesis is now her
          husband. Confused and struggling to adapt to this unfamiliar life,
          Freya feels like a stranger in her own story. While she fights to
          reclaim her independence and escape the life she doesn’t recognize,
          her husband is determined to rekindle the love that once united them.
          Will Freya rediscover the passion and connection she has lost? Or will
          her forgotten love story slip away forever? F2 Factor is a tale of
          resilience, second chances, and the power of love to transcend even
          the greatest challenges.
        </p>
        <a
          href="https://www.booklove.co.in/product-page/f2-factor"
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          Buy on Booklove
        </a>
      </div>
    </div>
  );
};

export default BookDetails;
