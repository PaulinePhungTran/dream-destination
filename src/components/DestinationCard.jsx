// src/components/DestinationCard.jsx
export default function DestinationCard({ title, img, url }) {
    return (
      <article className="card">
        <div className="media">
          <img src={img} alt={title} loading="lazy" />
        </div>
  
        <div className="cardBody">
          <h3 className="cardTitle">{title}</h3>
          <a
            className="btn"
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </a>
        </div>
      </article>
    );
  }
  