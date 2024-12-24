import { Shield } from 'lucide-react';

interface ChecksumProps {
  sha256: string;
  gpg: string;
}

export function Checksum({ sha256, gpg }: ChecksumProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-cornflower-blue" />
        <h2 className="text-xl font-semibold text-gray-900">Verify Download</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1">SHA256 Checksum</h3>
          <code className="block p-2 bg-gray-100 rounded text-sm break-all">{sha256}</code>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1">GPG Signature</h3>
          <code className="block p-2 bg-gray-100 rounded text-sm break-all">{gpg}</code>
        </div>
      </div>
    </div>
  );
}