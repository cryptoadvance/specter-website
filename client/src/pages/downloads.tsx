import { useState, useEffect } from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import DownloadHeroSection from '@/components/downloads/DownloadHeroSection';
import ReleasesSection from '@/components/downloads/ReleasesSection';
import ArtifactsSection from '@/components/downloads/ArtifactsSection';

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  body: string;
  prerelease: boolean;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
  }>;
}

export default function Downloads() {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/cryptoadvance/specter-desktop/releases');
        const data: GitHubRelease[] = await response.json();

        // Filter out pre-releases
        const stableReleases = data.filter(release => !release.prerelease);

        console.log('All releases:', data.length);
        console.log('Stable releases:', stableReleases.length);
        console.log('Latest stable release:', stableReleases[0]?.tag_name);

        setReleases(stableReleases);
        setLatestRelease(stableReleases[0] || null);
      } catch (error) {
        console.error('Error fetching releases:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  return (
    <div className="bg-specter-dark text-white font-sans">
      <Header />

      <DownloadHeroSection latestRelease={latestRelease} loading={loading} />
      <ReleasesSection releases={releases} loading={loading} />
      <div className="container mx-auto px-4">
        <ArtifactsSection />
      </div>

      <Footer />
    </div>
  );
}
