import React from "react";
import { Container, Button } from "react-bootstrap";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.children !== this.props.children) {
      this.setState({ hasError: false, error: null, errorInfo: null });
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 576;

    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f9fafb",
            padding: isMobile ? "1rem" : "2rem",
          }}
        >
          <Container>
            <div
              style={{
                maxWidth: "500px",
                margin: "0 auto",
                backgroundColor: "white",
                padding: isMobile ? "1.5rem 1rem" : "3rem 2rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <AlertTriangle
                size={isMobile ? 48 : 64}
                style={{ color: "#d97706", marginBottom: "1.5rem" }}
              />

              <h2
                style={{
                  fontSize: isMobile ? "1.25rem" : "1.75rem",
                  fontWeight: "bold",
                  color: "#064e3b",
                  marginBottom: "1rem",
                }}
              >
                Afwan, Terjadi Kesalahan
              </h2>

              <p
                style={{
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                Website mengalami kendala teknis. Silakan coba muat ulang
                halaman atau kembali ke beranda.
              </p>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <div
                  style={{
                    backgroundColor: "#fef2f2",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    marginBottom: "2rem",
                    textAlign: "left",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#991b1b",
                      fontFamily: "monospace",
                      marginBottom: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Error Details (Development Mode):
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#991b1b",
                      fontFamily: "monospace",
                      marginBottom: 0,
                      wordBreak: "break-word",
                    }}
                  >
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  gap: isMobile ? "0.75rem" : "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  onClick={this.handleReload}
                  style={{
                    backgroundColor: "#064e3b",
                    border: "none",
                    padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <RefreshCw size={18} />
                  Coba Lagi
                </Button>

                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  style={{
                    borderColor: "#064e3b",
                    color: "#064e3b",
                    padding: isMobile ? "0.5rem 1rem" : "0.60rem 1rem",
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Home size={18} />
                  Kembali ke Beranda
                </Button>
              </div>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
