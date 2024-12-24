import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { AlertCircle } from 'lucide-react';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="flex items-center justify-center text-red-500 mb-4">
          <AlertCircle size={48} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Something went wrong
        </h2>
        <pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 w-full bg-cornflower-blue text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}