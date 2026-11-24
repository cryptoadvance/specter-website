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

const getDesktopAssets = (assets: GitHubAsset[]) => ({
  mac: assets.find(asset => asset.name.endsWith('.dmg')),
  windows: assets.find(asset => asset.name.includes('Setup') && asset.name.endsWith('.exe')),
  linux: assets.find(asset => asset.name.includes('linux-gnu.tar.gz') && !asset.name.includes('specterd')),
});

const getServerAssets = (assets: GitHubAsset[]) => ({
  macArm: assets.find(asset => /^specterd-.*-osx_arm64\.zip$/.test(asset.name)),
  macIntel: assets.find(asset => /^specterd-.*-osx_x64\.zip$/.test(asset.name)),
  windows: assets.find(asset => /^specterd-.*-win64\.zip$/.test(asset.name)),
  linux: assets.find(asset => /^specterd-.*-x86_64-linux-gnu\.zip$/.test(asset.name)),
});

export default function DownloadHeroSection({ latestRelease, loading }: DownloadHeroSectionProps) {
  const desktop = latestRelease ? getDesktopAssets(latestRelease.assets) : null;
  const server = latestRelease ? getServerAssets(latestRelease.assets) : null;

  return (
    <section className="bg-gradient-to-br from-specter-dark to-specter-navy py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Download Specter Desktop</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Use <strong>your own node</strong>, improve <strong>your privacy</strong> and verify <strong>your Bitcoin</strong>.
        </p>

        {loading ? (
          <p>Loading latest release...</p>
        ) : latestRelease && desktop && server ? (
          <>
            <h2 className="text-3xl font-bold mb-3">Desktop app — {latestRelease.tag_name}</h2>
            <p className="text-gray-300 mb-6">Runs in its own window; includes the Specter server.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {desktop.mac && <PlatformDownloadCard platform="mac" buttonText="macOS app" downloadUrl={desktop.mac.browser_download_url} fileName={desktop.mac.name} version={latestRelease.tag_name} fileSize={desktop.mac.size} />}
              {desktop.windows && <PlatformDownloadCard platform="windows" buttonText="Windows app" downloadUrl={desktop.windows.browser_download_url} fileName={desktop.windows.name} version={latestRelease.tag_name} fileSize={desktop.windows.size} />}
              {desktop.linux && <PlatformDownloadCard platform="linux" buttonText="Linux app" downloadUrl={desktop.linux.browser_download_url} fileName={desktop.linux.name} version={latestRelease.tag_name} fileSize={desktop.linux.size} />}
            </div>
            {!desktop.windows && (
              <p className="mt-5 text-gray-300">No Windows desktop installer in this release. The Windows download below is the server, not the desktop app.</p>
            )}
            {!desktop.mac && !desktop.windows && !desktop.linux && (
              <p className="mt-5 text-gray-300">No desktop app downloads in this release.</p>
            )}

            <h2 className="text-3xl font-bold mt-14 mb-3">Server (specterd) — {latestRelease.tag_name}</h2>
            <p className="text-gray-300 mb-6">Runs without a desktop window; use its interface in a browser.</p>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {server.macArm && <PlatformDownloadCard platform="mac" buttonText="macOS server (Apple Silicon)" downloadUrl={server.macArm.browser_download_url} fileName={server.macArm.name} version={latestRelease.tag_name} fileSize={server.macArm.size} />}
              {server.macIntel && <PlatformDownloadCard platform="mac" buttonText="macOS server (Intel)" downloadUrl={server.macIntel.browser_download_url} fileName={server.macIntel.name} version={latestRelease.tag_name} fileSize={server.macIntel.size} />}
              {server.windows && <PlatformDownloadCard platform="windows" buttonText="Windows server" downloadUrl={server.windows.browser_download_url} fileName={server.windows.name} version={latestRelease.tag_name} fileSize={server.windows.size} />}
              {server.linux && <PlatformDownloadCard platform="linux" buttonText="Linux server" downloadUrl={server.linux.browser_download_url} fileName={server.linux.name} version={latestRelease.tag_name} fileSize={server.linux.size} />}
            </div>
            {!server.macArm && !server.macIntel && !server.windows && !server.linux && (
              <p className="mt-5 text-gray-300">No specterd downloads in this release.</p>
            )}
          </>
        ) : (
          <p className="text-gray-300">Unable to load downloads. Please use the GitHub releases page below.</p>
        )}

        <div className="mt-12">
          <a href="https://github.com/cryptoadvance/specter-desktop/releases" target="_blank" rel="noopener noreferrer" className="inline-block text-specter-coral hover:underline">
            All releases and signatures
          </a>
        </div>
        <p className="mt-8 text-gray-300">
          View our Open Source project on{' '}
          <a href="https://github.com/cryptoadvance/specter-desktop" target="_blank" rel="noopener noreferrer" className="text-specter-coral hover:underline">GitHub.</a>
        </p>
      </div>
    </section>
  );
}
