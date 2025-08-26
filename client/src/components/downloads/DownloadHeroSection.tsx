import PlatformDownloadCard from './PlatformDownloadCard';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  prerelease: boolean;
  assets: GitHubAsset[];
}

interface DownloadHeroSectionProps {
  latestRelease: GitHubRelease | null;
  loading: boolean;
}

const getMainAssets = (assets: GitHubAsset[]) => {
  const macAsset = assets.find(asset => asset.name.endsWith('.dmg'));
  const winAsset = assets.find(asset => asset.name.includes('Setup') && asset.name.endsWith('.exe'));
  const linuxAsset = assets.find(asset => asset.name.includes('linux-gnu.tar.gz') && !asset.name.includes('specterd'));
  
  return { macAsset, winAsset, linuxAsset };
};

export default function DownloadHeroSection({ latestRelease, loading }: DownloadHeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-specter-dark to-specter-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Download Specter Desktop
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Use <strong>your own node</strong>, improve <strong>your privacy</strong> and verify <strong>your Bitcoin</strong>.
        </p>

        {loading ? (
          <div className="text-center">Loading latest release...</div>
        ) : latestRelease ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {(() => {
              const { macAsset, winAsset, linuxAsset } = getMainAssets(latestRelease.assets);

              // Debug logging
              console.log('Latest stable release:', latestRelease.tag_name);
              console.log('Total assets:', latestRelease.assets.length);
              console.log('Asset names:', latestRelease.assets.map(a => a.name));
              console.log('Found assets:', { macAsset: macAsset?.name, winAsset: winAsset?.name, linuxAsset: linuxAsset?.name });

              return (
                <>
                  {/* macOS */}
                  {macAsset && (
                    <PlatformDownloadCard
                      platform="mac"
                      downloadUrl={macAsset.browser_download_url}
                      fileName={macAsset.name}
                      version={latestRelease.tag_name}
                      fileSize={macAsset.size}
                    />
                  )}

                  {/* Windows */}
                  {winAsset && (
                    <PlatformDownloadCard
                      platform="windows"
                      downloadUrl={winAsset.browser_download_url}
                      fileName={winAsset.name}
                      version={latestRelease.tag_name}
                      fileSize={winAsset.size}
                    />
                  )}

                  {/* Linux */}
                  {linuxAsset && (
                    <PlatformDownloadCard
                      platform="linux"
                      downloadUrl={linuxAsset.browser_download_url}
                      fileName={linuxAsset.name}
                      version={latestRelease.tag_name}
                      fileSize={linuxAsset.size}
                    />
                  )}

                  {/* Fallback: Show message if no assets found */}
                  {!macAsset && !winAsset && !linuxAsset && (
                    <div className="col-span-3 text-center text-gray-400">
                      No compatible assets found for this release. Using fallback downloads.
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        ) : null}

        {/* Fallback: Always show hardcoded downloads if API fails or no assets found */}
        {(!latestRelease || !loading) && (
          <div className="mt-8">
            <div className="text-center text-gray-400 text-sm mb-4">
              {!latestRelease ? 'API unavailable - showing latest known stable release:' : ''}
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <PlatformDownloadCard
                platform="mac"
                downloadUrl="https://github.com/cryptoadvance/specter-desktop/releases/download/v2.0.5/Specter-v2.0.5.dmg"
                fileName="Specter-v2.0.5.dmg"
                version="v2.0.5"
              />
              <PlatformDownloadCard
                platform="windows"
                downloadUrl="https://github.com/cryptoadvance/specter-desktop/releases/download/v2.0.5/Specter-Setup-v2.0.5.exe"
                fileName="Specter-Setup-v2.0.5.exe"
                version="v2.0.5"
              />
              <PlatformDownloadCard
                platform="linux"
                downloadUrl="https://github.com/cryptoadvance/specter-desktop/releases/download/v2.0.5/specter_desktop-v2.0.5-x86_64-linux-gnu.tar.gz"
                fileName="specter_desktop-v2.0.5-x86_64-linux-gnu.tar.gz"
                version="v2.0.5"
              />
            </div>
          </div>
        )}

        <div className="mt-12">
          <a 
            href="https://github.com/cryptoadvance/specter-desktop/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-specter-coral hover:underline"
          >
            Signatures
          </a>
        </div>

        <p className="mt-8 text-gray-300">
          View our Open Source project on{' '}
          <a 
            href="https://github.com/cryptoadvance/specter-desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-specter-coral hover:underline"
          >
            Github.
          </a>
        </p>
      </div>
    </section>
  );
}
