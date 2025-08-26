import { Card } from '@/components/ui/card';

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

interface ReleasesSectionProps {
  releases: GitHubRelease[];
  loading: boolean;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default function ReleasesSection({ releases, loading }: ReleasesSectionProps) {
  return (
    <main className="py-20 bg-specter-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Specter Releases:</h2>
        
        {loading ? (
          <div className="text-center">Loading releases...</div>
        ) : (
          <div className="space-y-8">
            {releases.slice(0, 5).map((release, index) => (
              <Card key={release.tag_name} className="bg-specter-navy rounded-xl p-8 border-0">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {release.tag_name} {index === 0 && <span className="text-specter-coral">Latest</span>}
                    </h3>
                    <p className="text-gray-400">Date: {formatDate(release.published_at)}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Assets:</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {release.assets.map((asset) => (
                      <div key={asset.name} className="bg-specter-dark rounded-lg p-4">
                        <a 
                          href={asset.browser_download_url}
                          className="text-specter-coral hover:underline font-mono text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {asset.name}
                        </a>
                        <p className="text-gray-400 text-xs mt-1">{formatFileSize(asset.size)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <details className="cursor-pointer">
                  <summary className="text-specter-coral hover:underline font-semibold">
                    {release.tag_name} details
                  </summary>
                  <div className="mt-4 p-4 bg-specter-dark rounded-lg">
                    <div className="prose prose-invert max-w-none">
                      <div className="whitespace-pre-wrap text-gray-300">
                        {release.body || 'No release notes available.'}
                      </div>
                    </div>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
