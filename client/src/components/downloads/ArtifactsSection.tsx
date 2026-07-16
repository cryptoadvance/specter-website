import { Card } from '@/components/ui/card';

export default function ArtifactsSection() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Artifacts</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-300 mb-8">
          Specter is available in several forms: as a GUI application, as a binary that can be executed like a web app, and as a PyPI package. Additionally, Specter is available as a Docker image via the awesome{' '}
          <a href="https://github.com/lncm/docker-specter-desktop" className="text-specter-coral hover:underline">
            Chiang Mai LN devs
          </a>.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Signed hashsum files are available for all binaries.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-specter-navy rounded-xl p-6 border-0">
            <h3 className="text-xl font-bold mb-4 text-white">GUI Application</h3>
            <p className="text-gray-300 mb-4">
              This is a GUI application with a windowed interface, which includes the Specter server.
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Note on Linux:</strong> you need to set up udev rules (included in the archive). Check out the{' '}
              <a href="https://github.com/cryptoadvance/specter-desktop/blob/master/udev/README.md#usage" className="text-specter-coral hover:underline">
                readme
              </a>.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              <strong>Note on macOS:</strong> The current build supports only macOS Catalina (10.15) or higher.
            </p>
          </Card>

          <Card className="bg-specter-navy rounded-xl p-6 border-0">
            <h3 className="text-xl font-bold mb-4 text-white">specterd</h3>
            <p className="text-gray-300 mb-4">
              Specterd is a command-line program that runs only the Specter server, behaving like a traditional web application.
            </p>
          </Card>

          <Card className="bg-specter-navy rounded-xl p-6 border-0">
            <h3 className="text-xl font-bold mb-4 text-white">PyPi Packages</h3>
            <p className="text-gray-300">
              If you're experienced Python user and/or developer, you might appreciate the{' '}
              <a href="https://pypi.org/project/cryptoadvance.specter/" className="text-specter-coral hover:underline">
                pypi-packages
              </a>{' '}
              which are also available on our github-release-page.
            </p>
          </Card>

          <Card className="bg-specter-navy rounded-xl p-6 border-0">
            <h3 className="text-xl font-bold mb-4 text-white">Signatures and hashes</h3>
            <p className="text-gray-300 text-sm">
              SHA256SUMS file contains sha256 hashes of all binary files and is signed with the "Specter Signer 2026" GPG key.
              You can get the public key from{' '}
              <a href="http://keyserver.ubuntu.com/pks/lookup?op=get&search=0x9dc33ca830589de3b3225c26eef5756b2ea42349" className="text-specter-coral hover:underline">
                here
              </a>.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Fingerprint of the key is <code className="bg-specter-dark px-1 rounded">9DC3 3CA8 3058 9DE3 B322 5C26 EEF5 756B 2EA4 2349</code>
            </p>
            <p className="text-gray-300 text-sm mt-2">
              This key is certified by the personal key of Kim Neunert (<a href="https://github.com/k9ert" className="text-specter-coral hover:underline">@k9ert</a>),
              verifiable via{' '}
              <a href="https://api.github.com/users/k9ert/gpg_keys" className="text-specter-coral hover:underline">GitHub</a>,{' '}
              <a href="https://keybase.io/k9ert" className="text-specter-coral hover:underline">Keybase</a> or the{' '}
              <a href="https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x28b358a8843b0109" className="text-specter-coral hover:underline">Ubuntu keyserver</a>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
