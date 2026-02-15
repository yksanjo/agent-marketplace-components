import React from 'react';
import './AgentCard.css';

/**
 * AgentCard - A card component displaying AI agent information
 * 
 * @param {string} name - Agent name
 * @param {string} vendor - Agent vendor
 * @param {string} category - Agent category
 * @param {string} description - Agent description
 * @param {number} price - Agent price
 * @param {number} rating - Agent rating
 * @param {string} icon - Agent emoji icon
 * @param {boolean} isDeployed - Whether agent is deployed
 * @param {function} onDeploy - Deploy button callback
 */
export function AgentCard({ 
  name, 
  vendor, 
  category, 
  description, 
  price, 
  rating, 
  icon,
  isDeployed = false,
  onDeploy 
}) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  };

  return (
    <div className="agent-card">
      <div className="agent-card-header">
        <div className="agent-icon">{icon}</div>
        <div className="agent-info">
          <h3 className="agent-name">{name}</h3>
          <p className="agent-vendor">{vendor}</p>
        </div>
      </div>
      
      <span className="agent-category">{category}</span>
      
      <p className="agent-description">{description}</p>
      
      <div className="agent-meta">
        <div className="agent-rating">
          <span className="agent-rating-stars">{renderStars(rating)}</span>
          <span className="agent-rating-value">{rating}</span>
        </div>
        <div className={`agent-price ${price === 0 ? 'free' : ''}`}>
          {price === 0 ? 'Free' : `$${price}/mo`}
        </div>
      </div>
      
      <button 
        className={`btn-deploy ${isDeployed ? 'deployed' : ''}`}
        onClick={() => onDeploy && onDeploy()}
        disabled={isDeployed}
      >
        {isDeployed ? '✓ Deployed' : 'Deploy'}
      </button>
    </div>
  );
}

export default AgentCard;
