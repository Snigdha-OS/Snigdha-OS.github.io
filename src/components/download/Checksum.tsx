import { Shield, Clipboard } from 'lucide-react';
import { useState } from 'react';

interface ChecksumProps {
  sha256: string;
  gpg: string;
}

export function Checksum({ sha256, gpg }: ChecksumProps) {
  const [copied, setCopied] = useState<"sha256" | "gpg" | null>(null);

  const handleCopy = (text: string, type: "sha256" | "gpg") => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000); // Reset feedback after 2 seconds
    });
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-cornflower-blue" />
        <h2 className="text-3xl font-extrabold text-gray-900">Verify Download</h2>
      </div>

      <div className="space-y-8">
        {/* SHA256 Checksum */}
        <div className="flex justify-between items-center">
          <div className="w-3/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">SHA256 Checksum</h3>
            <code className="block p-4 bg-gray-100 rounded-lg text-sm break-all text-gray-900 border border-gray-300 shadow-md">
              {sha256}
            </code>
          </div>
          <button
            onClick={() => handleCopy(sha256, "sha256")}
            className="ml-6 p-3 text-cornflower-blue hover:bg-blue-50 hover:text-cornflower-blue rounded-full transition-all transform active:scale-95 animate-button"
            aria-label="Copy SHA256 checksum"
          >
            <Clipboard className="h-6 w-6" />
            {copied === "sha256" && (
              <span className="text-xs text-green-500 ml-2 animate-fade-in">Copied!</span>
            )}
          </button>
        </div>

        {/* GPG Signature */}
        <div className="flex justify-between items-center">
          <div className="w-3/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">GPG Signature</h3>
            <code className="block p-4 bg-gray-100 rounded-lg text-sm break-all text-gray-900 border border-gray-300 shadow-md">
              {gpg}
            </code>
          </div>
          <button
            onClick={() => handleCopy(gpg, "gpg")}
            className="ml-6 p-3 text-cornflower-blue hover:bg-blue-50 hover:text-cornflower-blue rounded-full transition-all transform active:scale-95 animate-button"
            aria-label="Copy GPG signature"
          >
            <Clipboard className="h-6 w-6" />
            {copied === "gpg" && (
              <span className="text-xs text-green-500 ml-2 animate-fade-in">Copied!</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
