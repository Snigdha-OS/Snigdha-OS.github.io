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
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-6 w-6 text-cornflower-blue" />
        <h2 className="text-2xl font-extrabold text-gray-900">Verify Download</h2>
      </div>

      <div className="space-y-6">
        {/* SHA256 Checksum */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">SHA256 Checksum</h3>
            <code className="block p-3 bg-gray-50 rounded-lg text-sm break-all text-gray-800 border border-gray-200">
              {sha256}
            </code>
          </div>
          <button
            onClick={() => handleCopy(sha256, "sha256")}
            className="ml-3 p-2 text-cornflower-blue hover:bg-gray-100 rounded-lg transition"
            aria-label="Copy SHA256 checksum"
          >
            <Clipboard className="h-5 w-5" />
            {copied === "sha256" && (
              <span className="text-xs text-green-500 ml-2">Copied!</span>
            )}
          </button>
        </div>

        {/* GPG Signature */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">GPG Signature</h3>
            <code className="block p-3 bg-gray-50 rounded-lg text-sm break-all text-gray-800 border border-gray-200">
              {gpg}
            </code>
          </div>
          <button
            onClick={() => handleCopy(gpg, "gpg")}
            className="ml-3 p-2 text-cornflower-blue hover:bg-gray-100 rounded-lg transition"
            aria-label="Copy GPG signature"
          >
            <Clipboard className="h-5 w-5" />
            {copied === "gpg" && (
              <span className="text-xs text-green-500 ml-2">Copied!</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
