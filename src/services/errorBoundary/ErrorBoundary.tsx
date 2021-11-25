import React from 'react';
import { ErrorBoundary as REBErrorBoundary, FallbackProps } from 'react-error-boundary';

const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
  return (
    <div>
      <p>Something went wrong</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export const ErrorBoundary: React.FC = ({ children }) => (
  <REBErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Here we should reset the state of the app
    }}
    onError={() => {
      // Here we could log the error to a third party provider
    }}
  >
    {children}
  </REBErrorBoundary>
);
