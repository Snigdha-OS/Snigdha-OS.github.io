export interface Mirror {
  id: string;
  name: string;
  location: string;
  url: string;
  speed: number;
}

export interface DownloadVersion {
  version: string;
  size: string;
  url: string;
  sha256: string;
  gpg: string;
}