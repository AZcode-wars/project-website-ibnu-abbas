import React from "react";
import { Card } from "react-bootstrap";
import "../styles/skeleton.css";

export const Skeleton = ({ className = "", style = {} }) => {
  return <div className={`skeleton ${className}`} style={style}></div>;
};

export const ArticleCardSkeleton = ({ urgent = false }) => {
  return (
    <Card className="pondok-card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column">
      <div style={{ position: "relative" }}>
        <Skeleton className="skeleton-image" />
        {urgent && (
          <div className="position-absolute top-0 end-0 m-2">
            <Skeleton className="skeleton-badge" />
          </div>
        )}
      </div>
      <Card.Body className="p-4">
        <div className="mb-3">
          <Skeleton className="skeleton-title mb-2" style={{ width: "80%" }} />
          <Skeleton className="skeleton-title" style={{ width: "60%" }} />
        </div>
        <div className="mb-3">
          <Skeleton className="skeleton-text mb-2" style={{ width: "100%" }} />
          <Skeleton className="skeleton-text mb-2" style={{ width: "90%" }} />
          <Skeleton className="skeleton-text" style={{ width: "70%" }} />
        </div>
        <div className="mt-3">
          <Skeleton className="skeleton-text" style={{ width: "120px" }} />
        </div>
      </Card.Body>
    </Card>
  );
};
