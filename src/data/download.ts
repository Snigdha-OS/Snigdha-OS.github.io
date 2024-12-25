export interface DownloadVersion {
  version: string;
  size: string;
  url: string;
  sha256: string;
  gpg: string;
}

export const downloads: DownloadVersion[] = [
  {
    version: 'Arctic V',
    size: '1.4 GB',
    url: 'https://snigdhaos.org/downloads/snigdhaos-2024.1-installer-amd64.iso',
    sha256: 'e4654e5633f4e1f8f57a9fb3dca02f9db06e9acb5e346f0fae9d9f5c3a9c0e9',
    gpg: '-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v2\n...',
  },
];